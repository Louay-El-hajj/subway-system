import React, {useEffect, useState} from "react";
// import RequestCoins from "../../pages/requestcoin/requestcoin";
import "../../styles/landingScreen/section1.css";
import FAB from "../fab";
import { Navigate, useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";

const Section1 = () => {
  const [showCoinRequest, setShowCoinRequest]= useState(false);
  const [loggedIn,setLoggedIn]= useState(false);
 const navigate= useNavigate();

 //Hard code object for testing:
  const user={
    username:"test",
    isLoggedIn:false,
  };

  // useEffect(()=>{
  //   if (user.isLoggedIn){
  //     setLoggedIn(true);
  //   }
  // },);

  const handleTopWalletClick = () => {
    
    if (user.isLoggedIn) {
      navigate("/profile")
    
    } else {
      navigate("/login");
      
    }
  };
  



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
            <div className="top-wallet" onClick={()=>handleTopWalletClick()}>
                <img src="/imgs/coin-request-icon.png" alt="" />
                <p>Top Up Your Wallet</p>
            </div >
            <div className="support">
                <img src="/imgs/support-icon.png" alt="" />
                <p>24/7 Support</p>
            </div>
            <div className="section1-container2-3">
                <img src="/imgs/search-icon.png" alt="" />
                <p>Search for destinations</p>
            </div>
        </div>
      </section>
      {/* {showCoinRequest} */}
      <FAB/>
    </div>
  );
};

export default Section1;
