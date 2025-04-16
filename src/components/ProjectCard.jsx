// ProjectCard.jsx

import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="project-item" onClick={() => setShowModal(true)}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
