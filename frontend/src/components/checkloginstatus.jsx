import React from "react";
import { useNavigate } from 'react-router-dom';


const CheckLogin = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleCheckLogin = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return null;
};

export default CheckLogin;
