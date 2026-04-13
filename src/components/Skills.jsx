import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import githubService from "../services/githubService";

function Skills() {
  const { t } = useTranslation();
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLanguages();
  }, []);

  const loadLanguages = async () => {
    try {
      setLoading(true);
      const showcaseRepos = await githubService.getShowcaseRepositories();

      // Obtener todos los lenguajes únicos de los repositorios
      const allLanguages = new Map();

      showcaseRepos.forEach((repo) => {
        if (repo.languages) {
          Object.entries(repo.languages).forEach(([lang, bytes]) => {
            if (allLanguages.has(lang)) {
              allLanguages.set(lang, allLanguages.get(lang) + bytes);
            } else {
              allLanguages.set(lang, bytes);
            }
          });
        }
      });

      // Convertir a array y ordenar por cantidad de bytes (más usado primero)
      const sortedLanguages = Array.from(allLanguages.entries())
        .sort(([, a], [, b]) => b - a)
        .map(([name, bytes]) => ({
          name,
          bytes,
          color: githubService.getLanguageColor(name),
        }));

      setLanguages(sortedLanguages);
    } catch (error) {
      console.error("Error loading languages:", error);

      // En caso de error, mostrar lenguajes por defecto
      const defaultLanguages = [
        { name: "JavaScript", bytes: 1000, color: "#f1e05a" },
        { name: "React", bytes: 800, color: "#61dafb" },
        { name: "HTML", bytes: 600, color: "#e34c26" },
        { name: "CSS", bytes: 500, color: "#563d7c" },
        { name: "TypeScript", bytes: 400, color: "#2b7489" },
        { name: "Node.js", bytes: 300, color: "#339933" },
        { name: "Git", bytes: 200, color: "#f05032" },
        { name: "Vite", bytes: 150, color: "#646cff" },
        { name: "Styled Components", bytes: 100, color: "#db7093" },
      ];
      setLanguages(defaultLanguages);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="skills-component"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
    >
      <div className="skills-content">
        <motion.div className="skills-header" variants={itemVariants}>
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </motion.div>

        <motion.div className="skills-grid" variants={itemVariants}>
          {loading ? (
            <div className="skills-loading">
              <div className="loading-spinner" />
              <span>{t("skills.loading")}</span>
            </div>
          ) : languages.length > 0 ? (
            languages.map((language, index) => (
              <motion.div
                key={`${language.name}-${index}`}
                className="skill-tag"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderColor: language.color,
                  color: language.color,
                }}
              >
                <span
                  className="language-dot"
                  style={{ backgroundColor: language.color }}
                />
                <span className="language-name">{language.name}</span>
              </motion.div>
            ))
          ) : (
            <div className="skills-empty">
              <FaCode />
              <span>{t("skills.empty")}</span>
              <button
                onClick={loadLanguages}
                style={{
                  marginTop: "16px",
                  padding: "8px 16px",
                  background:
                    "linear-gradient(135deg, #00eaff 0%, #0099cc 100%)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#000",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(0, 234, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {t("skills.retry")}
              </button>
            </div>
          )}
        </motion.div>

        <motion.div className="skills-categories" variants={itemVariants}>
          <div className="category">
            <div className="category-icon">
              <FaCode />
            </div>
            <h3>{t("skills.categories.development.title")}</h3>
            <p>{t("skills.categories.development.description")}</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <FaLaptopCode />
            </div>
            <h3>{t("skills.categories.automated.title")}</h3>
            <p>{t("skills.categories.automated.description")}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
