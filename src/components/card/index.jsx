import React from "react";
import "./styles.css";

const Card = ({ children, bgColor, width }) => {
  return <div className="card" style={{background: bgColor, width}}>{children}</div>;
};

export default Card;
