// src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="intro-text">
        I'm a full-stack developer with a strong foundation in both front-end and back-end technologies. 
        I recently completed my Computer Science degree and have built a variety of full-stack applications during school and independently like Unity game projects, Cyber Security, and Databases. 
        I enjoy building real-world tools that solve real problems using modern frameworks like React, Node.js, and PostgreSQL.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <span className="date">2025</span>
          <p>Completed B.S. in Computer Science with a focus on software engineering and web development</p>
        </div>
        <div className="timeline-item">
          <span className="date">2024</span>
          <p>Built my first full-stack web app using React, Express, and SQLite</p>
        </div>
        <div className="timeline-item">
          <span className="date">2023</span>
          <p>Interned at a local startup as a full-stack developer — worked on internal dashboards and REST APIs</p>
        </div>
        <div className="timeline-item">
          <span className="date">2024</span>
          <p>Started contributing to open source projects and learning Git, GitHub, and deployment pipelines</p>
        </div>
      </div>
    </section>
  );
};

export default About;
