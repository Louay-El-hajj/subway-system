import React from "react";
// import { Link } from 'react-router-dom';
import "../../styles/landingScreen/hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <header className="header">
        <img className="logo" src="/imgs/logo.png" alt="" />
        <nav className="nav-home">
          <ul className="nav-container">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Book</p>
            </li>
            <li>
              <p>Login</p>
            </li>
            <li>
              <p>Sign up</p>
            </li>
          </ul>
        </nav>
      </header>
        <section className="hero-section1">
          <h2 className="hero-title">Explore the City's Heart</h2>
          <p className="hero-text">Where Every Journey is Part of the Destination</p>
        </section>
        
    </div>
  );
};

export default Hero;
