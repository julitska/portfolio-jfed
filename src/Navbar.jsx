import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link
        to={location.pathname === "/" ? "/contact" : "/"}
        className="logo">
        Julia Petrova
      </Link>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Contact
          </NavLink>
        </li>
      </ul>

      <div
        className="burger"
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
