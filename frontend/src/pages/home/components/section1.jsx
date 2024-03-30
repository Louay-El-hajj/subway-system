import React from "react";
// import { Link } from 'react-router-dom';
import "./section1.css";

const Section1 = () => {
  return (
    <div className="home-main">
      <section className="home-section1">
        <h3 className="section1-title">Unveiling the World Below</h3>
        <div className="section1-container1">
            <div className="section1-container1-1">
                <h4 className="section1-container1-1-title">Explore the depths of the urban underground </h4>
                <p>Dive into the urban labyrinth where every turn reveals the marvels of subway systems.
                This portal is your ticket to a captivating educational adventure beneath the city’s heartbeat</p>
            </div>
            <div className="section1-container1-2">
                <img src="/imgs/img1.png" alt="" />
            </div>
        </div>
        <div className="section1-container2">
            <div className="section1-container2-1">
                <img src="/imgs/coin-request-icon.png" alt="" />
                <p>Top Up Your Wallet</p>
            </div >
            <div className="section1-container2-2">
                <img src="/imgs/support-icon.png" alt="" />
                <p>24/7 Support</p>
            </div>
            <div className="section1-container2-3">
                <img src="/imgs/search-icon.png" alt="" />
                <p>Search for destinations</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
