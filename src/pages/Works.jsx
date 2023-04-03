import React, { useState } from "react";
import { Container, CardDiv } from "./Works.styles";

import { motion } from "framer-motion";

import { Projects, Tags } from "../data/projects";

function Works() {
  const [isSelected, setIsSelected] = useState(null);
  const [sortProjects, setsortProjects] = useState(Projects);
  const Sort = (tag) => {
    setIsSelected(tag);
    setsortProjects(Projects.filter((project) => project.tags.includes(tag)));
    if (tag === "all") setsortProjects(Projects);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="title">
          <h1>Works</h1>
          <p>
            Below are some of my projects. <span>Filter</span> by the following
            tags:
          </p>
          <div className="tag-container">
            {Tags.map((tag) => (
              <motion.button
                key={tag}
                className={`button-tag ${tag === isSelected ? "selected" : ""}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => Sort(tag)}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
        <hr />
        <div className="cards-container">
          {sortProjects.map((project, index) => (
            <CardDiv key={index}>
              <iframe src={project.urlPage} loading="eager"></iframe>
              <div className="card-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tag-container">
                  {project.tags.map((tag) => (
                    <div key={tag} className="tag">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="logo-container">
                  <a href={project.urlCode} target="_blank">
                    <img
                      className="logo"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="Logo Github"
                    />
                  </a>
                  <a href={project.urlPage} target="_blank">
                    <img
                      className="logo"
                      src="https://cdn-icons-png.flaticon.com/512/25/25284.png"
                      alt="Icono link externo"
                    />
                  </a>
                </div>
              </div>
            </CardDiv>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}

export default Works;
