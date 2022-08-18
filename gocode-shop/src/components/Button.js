import React from "react";
import './Button.css'

const Button = ({ stylingObject, onClickHandler, text }) => {
  return (
    <button style={stylingObject} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;


