// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo.png";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="KB Logo" className="logo-img" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
    </nav>
  );
};

export default Navbar;
