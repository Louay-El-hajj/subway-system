import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landingScreen/hero.css";
import "../../styles/commons/colors.css";
import "../../styles/commons/utilities.css";
import Button from "../button";

const Hero = ({ isLoggedIn }) => {
  return (
    <div className="hero-section">
      <header className="header ">
        <Link to="/">
          <img className="logo" src="/imgs/logo.png" alt="" />
        </Link>
        <nav className="nav-home flex">
          <ul className="nav-container flex ">
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <a className="Link" href="#section3">
                Book
              </a>
            </li>
            <li>
            {isLoggedIn ? (
                <Button onClick={() => {}} to="/profile">
                  Profile
                </Button>
              ) : (
                <Button onClick={() => {}} to="/login">
                  Login
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero-section1 flex center">
        <h2 className="hero-title">Explore the City's Heart</h2>
        <p className="hero-text">
          Where Every Journey is Part of the Destination
        </p>
      </section>
    </div>
  );
};

export default Hero;
