import React from "react";
import "./styles.css";

const Button = ({ children, handleClick, bgColor, disabled }) => {
  return (
    <button
      onClick={handleClick}
      style={{background: bgColor}}
      className='button'
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
