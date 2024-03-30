import React from "react";
// import { Link } from 'react-router-dom';
import "./section3.css";

const Section3 = () => {
  return (
    <div>
      <div className="section3">
          <h4>Buy Your Ticket</h4>
        <div className="section3-container1">
          <div className="section3-container1-1">
            <div className="container1-1-1">
              <div className="section3-from">
                <img src="/imgs/location-icon.png" alt="" />
                <select name="" id="" className="section3-select">
                  <option value="Beirut">Beirut</option>
                </select>
              </div>
              <div className="section3-to">
                <img src="/imgs/location-icon.png" alt="" />
                <select name="" id="" className="section3-select">
                  <option value="Saida">Saida</option>
                </select>
              </div>
            </div>
              <hr className="line" />
          </div>
          <div className="section3-container1-2">
            <div className="section3-depart">
              <img src="/imgs/calendar-icon.png" alt="" />
              <select name="" id="" className="section3-select">
                <option value="Depart">Depart</option>
              </select>
            </div>
            <div className="section3-arrive">
              <img src="/imgs/calendar-icon.png" alt="" />
              <select name="" id="" className="section3-select">
                <option value="Arrive">Arrive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="section3-container2">
          <img src="/imgs/search-icon2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
