import React from 'react';
import './cardkey.css';

const BuyTicket = () => {
  return (
    <div className="buy-ticket">
      <h2>Buy Your Ticket</h2>
      <div className="ticket-form">
        <div className="form-group">
          <div className="location-select">
            <span className="icon">🌍</span>
            <select>
              <option value="beirut">Beirut</option>
              {/* Add more options here */}
            </select>
          </div>
          <span className="separator">—</span>
          <div className="location-select">
            <span className="icon">🌍</span>
            <select>
              <option value="saida">Saida</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="date-select">
            <span className="icon">📆</span>
            <select>
              <option value="depart">Depart</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="date-select">
            <span className="icon">📅</span>
            <select>
              <option value="arrival">Arrival</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="date-select">
            <span className="icon">🕰️</span>
            <select>
              <option value="arrival">Arrival</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
        <button className="search-btn">🔍</button>
      </div>
    </div>
  );
};

export default BuyTicket;