import React from "react";
import "./section.scss";

const Section = () => {
  return (
    <div className="section">
    <div className="container">
        <h1>What makes our brand different</h1>
        <div className="section-cards">
          <div className="section-card">
            <i class="fa-solid fa-truck-fast"></i>
            <h2 className="card-title">Next day as standard</h2>
            <p className="card-text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="section-card">
            <i class="fa-regular fa-circle-check"></i>
            <h2 className="card-title">Next day as standard</h2>
            <p className="card-text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="section-card">
          <i class="fa-regular fa-credit-card"></i>
            <h2 className="card-title">Next day as standard</h2>
            <p className="card-text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="section-card">
          <i class="fa-solid fa-seedling"></i>
            <h2 className="card-title">Next day as standard</h2>
            <p className="card-text">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
