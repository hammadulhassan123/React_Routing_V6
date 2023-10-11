import React from "react";
import { NavLink,Link } from "react-router-dom";
import "../components/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Logo</div>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
            <div className="navbar-item">
               {/* I had replaced "Link" by "NavLink" for showing the active option, selected in the Navbar */}
               <NavLink className="navbar-item-link" to="/">Home</NavLink>
            </div>
            <div className="navbar-item">
                <NavLink className="navbar-item-link" to="/about">About Us</NavLink>
            </div>
            <div className="navbar-item">
                <NavLink className="navbar-item-link" to="/contactus">Contact Us</NavLink>
            </div>
            <div className="navbar-item">
                <NavLink className="navbar-item-link" to="/Filter">Filter</NavLink>
            </div>
        </div>
        <div className="navbar-toggle" onClick={handleToggle}>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </div>
      </nav>
    </>
  );
}
