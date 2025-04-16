// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">KB</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
