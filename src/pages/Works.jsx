import React from "react";
import { Container } from "./Works.styles";
import { motion } from "framer-motion";

function Works() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h1>Works</h1>
        <h1>🐂🚜 Under Construction 👦🔧🚜</h1>
        <p>a grid of my projects goes here</p>
      </Container>
    </motion.div>
  );
}

export default Works;
