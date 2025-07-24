import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { skillsData } from "../data/skills";

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        <motion.div
          className="skills-header"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="section-title">Habilidades & Tecnologías</h2>
          <p className="section-subtitle">
            Tecnologías y herramientas que utilizo para crear experiencias
            digitales increíbles
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-card"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon">
                <img
                  src={skill.imagen}
                  alt={`Logo de ${skill.title}`}
                  loading="lazy"
                />
              </div>
              <div className="skill-info">
                <h3>{skill.title}</h3>
                <div className="skill-level">
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-categories"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="category">
            <div className="category-icon">
              <FaCode />
            </div>
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS, Styled Components</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <FaLaptopCode />
            </div>
            <h3>Herramientas</h3>
            <p>Git, VS Code, Figma, Vite, Webpack</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
