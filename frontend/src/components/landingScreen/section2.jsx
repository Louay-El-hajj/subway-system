import React, { useState } from "react";
import axios from "axios";
import "../../styles/landingScreen/section2.css";
import { useNavigate } from 'react-router-dom';
// import FAB from "../fab";

const Section2 = ({from,to,price,rating,isLoggedIn}) => {
  const [buttonClicked, setButtonClicked]= useState(false);
  const navigate = useNavigate(); 
  
  const handleButtonClick = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      try {
        const response = await axios.get("http://localhost/subway-system/check-coin-balance", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("accessToken")}`,
          },
        });
        const coinBalance = response.data.coinBalance;
        
        if (coinBalance >= price) {
          alert("Booking successful!");
          setButtonClicked(true);
        } else {
          alert("You do not have enough coins.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while checking coin balance. Please try again later.");
      }
    }
  };
  return (
    <div id="section2" className="section2">
      <div className="section2-title">
        <h3>Hot Destinations</h3>
      </div>
      <section className="section2-container">
        <div>
          <img src="/imgs/img-beirut.png" alt="" />
        </div>
        <div className="section2-container-text">
        <p>From:{from}</p>
        <p>To:{to}</p>
        <p>Price:{price}</p>
        <p>Rating:{rating}</p>
        </div>
        <button className={`section2-button ${buttonClicked ? "clicked": ""}`} onClick={handleButtonClick}>Book</button>
      </section>
      {/* <FAB/> */}
    </div>
  );
};

export default Section2;
