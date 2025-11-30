import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">HirePro</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/reviews">Rating & Reviews</Link>
        <Link to="/hire">Hire</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
