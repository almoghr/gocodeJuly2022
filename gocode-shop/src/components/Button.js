import React from "react";

const Button = ({ stylingObject, onClickHandler, text }) => {
  return (
    <button style={stylingObject} onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;


