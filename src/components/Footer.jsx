// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/404">
        <button>Download Resume</button>
      </Link>
      <p>&copy; Kason Bennefield. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
