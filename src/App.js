import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => setDarkMode(!darkMode);
  
    return (
      <div className={`app-container ${darkMode ? "dark" : ""}`}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
};
  
export default App;
