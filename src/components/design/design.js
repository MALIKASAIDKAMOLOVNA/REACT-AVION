import React from "react";
import "./design.scss";

const Design = () => {
  return (
    <div className="Design">
      <div className="container">
        <div className="designImages">
          <img src="images/plant-bg.png" alt="" />
        </div>
        <div className="designTitle">
          <h1>Luxury homeware for people who love timeless design quality</h1>
          <p>Shop the new Spring 2022 collection today</p>
          <button className="DesignBtn">View collection</button>
        </div>
        <div className="DesignerSpan">
          <h1>Luxury homeware for people who love timeless design quality</h1>
          <p>
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>
          <button className="DesignBtn">View collection</button>
        </div>
      </div>
    </div>
  );
};

export default Design;
