// src/pages/Skills.jsx

import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      
      {/* Timeline
      <div className="timeline">
        <div className="timeline-item">
          <span className="date">2025</span>
          <p>Completed B.S. in Computer Science at Oklahoma City University with a focus on software engineering and web development</p>
        </div>
        <div className="timeline-item">
          <span className="date">2024</span>
          <p>Built full-stack applications using React, Express, and SQLite as part of academic and personal projects</p>
        </div>
        <div className="timeline-item">
          <span className="date">2023</span>
          <p>Explored databases, cybersecurity, and Unity game development through coursework and side projects</p>
        </div>
        <div className="timeline-item">
          <span className="date">2022</span>
          <p>Began contributing to open source, learning Git, GitHub, and deployment tools</p>
        </div>
      </div> */}

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills & Technologies</h3>

        <div className="skills-category">
          <h4>✅ Frontend Development</h4>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Web Design</li>
            <li>CSS3 (Flexbox, Grid)</li>
            <li>HTML5</li>
            <li>Bootstrap</li>
            <li>Framer Motion (Animations)</li>
            <li>DOM Manipulation</li>
            <li>UI/UX Design</li>
            <li>Web Accessibility (a11y)</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>✅ Backend & Full-Stack Development</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Flask (Python)</li>
            <li>RESTful API Design</li>
            <li>SQLite & SQLAlchemy</li>
            <li>Prisma ORM</li>
            <li>MVC Architecture</li>
            <li>Authentication (Passport.js, Session Handling)</li>
            <li>CRUD Operations</li>
            <li>Environment Configuration (.env)</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>✅ Dev Tools & Deployment</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>GitHub Pages</li>
            <li>Git CLI Workflow</li>
            <li>Cloudinary Integration</li>
            <li>Version Control</li>
            <li>Git Branching & Merging</li>
            <li>Debugging & Testing (basic)</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>✅ Other Notable Skills</h4>
          <ul>
            <li>Dark Mode Implementation</li>
            <li>Client-Side Routing (React Router)</li>
            <li>Jinja Templating (Flask)</li>
            <li>App Deployment</li>
            <li>Agile Prototyping</li>
            <li>Icon Libraries (Font Awesome)</li>
            <li>Typography & Layout Styling</li>
            <li>Project Architecture Planning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
