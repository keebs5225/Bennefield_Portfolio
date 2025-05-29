// src/components/ProjectCard.jsx

import React, { useState } from "react";
import GitHubActionBar from "./GitHubActionBar";

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

            {/* ✅ GitHub Buttons */}
            {project.repo && (
              <GitHubActionBar
                user={project.repo.user}
                repo={project.repo.name}
              />
            )}

            {/* ✅ Website Button */}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-button"
              >
                Visit Site
              </a>
            )}

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
