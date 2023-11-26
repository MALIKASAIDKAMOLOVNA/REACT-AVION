import React from "react";
import "./Open.scss";
import { NavLink } from "react-router-dom";

const Open = ({ open }) => {
  return (
    <div className={open ? "Open show" : "Open"}>
      <ul className="openBars">
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
  );
};

export default Open;
