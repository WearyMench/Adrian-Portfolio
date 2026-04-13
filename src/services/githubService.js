const GITHUB_API_BASE = "https://api.github.com";
const USERNAME = "WearyMench";

const MAX_RETRIES = 5;

class GitHubService {
  constructor() {
    this.cache = new Map();
    /** Successful API responses — reused past expiry when GitHub returns 403/429 */
    this.cacheExpiry = 20 * 60 * 1000;
    this.readmeCacheExpiry = 45 * 60 * 1000;
    this.inflight = new Map();
    this._lastLangFetchAt = 0;
  }

  _getAuthHeaders() {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  }

  _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Wait time from GitHub rate-limit headers, with bounded exponential fallback.
   */
  _getRetryDelayMs(response, attempt) {
    const retryAfter = response.headers.get("retry-after");
    if (retryAfter) {
      const sec = parseInt(retryAfter, 10);
      if (!Number.isNaN(sec) && sec > 0) {
        return Math.min(sec * 1000, 120_000);
      }
    }
    const reset = response.headers.get("x-ratelimit-reset");
    if (reset) {
      const ms = parseInt(reset, 10) * 1000 - Date.now() + 2000;
      if (ms > 0) return Math.min(ms, 3_600_000);
    }
    return Math.min(4000 * 2 ** (attempt - 1), 90_000);
  }

  _languageRequestGapMs() {
    return import.meta.env.VITE_GITHUB_TOKEN ? 80 : 400;
  }

  async _throttleLanguageRequests() {
    const gap = this._languageRequestGapMs();
    const now = Date.now();
    const last = this._lastLangFetchAt || 0;
    const elapsed = now - last;
    if (last > 0 && elapsed < gap) {
      await this._sleep(gap - elapsed);
    }
    this._lastLangFetchAt = Date.now();
  }

  async fetchJsonWithCache(url, cacheKey) {
    const cached = this.cache.get(cacheKey);
    const isFresh =
      cached && Date.now() - cached.timestamp < this.cacheExpiry;

    if (isFresh) {
      return cached.data;
    }

    let lastError;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await fetch(url, {
          headers: this._getAuthHeaders(),
        });

        if (response.ok) {
          const data = await response.json();
          this.cache.set(cacheKey, {
            data,
            timestamp: Date.now(),
          });
          return data;
        }

        if (response.status === 403 || response.status === 429) {
          if (cached) {
            console.warn(
              `[GitHub] ${response.status} — using cached data for ${cacheKey}`
            );
            return cached.data;
          }
          const wait = this._getRetryDelayMs(response, attempt);
          console.warn(
            `[GitHub] ${response.status} — retry ${attempt}/${MAX_RETRIES} in ${Math.round(wait / 1000)}s`
          );
          await this._sleep(wait);
          continue;
        }

        if (cached) {
          console.warn(
            `[GitHub] HTTP ${response.status} — using cached data for ${cacheKey}`
          );
          return cached.data;
        }

        lastError = new Error(`GitHub API error: ${response.status}`);
        break;
      } catch (err) {
        lastError = err;
        if (cached) {
          console.warn(
            `[GitHub] Network error — using cached data for ${cacheKey}`,
            err
          );
          return cached.data;
        }
        if (attempt < MAX_RETRIES) {
          await this._sleep(1500 * attempt);
        }
      }
    }

    if (cached) {
      return cached.data;
    }

    throw lastError || new Error("GitHub API: request failed");
  }

  _decodeReadmeContent(b64) {
    const clean = b64.replace(/\s/g, "");
    const binary = atob(clean);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder("utf-8").decode(bytes);
  }

  async getShowcaseRepositories() {
    const inflightKey = "showcase-repos";
    if (this.inflight.has(inflightKey)) {
      return this.inflight.get(inflightKey);
    }

    const promise = this._loadShowcaseRepositories().finally(() => {
      this.inflight.delete(inflightKey);
    });
    this.inflight.set(inflightKey, promise);
    return promise;
  }

  async _loadShowcaseRepositories() {
    try {
      const repos = await this.fetchJsonWithCache(
        `${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=100`,
        "user-repos"
      );

      const showcaseRepos = [];

      for (const repo of repos) {
        if (!repo.topics || !repo.topics.includes("showcase")) {
          continue;
        }

        await this._throttleLanguageRequests();

        let languages = {};
        try {
          languages = await this.fetchJsonWithCache(
            `${GITHUB_API_BASE}/repos/${USERNAME}/${repo.name}/languages`,
            `languages-${repo.name}`
          );
        } catch {
          languages = repo.language ? { [repo.language]: 1 } : {};
        }

        showcaseRepos.push({
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          description: repo.description,
          htmlUrl: repo.html_url,
          homepage: repo.homepage,
          topics: repo.topics || [],
          stargazersCount: repo.stargazers_count,
          forksCount: repo.forks_count,
          updatedAt: repo.updated_at,
          createdAt: repo.created_at,
          language: repo.language,
          languages,
          hasIssues: repo.has_issues,
          hasWiki: repo.has_wiki,
          hasPages: repo.has_pages,
          defaultBranch: repo.default_branch,
          size: repo.size,
          archived: repo.archived,
          disabled: repo.disabled,
          private: repo.private,
          fork: repo.fork,
          license: repo.license,
          openIssuesCount: repo.open_issues_count,
          watchersCount: repo.watchers_count,
          networkCount: 0,
          subscribersCount: 0,
        });
      }

      return showcaseRepos.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    } catch (error) {
      console.error("Error getting showcase repositories:", error);
      return [];
    }
  }

  async getRepositoryReadme(repoName, defaultBranch = "main") {
    const cacheKey = `readme-content-${repoName}`;
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.readmeCacheExpiry) {
      return cached.data;
    }

    const branches = [defaultBranch, "main", "master"].filter(
      (b, i, arr) => Boolean(b) && arr.indexOf(b) === i
    );

    const paths = ["README.md", "readme.md", "Readme.md"];

    for (const branch of branches) {
      for (const path of paths) {
        const rawUrl = `https://raw.githubusercontent.com/${USERNAME}/${repoName}/${branch}/${path}`;
        try {
          const res = await fetch(rawUrl);
          if (res.ok) {
            const text = await res.text();
            this.cache.set(cacheKey, {
              data: text,
              timestamp: Date.now(),
            });
            return text;
          }
        } catch {
          /* try next */
        }
      }
    }

    try {
      const readme = await this.fetchJsonWithCache(
        `${GITHUB_API_BASE}/repos/${USERNAME}/${repoName}/readme`,
        `readme-api-${repoName}`
      );
      const text = this._decodeReadmeContent(readme.content);
      this.cache.set(cacheKey, {
        data: text,
        timestamp: Date.now(),
      });
      return text;
    } catch (error) {
      console.error(`Error getting README for ${repoName}:`, error);
      return cached ? cached.data : null;
    }
  }

  getLanguageColor(language) {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      "C++": "#f34b7d",
      "C#": "#178600",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Dart: "#00B4AB",
      Vue: "#2c3e50",
      React: "#61dafb",
      HTML: "#e34c26",
      CSS: "#563d7c",
      SCSS: "#cf649a",
      Sass: "#cf649a",
      Less: "#1d365d",
      JSON: "#292b36",
      Markdown: "#083fa1",
      Shell: "#89e051",
      Dockerfile: "#384d54",
      YAML: "#cb171e",
      XML: "#f0f0f0",
      SQL: "#e48e00",
      R: "#198ce7",
      MATLAB: "#e16737",
      Scala: "#c22d40",
      Perl: "#0298c3",
      Lua: "#000080",
      Haskell: "#5e5086",
      Clojure: "#db5855",
      Elixir: "#6e4a7e",
      Erlang: "#b83998",
      "F#": "#b845fc",
      OCaml: "#3be133",
      Racket: "#3c5caa",
      Scheme: "#1f4a79",
      "Common Lisp": "#3fb68b",
      Assembly: "#6E4C13",
      C: "#555555",
      "Objective-C": "#438eff",
      CoffeeScript: "#244776",
      LiveScript: "#499886",
      PureScript: "#1D222D",
      Elm: "#60B5CC",
      Reason: "#ff5847",
      Nim: "#37775b",
      Crystal: "#776791",
      V: "#4f87c4",
      Zig: "#ec915c",
      Nix: "#7e7eff",
      Terraform: "#7b42bc",
      HCL: "#844fba",
      PowerShell: "#012456",
      Batchfile: "#C1F12E",
      Makefile: "#427819",
      CMake: "#DA3434",
      Groovy: "#e69f56",
      Gradle: "#02303a",
      Maven: "#C71A36",
      Ant: "#A9307E",
    };

    return colors[language] || "#586069";
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return "Hoy";
    }
    if (diffDays === 2) {
      return "Ayer";
    }
    if (diffDays < 7) {
      return `Hace ${diffDays - 1} días`;
    }
    if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Hace ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
    }
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `Hace ${months} ${months === 1 ? "mes" : "meses"}`;
    }
    const years = Math.floor(diffDays / 365);
    return `Hace ${years} ${years === 1 ? "año" : "años"}`;
  }

  formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }
}

export default new GitHubService();
