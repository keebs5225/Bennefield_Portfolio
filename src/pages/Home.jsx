// Home.jsx

import React from "react";

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>Hi, I'm Kason Bennefield.</h1>
      <p>Welcome to my developer portfolio</p>

      {/* Intro Paragraphs */}
      <p className="intro-text">
        I'm a Computer Science student from Oklahoma City University with a passion for building responsive and interactive web applications.
        My strengths lie in full stack development, especially using modern JavaScript frameworks like React and backend technologies such as Flask, Express, and Node.js.
        I'm highly motivated to join a development team where I can contribute, grow, and solve real-world problems through code.
      </p>
      <p className="intro-text">
        From ages 7 to 22, I played competitive baseball, which taught me how to thrive under pressure, stay focused in fast-paced environments,
        and collaborate effectively as part of a team. I bring that same mindset to software development—solving problems creatively while ensuring smooth and functional user experiences.
      </p>
      <p className="intro-text">
        I'm currently seeking opportunities in software engineering or web development where I can contribute, learn, and grow as a developer.
      </p>
    </section>
  );
};

export default Home;
