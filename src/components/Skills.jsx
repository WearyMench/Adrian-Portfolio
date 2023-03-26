import React, { useState, useEffect } from "react";

import { Container } from "./Skills.styles";

import { skillsData } from "../data/skills";

import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 6;

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentSlide((prevIndex) => {
        const lastIndex = skillsData.length - slidesToShow;
        const nextIndex =
          prevIndex + slidesToShow > lastIndex ? 0 : prevIndex + slidesToShow;
        return nextIndex;
      });
    }, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, [skillsData]);

  const slidesToDisplay = skillsData.slice(
    currentSlide,
    currentSlide + slidesToShow
  );

  return (
    <Container>
      <h1 id="skills">My skills:</h1>
      {/* Hacer un juego con las cartas que cuando hagan click se rompa la carta como si fuera vidrio o una botella y las demas ocupan su espacio
      de forma horizontal, y luego vuelve a salir la que se rompio al final de la fila y asi sucesivamente mientras vayan rompiendo las cartas de vidrio */}
      {/* <Cards /> */}
      <div className="carousel">
        {slidesToDisplay.map((slide) => (
          <motion.div
            key={slide.id}
            className={`carousel-slide`}
            style={{ width: `${100 / slidesToShow}%` }}
            initial={{ opacity: 0, translateX: -1000 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={slide.imagen} alt={slide.title} />
            <h4>{slide.title}</h4>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
