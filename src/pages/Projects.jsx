// Projects.jsx

import React from "react";
import ProjectCard from "../components/ProjectCard";

const dummyProjects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    details: "More detailed info about Project 1.",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    details: "More detailed info about Project 2.",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    details: "More detailed info about Project 3.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {dummyProjects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
