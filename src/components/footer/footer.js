import { Link, NavLink } from "react-router-dom";
import "./footer.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footerTop">
          <ul className="footerMenu">
            <NavLink className="footerActive">Menu</NavLink>
            <NavLink className="footerBlock">New arrivals</NavLink>
            <NavLink className="footerBlock">Best sellers</NavLink>
            <NavLink className="footerBlock">Recently viewed</NavLink>
            <NavLink className="footerBlock">Popular this week</NavLink>
            <NavLink className="footerBlock">All products</NavLink>
          </ul>
          <ul className="footerCategories">
            <NavLink className="footerActive">Categories</NavLink>
            <NavLink className="footerBlock">Crockery</NavLink>
            <NavLink className="footerBlock">Furniture</NavLink>
            <NavLink className="footerBlock">Homeware</NavLink>
            <NavLink className="footerBlock">Plant pots</NavLink>
            <NavLink className="footerBlock">Chairs</NavLink>
            <NavLink className="footerBlock">Crockery</NavLink>
          </ul>
          <ul className="ourCompany">
            <NavLink className="footerActive">Our company</NavLink>
            <NavLink className="footerBlock">About us</NavLink>
            <NavLink className="footerBlock">Vacancies</NavLink>
            <NavLink className="footerBlock">Contact us</NavLink>
            <NavLink className="footerBlock">Privacy</NavLink>
            <NavLink className="footerBlock">Returns policy</NavLink>
          </ul>
          <div className="Joins">
            <h3>Join our mailing list</h3>
            <div className="footerInput">
              <input type="text" placeholder="your@email.com" />
              <button className="footerBtn">Sign up</button>
            </div>
          </div>
        </div>
        <div className="footerLines"></div>
        <div className="footerBottom">
          <div className="footerText">
            <h2>Copyright 2022 Avion LTD</h2>
          </div>
          <div className="footerIcons">
            <img className="iconSvg" src="icons/Logo--linkedin.png" alt="" />
            <img className="iconSvg" src="icons/Logo--facebook.png" alt="" />
            <img className="iconSvg" src="icons/Logo--instagram.png" alt="" />
            <img className="iconSvg" src="icons/Logo--skype.png" alt="" />
            <img className="iconSvg" src="icons/Logo--twitter.png" alt="" />
            <img className="iconSvg" src="icons/Logo--pinterest.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
