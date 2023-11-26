import React from "react";
import "./started.scss"

const Started = () => {
  return (
    <div className="Started">
      <div className="container">
        <div className="startedList">
          <h2>It started with a small idea</h2>
          <p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
          <button className="startedBtn">View collection</button>
        </div>
        <div className="startedImages">
          <img src="images/startedImg.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Started;
