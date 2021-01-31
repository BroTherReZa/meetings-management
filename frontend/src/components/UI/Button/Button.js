import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.btnType}`}
      disabled={props.disabled}
      onClick={props.click}
    >
      {props.children}
    </button>
  );
};

export default Button;
