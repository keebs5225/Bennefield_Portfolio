// About.jsx

import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="timeline">
        <div className="timeline-item">
          <span className="date">2025</span>
          <p>Graduated with a degree in Computer Science</p>
        </div>
        <div className="timeline-item">
          <span className="date">2024</span>
          <p>Started working as a Junior Developer</p>
        </div>
        {/* Add more items here as you go */}
      </div>
    </section>
  );
};

export default About;
