import React from "react";
import "../../../styles/landingScreen/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section1">
        <div className="footer-section1-img">
        <img src="/imgs/logo-footer.png" alt="" />
        </div>
        <div className="footer-info">
          <p>Destinations</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer-section2">
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
