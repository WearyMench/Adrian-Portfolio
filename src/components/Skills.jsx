import React from "react";
import Cards from "./Cards";
import { Container } from "./Skills.styles";

function Skills() {
  return (
    <Container>
      <h1 id="skills">My skills:</h1>
      {/* Hacer un juego con las cartas que cuando hagan click se rompa la carta como si fuera vidrio o una botella y las demas ocupan su espacio
      de forma horizontal, y luego vuelve a salir la que se rompio al final de la fila y asi sucesivamente mientras vayan rompiendo las cartas de vidrio */}
      <Cards />
    </Container>
  );
}

export default Skills;
