import React from "react";
import "./navOpen.scss";
import { NavLink } from "react-router-dom";

const NavOpen = ({ setOpen, open }) => {
  return (
    <div className="navOpen">
      <div className="navbarTop">
        <div className="container">
          <p className="navbarTopTitle">
            <i class="fa-solid fa-truck-fast"></i> <span>Free delivery on all orders
            over £50 with code easter checkout</span>
          </p>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
        <div className="navbarBottom">
          <div className="container">
            <div className="navbarBottomLogo">Avion</div>
            <ul className="navbarBottomMenu">
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
            <div className="navbarBottomIcons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-regular fa-circle-user"></i>
            <i onClick={() => setOpen(!open)} class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NavOpen;
