import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Eugene from "../assets/Eugene.png";

function About() {
  const { t } = useTranslation();

  const timelineData = [
    {
      year: t("about.timeline.webDev.period"),
      title: t("about.timeline.webDev.title"),
      desc: t("about.timeline.webDev.description"),
      icon: <FaCode />,
    },
    {
      year: t("about.timeline.analyst.period"),
      title: t("about.timeline.analyst.title"),
      desc: t("about.timeline.analyst.description"),
      icon: <FaUser />,
    },
  ];
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
        duration: 0.4,
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
        <motion.div className="about-header" variants={itemVariants}>
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle">{t("about.subtitle")}</p>
        </motion.div>

        <motion.div className="about-main" variants={itemVariants}>
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
              <h3>{t("about.greeting")}</h3>
              <p>{t("about.description.p1")}</p>
              <p>{t("about.description.p2")}</p>
              <p>{t("about.description.p3")}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="about-timeline" variants={itemVariants}>
          <h3>{t("about.timeline.title")}</h3>
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
