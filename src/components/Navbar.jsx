import React from "react";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Name</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
