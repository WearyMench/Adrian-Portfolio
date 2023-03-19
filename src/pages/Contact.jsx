import React from "react";
import { Container, RowDIv, Logos } from "./Contact.styles";
import ContactLogos from "../components/ContactLogos";
import { motion } from "framer-motion";

function Contact() {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h1>Contact Me:</h1>
        <RowDIv>
          <h2>
            If you want to contact me, the best way is by email:{" "}
            <a href="mailto:adrian.mirabal07@gmail.com">
              adrian.mirabal07@gmail.com
            </a>
          </h2>
          <motion.div
            className="MailContainer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="item"
            >
              <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
          </motion.div>
        </RowDIv>
        <ContactLogos />
      </Container>
    </motion.div>
  );
}

export default Contact;
