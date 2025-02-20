import React from "react";
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">KB</div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/*TODO| moon pic for dark ;sun for light*/}
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
