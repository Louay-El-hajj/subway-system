import React from "react";
// import { Link } from 'react-router-dom';
import "../../../styles/landingScreen/section2.css";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-title">
        <h3>Hot Destinations</h3>
      </div>
      <section className="section2-container">
        <div>
          <img src="/imgs/img-beirut.png" alt="" />
        </div>
        <div className="section2-container-text">
        <p>From:</p>
        <p>To:</p>
        <p>Price:</p>
        <p>Rating:</p>
        </div>
        <button className="section2-button">Book</button>
      </section>
    </div>
  );
};

export default Section2;
