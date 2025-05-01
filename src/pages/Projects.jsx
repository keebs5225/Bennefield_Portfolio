// Projects.jsx

import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Show Watcher",
    description: "A Python web app to track and manage TV shows.",
    details: "Built with Flask and HTML/CSS, Show Watcher lets users track their favorite shows.",
    repo: {
      user: "keebs5225",
      name: "Show_Watcher",
    },
  },
  {
    title: "Admin Dashboard",
    description: "A responsive admin dashboard built with HTML and CSS.",
    details: "Created as part of The Odin Project, featuring a clean UI and responsive design.",
    repo: {
      user: "keebs5225",
      name: "Admin_Dashboard",
    },
  },
  {
    title: "FileUploader",
    description: "A stripped-down version of Google Drive with authentication and cloud storage.",
    details: "Users can upload files, organize them into folders, and store them on cloud platforms.",
    repo: {
      user: "keebs5225",
      name: "FileUploader",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
