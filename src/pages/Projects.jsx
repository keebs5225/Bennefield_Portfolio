// Projects.jsx

import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <ProjectCard
          title="Project 1"
          description="Short description of Project 1"
          onClick={() => openModal("Project 1")}
        />
        <ProjectCard
          title="Project 2"
          description="Short description of Project 2"
          onClick={() => openModal("Project 2")}
        />
        {/* Add more projects as needed */}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedProject}</h3>
            <p>Detailed case study content for {selectedProject}...</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
