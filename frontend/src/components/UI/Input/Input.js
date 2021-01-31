import React from "react";

import "./Input.css";

const Input = (props) => {

  let inputElement = null;
  const inputClass = ['input-element']
  
  if(props.invalid && props.used){
    inputClass.push('invalid')
  }
  switch (props.inputType) {
    case "input":
      inputElement = (
        <input
          className = {inputClass.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className = {inputClass.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break
    default:
      inputElement = (
        <input
          className= {inputClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
  }
  return <div className="input">{inputElement}</div>;
};

export default Input;
