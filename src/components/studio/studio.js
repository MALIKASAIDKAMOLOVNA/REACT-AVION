import React, { useEffect, useState } from "react";
import "./studio.scss"

const Studio = () => {

  return (
    <div className="Studio">
      <div className="container">
        <div className="studioList">
          <h2>
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <button className="studiobtn">Get in touch</button>
        </div>
        <div className="studioImages">
            <img src="images/studio-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Studio;
