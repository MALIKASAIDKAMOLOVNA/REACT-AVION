import React from "react";
import "./club.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Club = () => {
  return (
    <div className="Club">
      <div className="container">
        <h2 className="ClubName">Join the club and get the benefits</h2>
        <p className="ClubNameList">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="ClubIcons">
          <div className="ClubIcon">
            <p>
            <FontAwesomeIcon icon={faCircleCheck} className="fa-circle-check" /> Exclusive offers, 
            </p>
          </div>
          <div className="ClubIcon">
            <p>
            <FontAwesomeIcon icon={faCircleCheck} className="fa-circle-check" />  Free events
            </p>
          </div>
          <div className="ClubIcon">
            <p>
            <FontAwesomeIcon icon={faCircleCheck} className="fa-circle-check" />  Large discounts
            </p>
          </div>
        </div>
        <div className="ClubInput">
          <input type="text" placeholder="your@email.com" />
          <button className="ClubInputButton">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Club;
