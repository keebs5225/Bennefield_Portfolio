// ProjectCard.jsx

import React from "react";

const ProjectCard = ({ title, description, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
