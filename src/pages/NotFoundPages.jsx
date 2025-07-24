import React from "react";
import { Wrapper } from "./NotFound.styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function NotFoundPages() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>{t("notFound.title")}</title>
        <meta name="description" content={t("notFound.description")} />
      </Helmet>
      <Wrapper
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: 48, marginBottom: 18 }}>🤖 404</h1>
        <p style={{ color: "#eaf6fb", marginBottom: 24, fontSize: 20 }}>
          {t("notFound.message")}
          <br />
          {t("notFound.question")}
        </p>
        <button
          style={{
            background: "linear-gradient(90deg, #00eaff 0%, #00b2df 100%)",
            color: "#10131a",
            fontWeight: 700,
            fontSize: 18,
            border: "none",
            borderRadius: 18,
            padding: "10px 32px",
            boxShadow: "0 2px 8px #00eaff33",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
          }}
          onClick={() => navigate("/")}
        >
          {t("notFound.button")}
        </button>
      </Wrapper>
    </>
  );
}

export default NotFoundPages;
