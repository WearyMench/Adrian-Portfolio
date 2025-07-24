import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import githubService from "../services/githubService";

function Skills() {
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
      setLanguages([]);
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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="skills-content">
        <motion.div className="skills-header" variants={itemVariants}>
          <h2 className="section-title">Habilidades & Tecnologías</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que utilizo en mis proyectos,
            actualizadas automáticamente desde GitHub
          </p>
        </motion.div>

        <motion.div className="skills-grid" variants={itemVariants}>
          {loading ? (
            <div className="skills-loading">
              <div className="loading-spinner" />
              <span>Cargando tecnologías desde GitHub...</span>
            </div>
          ) : languages.length > 0 ? (
            languages.map((language, index) => (
              <motion.div
                key={language.name}
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
              <span>No se encontraron tecnologías en los proyectos</span>
            </div>
          )}
        </motion.div>

        <motion.div className="skills-categories" variants={itemVariants}>
          <div className="category">
            <div className="category-icon">
              <FaCode />
            </div>
            <h3>Desarrollo</h3>
            <p>Lenguajes y tecnologías utilizados en proyectos reales</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <FaLaptopCode />
            </div>
            <h3>Automatizado</h3>
            <p>Datos actualizados automáticamente desde GitHub</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
