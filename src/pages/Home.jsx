import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import About from "../components/About";
import Skills from "../components/Skills";
import devBack from "../assets/devBack.png";
import blob from "../assets/Blob.png";

const EMAIL = "adrian.mirabal07@gmail.com";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      setCopied(false);
    }
  };

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

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Adrian Mirabal | Desarrollador Web</title>
        <meta
          name="description"
          content="Portafolio de Adrian Mirabal, desarrollador web apasionado por crear experiencias digitales modernas y funcionales."
        />
      </Helmet>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="home-container"
      >
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <motion.div className="hero-left" variants={heroVariants}>
              <div className="hero-text">
                <h1 className="hero-title">
                  {t("hero.greeting")} <br />
                  {t("hero.name")}
                </h1>
                <p className="hero-subtitle">{t("hero.subtitle")}</p>
                <div className="hero-actions">
                  <motion.button
                    className="cta-button primary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/works")}
                  >
                    {t("hero.cta.projects")}
                  </motion.button>
                  <motion.button
                    className="cta-button secondary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    {t("hero.cta.contact")}
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <motion.a
                  href="https://github.com/WearyMench"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/adrianm07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="hero-right" variants={imageVariants}>
              <div className="hero-image-container">
                <img
                  src={blob}
                  alt="Decoración animada"
                  className="blob-decoration"
                  loading="lazy"
                />
                <img
                  src={devBack}
                  alt="Ilustración desarrollador web"
                  className="hero-image"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="about-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="skills-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Skills />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="contact-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-50px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-content">
            <div className="contact-header">
              <h2 className="section-title">{t("contact.title")}</h2>
              <p className="section-subtitle">{t("contact.subtitle")}</p>
            </div>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-info">
                  <h3>{t("contact.email.title")}</h3>
                  <p>{t("contact.email.address")}</p>
                  <motion.button
                    className="copy-button"
                    onClick={handleCopy}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={t("contact.email.copy")}
                  >
                    {copied ? <FaCheck /> : <FaCopy />}
                    {copied
                      ? t("contact.email.copied")
                      : t("contact.email.copy")}
                  </motion.button>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-info">
                  <h3>{t("contact.linkedin.title")}</h3>
                  <p>{t("contact.linkedin.description")}</p>
                  <motion.a
                    href="https://linkedin.com/in/adrianm07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("contact.linkedin.action")}
                  </motion.a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-info">
                  <h3>{t("contact.github.title")}</h3>
                  <p>{t("contact.github.description")}</p>
                  <motion.a
                    href="https://github.com/WearyMench"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("contact.github.action")}
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}

export default Home;
