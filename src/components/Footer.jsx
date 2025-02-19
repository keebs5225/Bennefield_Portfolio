import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
        <a href="/path-to-resume.pdf" download>
            <button>Download Resume</button>
        </a>
        <p>&copy; Kason Bennefield. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
