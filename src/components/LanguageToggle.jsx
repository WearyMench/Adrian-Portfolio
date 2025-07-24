import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === "en";

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isEnglish ? "Cambiar a Español" : "Switch to English"}
    >
      <span className="flag-icon">{isEnglish ? "🇪🇸" : "🇺🇸"}</span>
      <span className="language-text">{isEnglish ? "ES" : "EN"}</span>
    </motion.button>
  );
};

export default LanguageToggle;
