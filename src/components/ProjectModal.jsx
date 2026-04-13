import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaTimes,
  FaDownload,
  FaCode,
  FaInfoCircle,
  FaLink,
  FaFolder,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import githubService from "../services/githubService";
import { formatRelativeUpdated } from "../utils/formatRelativeDate";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage || i18n.language || "en";
  const [readme, setReadme] = useState(null);
  const [isLoadingReadme, setIsLoadingReadme] = useState(false);

  useEffect(() => {
    if (isOpen && project) {
      loadReadme();
    }
  }, [isOpen, project]);

  const loadReadme = async () => {
    if (!project) return;

    setIsLoadingReadme(true);
    try {
      const readmeContent = await githubService.getRepositoryReadme(
        project.name,
        project.defaultBranch
      );
      setReadme(readmeContent);
    } catch (error) {
      console.error("Error loading README:", error);
      setReadme(null);
    } finally {
      setIsLoadingReadme(false);
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  if (!project) return null;

  const {
    name,
    fullName,
    description,
    htmlUrl,
    homepage,
    stargazersCount,
    forksCount,
    watchersCount,
    language,
    languages,
    topics,
    updatedAt,
    archived,
    fork,
    size,
    openIssuesCount,
    license,
    defaultBranch,
    hasIssues,
    hasWiki,
    hasPages,
  } = project;

  const getTopLanguages = () => {
    if (!languages) return [];
    return Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang, bytes]) => ({
        name: lang,
        bytes,
        percentage: Math.round(
          (bytes / Object.values(languages).reduce((a, b) => a + b, 0)) * 100
        ),
      }));
  };

  const topLanguages = getTopLanguages();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="project-modal custom-scrollbar"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="modal-title">
                <h2>{name}</h2>
                <div className="project-badges">
                  {archived && (
                    <span
                      className="badge archived"
                      title={t("works.modal.badges.archivedTitle")}
                    >
                      <FaShieldAlt />
                      {t("works.modal.badges.archived")}
                    </span>
                  )}
                  {fork && (
                    <span
                      className="badge fork"
                      title={t("works.modal.badges.forkTitle")}
                    >
                      <FaDownload />
                      {t("works.modal.badges.fork")}
                    </span>
                  )}
                  {license && (
                    <span
                      className="badge license"
                      title={t("works.modal.badges.licenseTitle", {
                        name: license.name,
                      })}
                    >
                      <FaInfoCircle />
                      {license.name}
                    </span>
                  )}
                </div>
              </div>
              <button
                className="modal-close"
                onClick={onClose}
                aria-label={t("works.modal.close")}
              >
                <FaTimes />
              </button>
            </div>

            <div
              className="modal-primary-actions"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="modal-primary-actions__title">
                {t("works.project.viewProject")}
              </p>
              <div className="modal-primary-actions__row">
                {homepage ? (
                  <a
                    href={homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta modal-cta--primary"
                  >
                    <FaExternalLinkAlt aria-hidden />
                    <span>{t("works.modal.links.demo")}</span>
                  </a>
                ) : null}
                <a
                  href={htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`modal-cta ${
                    homepage ? "modal-cta--secondary" : "modal-cta--primary"
                  }`}
                >
                  <FaGithub aria-hidden />
                  <span>{t("works.modal.links.github")}</span>
                </a>
                {hasPages ? (
                  <a
                    href={`https://${fullName}.github.io`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta modal-cta--pages"
                  >
                    <FaLink aria-hidden />
                    <span>{t("works.modal.links.pages")}</span>
                  </a>
                ) : null}
              </div>
            </div>

            {/* Content */}
            <div className="modal-content">
              {/* Project Info */}
              <div className="project-info">
                <div className="info-section">
                  <h3>{t("works.modal.description")}</h3>
                  <p>{description || t("works.project.description")}</p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-item">
                    <FaStar />
                    <div>
                      <span className="stat-value">{stargazersCount}</span>
                      <span className="stat-label">
                        {t("works.modal.stats.stars")}
                      </span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaCodeBranch />
                    <div>
                      <span className="stat-value">{forksCount}</span>
                      <span className="stat-label">
                        {t("works.modal.stats.forks")}
                      </span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaEye />
                    <div>
                      <span className="stat-value">{watchersCount}</span>
                      <span className="stat-label">
                        {t("works.modal.stats.watchers")}
                      </span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaCode />
                    <div>
                      <span className="stat-value">{openIssuesCount}</span>
                      <span className="stat-label">
                        {t("works.modal.stats.issues")}
                      </span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaFolder />
                    <div>
                      <span className="stat-value">
                        {githubService.formatFileSize(size * 1024)}
                      </span>
                      <span className="stat-label">
                        {t("works.modal.stats.size")}
                      </span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaClock />
                    <div>
                      <span className="stat-value">
                        {formatRelativeUpdated(updatedAt, locale)}
                      </span>
                      <span className="stat-label">
                        {t("works.modal.stats.updated")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                {topLanguages.length > 0 && (
                  <div className="info-section">
                    <h3>{t("works.modal.languages")}</h3>
                    <div className="languages-detailed">
                      {topLanguages.map((lang) => (
                        <div key={lang.name} className="language-item">
                          <div className="language-info">
                            <span
                              className="language-dot"
                              style={{
                                backgroundColor: githubService.getLanguageColor(
                                  lang.name
                                ),
                              }}
                            />
                            <span className="language-name">{lang.name}</span>
                            <span className="language-percentage">
                              {lang.percentage}%
                            </span>
                          </div>
                          <div className="language-bar-container">
                            <div
                              className="language-bar-fill"
                              style={{
                                width: `${lang.percentage}%`,
                                backgroundColor: githubService.getLanguageColor(
                                  lang.name
                                ),
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Topics */}
                {topics && topics.length > 0 && (
                  <div className="info-section">
                    <h3>{t("works.modal.topics")}</h3>
                    <div className="topics-list">
                      {topics.map((topic) => (
                        <span key={topic} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* README */}
                <div className="info-section">
                  <h3>{t("works.modal.readmeHeading")}</h3>
                  <div className="readme-container">
                    {isLoadingReadme ? (
                      <div className="readme-loading">
                        <div className="loading-spinner" />
                        <span>{t("works.modal.readme.loading")}</span>
                      </div>
                    ) : readme ? (
                      <div className="readme-content">
                        <pre>{readme}</pre>
                      </div>
                    ) : (
                      <div className="readme-empty">
                        <FaInfoCircle />
                        <span>{t("works.modal.readme.empty")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
