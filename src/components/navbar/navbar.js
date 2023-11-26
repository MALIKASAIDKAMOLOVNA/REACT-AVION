import React, { useState } from "react";
import "./navbar.scss";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-top">
          <div className="search">
            <NavLink to={`/Search`}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </NavLink>
          </div>
          <NavLink to={"/"} className="nav-logo">
            Avion
          </NavLink>
          <div className="nav-icons">
            <Link to={`/shopping`}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <i className="fa-regular fa-circle-user"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="nav-line"></div>
        <div className="nav-bottom">
          <ul className="nav-menu">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink>Plant pots</NavLink>
            </li>
            <li>
              <NavLink>Ceramics</NavLink>
            </li>
            <li>
              <NavLink>Tables</NavLink>
            </li>
            <li>
              <NavLink>Chairs</NavLink>
            </li>
            <li>
              <NavLink>Crockery</NavLink>
            </li>
            <li>
              <NavLink>Tableware</NavLink>
            </li>
            <li>
              <NavLink>Cutlery</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
