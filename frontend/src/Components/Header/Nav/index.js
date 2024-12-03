import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">

      {/* Hamburger icon */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Navigation menu */}
      <ul className={`menu ${isOpen ? "open show" : ""}`}>
        <li className="list-inline-item">
          <Link to="/">
            <Button>HOME</Button>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/appointment">
            <Button>Appointment</Button>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/doctors">
            <Button>Doctors</Button>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/services">
            <Button>Services</Button>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
