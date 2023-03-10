import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/user">Login/Register</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
