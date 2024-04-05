import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/landingScreen/section1.css";

const TopWallet = () => {
  const navigate = useNavigate();
const token = localStorage.getItem('token');

  const handleTopWalletClick = () => {
    if (token) {
      navigate("/profile");
    } 
    // else {
    //   navigate("/login");
    // }
  };

  return (
    <div className="top-wallet" onClick={handleTopWalletClick}>
      <img src="/imgs/coin-request-icon.png" alt="" />
      <p>Top Up Your Wallet</p>
    </div>
  );
};

export default TopWallet;
