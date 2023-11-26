import React from "react";
import "./benefits.scss";

const Benefits = () => {
  return (
    <div className="Benefits">
      <div className="container">
        <h1>Join the club and get the benefits</h1>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="benefits-input">
          <input type="text" placeholder="your@email.com" />
          <button className="input-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
