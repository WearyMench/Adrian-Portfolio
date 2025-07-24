import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaEye, FaCalendarAlt } from "react-icons/fa";
import githubService from "../services/githubService";

const ProjectCard = ({ project, index, onOpenModal }) => {
  const {
    name,
    description,
    stargazersCount,
    forksCount,
    watchersCount,
    language,
    languages,
    topics,
    updatedAt,
    archived,
    fork,
  } = project;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const getTopLanguages = () => {
    if (!languages) return [];
    const sorted = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
    return sorted.map(([lang, bytes]) => ({
      name: lang,
      percentage: Math.round(
        (bytes / Object.values(languages).reduce((a, b) => a + b, 0)) * 100
      ),
    }));
  };

  const topLanguages = getTopLanguages();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="project-card"
      onClick={() => onOpenModal(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
    >
      {/* Header */}
      <div className="project-header">
        <div className="project-title">
          <h3>{name}</h3>
          {archived && (
            <span className="archived-badge" title="Proyecto archivado">
              ARCHIVED
            </span>
          )}
          {fork && (
            <span className="fork-badge" title="Fork de otro repositorio">
              FORK
            </span>
          )}
        </div>

        <div className="project-stats">
          <div className="stat" title={`${stargazersCount} estrellas`}>
            <FaStar />
            <span>{stargazersCount}</span>
          </div>
          <div className="stat" title={`${forksCount} forks`}>
            <FaCodeBranch />
            <span>{forksCount}</span>
          </div>
          <div className="stat" title={`${watchersCount} watchers`}>
            <FaEye />
            <span>{watchersCount}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="project-description">
        {description || "Sin descripción disponible"}
      </p>

      {/* Languages */}
      {topLanguages.length > 0 && (
        <div className="project-languages">
          <div className="language-bars">
            {topLanguages.map((lang, idx) => (
              <div
                key={lang.name}
                className="language-bar"
                style={{
                  width: `${lang.percentage}%`,
                  backgroundColor: githubService.getLanguageColor(lang.name),
                }}
                title={`${lang.name}: ${lang.percentage}%`}
              />
            ))}
          </div>
          <div className="language-labels">
            {topLanguages.map((lang) => (
              <span
                key={lang.name}
                className="language-label"
                style={{ color: githubService.getLanguageColor(lang.name) }}
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Topics */}
      {topics && topics.length > 0 && (
        <div className="project-topics">
          {topics.slice(0, 3).map((topic) => (
            <span key={topic} className="topic-tag">
              {topic}
            </span>
          ))}
          {topics.length > 3 && (
            <span className="topic-more">+{topics.length - 3}</span>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="project-footer">
        <div className="project-updated">
          <FaCalendarAlt />
          <span title={new Date(updatedAt).toLocaleDateString()}>
            {githubService.formatDate(updatedAt)}
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="project-overlay">
        <span>Ver proyecto</span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
