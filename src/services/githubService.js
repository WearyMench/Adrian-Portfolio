const GITHUB_API_BASE = "https://api.github.com";
const USERNAME = "WearyMench";

class GitHubService {
  constructor() {
    this.cache = new Map();
    this.cacheExpiry = 5 * 60 * 1000; // 5 minutos
  }

  async fetchWithCache(url, cacheKey) {
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.data;
    }

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Adrian-Portfolio",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
      });

      return data;
    } catch (error) {
      console.error("Error fetching from GitHub API:", error);
      throw error;
    }
  }

  async getShowcaseRepositories() {
    try {
      // Obtener todos los repos públicos del usuario
      const repos = await this.fetchWithCache(
        `${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=100`,
        "user-repos"
      );

      // Filtrar repos con topic "showcase"
      const showcaseRepos = [];

      for (const repo of repos) {
        if (repo.topics && repo.topics.includes("showcase")) {
          // Obtener información adicional del repo
          const repoDetails = await this.fetchWithCache(
            `${GITHUB_API_BASE}/repos/${USERNAME}/${repo.name}`,
            `repo-${repo.name}`
          );

          // Obtener lenguajes del repo
          const languages = await this.fetchWithCache(
            `${GITHUB_API_BASE}/repos/${USERNAME}/${repo.name}/languages`,
            `languages-${repo.name}`
          );

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
            languages: languages,
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
            networkCount: repoDetails.network_count,
            subscribersCount: repoDetails.subscribers_count,
          });
        }
      }

      // Ordenar por fecha de actualización (más recientes primero)
      return showcaseRepos.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    } catch (error) {
      console.error("Error getting showcase repositories:", error);
      return [];
    }
  }

  async getRepositoryReadme(repoName) {
    try {
      const readme = await this.fetchWithCache(
        `${GITHUB_API_BASE}/repos/${USERNAME}/${repoName}/readme`,
        `readme-${repoName}`
      );

      // Decodificar el contenido del README (está en base64)
      return atob(readme.content);
    } catch (error) {
      console.error(`Error getting README for ${repoName}:`, error);
      return null;
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
      Gradle: "#02303a",
      Maven: "#C71A36",
      Ant: "#A9307E",
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
    } else if (diffDays === 2) {
      return "Ayer";
    } else if (diffDays < 7) {
      return `Hace ${diffDays - 1} días`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Hace ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `Hace ${months} ${months === 1 ? "mes" : "meses"}`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `Hace ${years} ${years === 1 ? "año" : "años"}`;
    }
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
