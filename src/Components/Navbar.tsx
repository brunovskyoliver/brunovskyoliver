import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Switch from "./Switch";
import 'animate.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className="a">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="a">
            About
          </Link>
        </li>
        <Switch />
      </ul>
    </div>
  );
};

export default Navbar;
