import React from "react";
import {
  Title,
  Span,
  HomeWrapper,
  Image,
  Blob,
  AboutWrapper,
} from "./Home.styles";

import Socials from "../components/SocialsHome";
import About from "../components/About";
import Skills from "../components/Skills";

import devBack from "../assets/devBack.png";
import blob from "../assets/Blob.png";

import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HomeWrapper>
        <div>
          <Title>
            Hi! <br />
            My name is
            <Span>Adrian Mirabal</Span>
          </Title>
          <p>I'm a Web Developer</p>
        </div>
        <div>
          <Blob src={blob} alt="Blob" />
          <Image src={devBack} alt="Imagen Principal" />
        </div>
      </HomeWrapper>
      <Socials />
      <AboutWrapper>
        <About />
      </AboutWrapper>
      <Skills />
    </motion.div>
  );
}

export default Home;
