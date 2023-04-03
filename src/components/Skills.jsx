import React, { useState, useEffect, useRef } from "react";

import { Container } from "./Skills.styles";

import { skillsData } from "../data/skills";

function Skills() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calcula la nueva posición de scroll
      const newScrollPosition1 =
        carouselRef1.current.scrollLeft + carouselRef1.current.offsetWidth;
      const newScrollPosition2 =
        carouselRef2.current.scrollLeft + carouselRef2.current.offsetWidth;

      // Realiza la animación de scroll
      if (newScrollPosition1 < carouselRef1.current.scrollWidth) {
        carouselRef1.current.scrollTo({
          left: newScrollPosition1,
          behavior: "smooth",
        });
      } else {
        carouselRef1.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      if (newScrollPosition2 < carouselRef2.current.scrollWidth) {
        carouselRef2.current.scrollTo({
          left: newScrollPosition2,
          behavior: "smooth",
        });
      } else {
        carouselRef2.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <h1 id="skills">My skills:</h1>

      <div>
        <div className="carousel" ref={carouselRef1}>
          {skillsData.slice(0, 10).map((skill, index) => (
            <div key={index} className={`carousel-slide`}>
              <img src={skill.imagen} alt={skill.title} />
              <h4>{skill.title}</h4>
            </div>
          ))}
        </div>

        <div className="carousel" ref={carouselRef2}>
          {skillsData.slice(10, 20).map((skill, index) => (
            <div key={index} className={`carousel-slide`}>
              <img src={skill.imagen} alt={skill.title} />
              <h4>{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Skills;
