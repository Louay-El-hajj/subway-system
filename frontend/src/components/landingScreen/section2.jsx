import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/landingScreen/section2.css";
import BookCard from "../bookCard";
import { useNavigate } from 'react-router-dom';

const Section2 = ({ from, to, price, rating }) => {

  return (
    <div id="section2" className="section2">
      <div className="section2-title">
        <h3>Hot Destinations</h3>
      </div>
      <BookCard/>

    </div>
  );
};

export default Section2;
