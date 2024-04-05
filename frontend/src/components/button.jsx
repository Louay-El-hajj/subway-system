import React from "react";
import "../styles/button.css";
import { Link } from "react-router-dom";

const Button = ({ to, children }) => {
  return (
    <Link className="button" to={to}>
      <button> {children}</button>
    </Link>
  );
};

export default Button;
