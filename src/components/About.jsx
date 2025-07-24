import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaUser } from "react-icons/fa";
import Eugene from "../assets/Eugene.png";

const timelineData = [
  {
    year: "2022-2025",
    title: "Desarrollador Web",
    desc: "Proyectos personales y colaboraciones en GitHub",
    icon: <FaCode />,
  },
  {
    year: "2023-2025",
    title: "Analista de sistemas",
    desc: "Analista de mantenimiento de software",
    icon: <FaUser />,
  },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
      className="about-component"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="about-content">
        <motion.div
          className="about-header"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Conoce mi historia, experiencia y pasión por el desarrollo web
          </p>
        </motion.div>

        <motion.div
          className="about-main"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="about-photo">
            <motion.img
              src={Eugene}
              alt="Adrian Mirabal"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="photo-overlay" />
          </div>

          <div className="about-text">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>¡Hola! Soy Adrian Mirabal</h3>
              <p>
                Apasionado por la tecnología y la programación. Me encanta crear
                aplicaciones web modernas y funcionales que impacten
                positivamente en la vida de las personas.
              </p>
              <p>
                Mi enfoque se centra en el desarrollo frontend con React, pero
                también disfruto explorando el backend y las nuevas tecnologías
                emergentes. Siempre busco aprender y mantenerme actualizado con
                las mejores prácticas.
              </p>
              <p>
                Además de programar, disfruto el anime, la ciencia ficción y los
                videojuegos. Creo que estas pasiones me ayudan a mantener una
                mente creativa y abierta a nuevas ideas.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="about-timeline"
          variants={itemVariants}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3>Mi Trayectoria</h3>
          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
