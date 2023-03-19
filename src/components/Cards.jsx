import React from "react";
import { Skills } from "../data/skills";

import { Imagen, Grid, Card } from "./Cards.styles";

function Cards() {
  return (
    <Grid>
      {Skills.map((skill) => (
        <Card key={skill.id}>
          <Imagen src={skill.imagen} alt="logo" />
          <h4>{skill.title}</h4>
        </Card>
      ))}
    </Grid>
  );
}

export default Cards;
