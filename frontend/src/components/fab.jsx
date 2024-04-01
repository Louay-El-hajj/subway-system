import React from "react";
import "../styles/fab.css";

const FAB = () => {
  return (
    <div className="fab-wrapper">
      <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
      <label className="fab" htmlFor="fabCheckbox">
        <span className="fab-dots fab-dots-1"></span>
        <span className="fab-dots fab-dots-2"></span>
        <span className="fab-dots fab-dots-3"></span>
      </label>
      <div className="fab-wheel">
        <a className="fab-action fab-action-1">
          <i className="fas fa-question">Home</i>
        </a>
        <a className="fab-action fab-action-2">
          <i className="fas fa-book">Contact us</i>
        </a>
        <a className="fab-action fab-action-3">
          <i className="fas fa-address-book">Book</i>
        </a>
        <a className="fab-action fab-action-4">
          <i className="fas fa-info">Search</i>
        </a>
      </div>
    </div>
  );
};

export default FAB;
