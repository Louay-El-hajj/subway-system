import React from "react";
import "../../styles/landingScreen/footer.css";
import "../../styles/commons/utilities.css";
import "../../styles/commons/colors.css";
const Footer = () => {
  return (
    <footer className="footer primary-bg">
      <div className="footer-section1 flex">
        <div className="footer-section1-img">
        <img src="/imgs/logo.png" alt="" />
        </div>
        <div className="footer-info flex">
          <p>Destinations</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer-section2 flex">
        <p>&copy; 2024 Subway System. All rights reserved.</p>
        <div>
          <img src="/imgs/facebook-icon.png" alt="" />
          <img src="/imgs/insta-icon.png" alt="" />
          <img src="/imgs/x-icon.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
