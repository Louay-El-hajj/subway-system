import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const BookCard = ({from , to , price , rating}) => {

      const [buttonClicked, setButtonClicked] = useState(false);
      const [stations, setStation] = useState([]);
      const navigate = useNavigate();
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      const getStations = async () => {
        try {
          const response = await axios.get(
            "http://127.0.0.1:8000/api/station"
          );
    
          setStation(response.data);
        } catch (error) {
          console.error (error);
        }
      };


  return (
    <section className="section2-container">
      <div>
        <img src="/imgs/img-beirut.png" alt="" />
      </div>
      <div className="section2-container-text">
        <p>From: {from}</p>
        <p>Location: {to}</p>
      
      </div>
      <button
        className={`section2-button ${buttonClicked ? "clicked" : ""}`}
        onClick={() => setButtonClicked(true)}
      >
        Book
      </button>
    </section>
  );
}

export default BookCard;
