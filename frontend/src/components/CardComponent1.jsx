import { axios } from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate} from "react-dom"



const CardComponent1 = ({from , to , price , rating}) => {

      const [buttonClicked, setButtonClicked] = useState(false);
      const navigate = useNavigate();
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      useEffect(() => {
        const handleButtonClick = async () => {
          if (!token) {
            navigate("/login");
          } else {
            try {
              const response = await axios.post(
                //`http://127.0.0.1:8000/book-ticket/${ticket.id}`,
                null,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              const coinBalance = response.data.coinBalance;
              console.log("Coin Balance:", coinBalance);

              if (coinBalance >= price) {
                alert("Booking successful!");
                setButtonClicked(true);
              } else {
                alert("You do not have enough coins.");
              }
            } catch (error) {}
          }
        };

        handleButtonClick();
      }, []); 


  return (
    <section className="section2-container">
      <div>
        <img src="/imgs/img-beirut.png" alt="" />
      </div>
      <div className="section2-container-text">
        <p>From: {from}</p>
        <p>To: {to}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
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

export default CardComponent1
