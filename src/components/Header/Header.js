import React from "react";
// import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header-slider">
          <div className="header-title">
            <h1 className="text">
              The furniture brand for the future, with timeless designs
            </h1>
          <button className="header-btn">View collection</button>
          <h4 className="list">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </h4>
          </div>
          <div className="header-images">
            <img src="images/header-img.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
