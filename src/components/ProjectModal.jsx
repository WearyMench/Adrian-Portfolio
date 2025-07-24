import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaEye,
  FaCalendarAlt,
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

const ProjectModal = ({ project, isOpen, onClose }) => {
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
        project.name
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
    createdAt,
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
            className="project-modal"
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
                    <span className="badge archived" title="Proyecto archivado">
                      <FaShieldAlt />
                      Archivado
                    </span>
                  )}
                  {fork && (
                    <span
                      className="badge fork"
                      title="Fork de otro repositorio"
                    >
                      <FaDownload />
                      Fork
                    </span>
                  )}
                  {license && (
                    <span
                      className="badge license"
                      title={`Licencia: ${license.name}`}
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
                aria-label="Cerrar modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Content */}
            <div className="modal-content">
              {/* Project Info */}
              <div className="project-info">
                <div className="info-section">
                  <h3>Descripción</h3>
                  <p>{description || "Sin descripción disponible"}</p>
                </div>

                {/* Stats Grid */}
                <div className="stats-grid">
                  <div className="stat-item">
                    <FaStar />
                    <div>
                      <span className="stat-value">{stargazersCount}</span>
                      <span className="stat-label">Estrellas</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaCodeBranch />
                    <div>
                      <span className="stat-value">{forksCount}</span>
                      <span className="stat-label">Forks</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaEye />
                    <div>
                      <span className="stat-value">{watchersCount}</span>
                      <span className="stat-label">Watchers</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaCode />
                    <div>
                      <span className="stat-value">{openIssuesCount}</span>
                      <span className="stat-label">Issues</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaFolder />
                    <div>
                      <span className="stat-value">
                        {githubService.formatFileSize(size * 1024)}
                      </span>
                      <span className="stat-label">Tamaño</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaClock />
                    <div>
                      <span className="stat-value">
                        {githubService.formatDate(updatedAt)}
                      </span>
                      <span className="stat-label">Actualizado</span>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                {topLanguages.length > 0 && (
                  <div className="info-section">
                    <h3>Lenguajes de programación</h3>
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
                    <h3>Topics</h3>
                    <div className="topics-list">
                      {topics.map((topic) => (
                        <span key={topic} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="info-section">
                  <h3>Enlaces</h3>
                  <div className="project-links-detailed">
                    <a
                      href={htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button github"
                    >
                      <FaGithub />
                      <span>Ver en GitHub</span>
                    </a>
                    {homepage && (
                      <a
                        href={homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button demo"
                      >
                        <FaExternalLinkAlt />
                        <span>Ver Demo</span>
                      </a>
                    )}
                    {hasPages && (
                      <a
                        href={`https://${fullName}.github.io`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button pages"
                      >
                        <FaLink />
                        <span>GitHub Pages</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* README */}
                <div className="info-section">
                  <h3>README</h3>
                  <div className="readme-container">
                    {isLoadingReadme ? (
                      <div className="readme-loading">
                        <div className="loading-spinner" />
                        <span>Cargando README...</span>
                      </div>
                    ) : readme ? (
                      <div className="readme-content">
                        <pre>{readme}</pre>
                      </div>
                    ) : (
                      <div className="readme-empty">
                        <FaInfoCircle />
                        <span>No hay README disponible para este proyecto</span>
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
