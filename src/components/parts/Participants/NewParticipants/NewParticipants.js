import React from "react";
import { connect } from "react-redux";
import { checkValidation } from "../../../../utils/Validators/Validators";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import axios from "../../../../utils/Firebase/axios";

import "./NewParticipants.css";

const NewParticipants = (props) => {

  const elementsArray = [];
  for (let item in props.contactForm) {
    elementsArray.push({
      id: item,
      config: props.contactForm[item],
    });
  }
  const inputChangeHandler = (event, inputElement) => {
    const updatedForm = {
      ...props.contactForm,
    };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value;
    updatedElement.valid = checkValidation(
      updatedElement.value,
      updatedElement.vaildation
    );
    updatedElement.used = true;
    updatedForm[inputElement] = updatedElement;
    props.onChangeInput(updatedForm);
  };

  const addContactHandler = (event) => {
    event.preventDefault();
    const newContact = [{
      name: props.contactForm.name.value,
      position: props.contactForm.position.value,
      email: props.contactForm.email.value,
      mobile: props.contactForm.mobile.value,
      state: 'آماده ارسال',
    }];
    axios
      .post("/contacts.json", newContact)
      .then((res) => {
        console.log("Add Contact To DB", res);
        props.submit(newContact)
      })
      .catch((error) => {
        console.log('err', error);
      });
  };


  return (
    <div className="participants-form">
      <div className="inputs">
        {elementsArray.map((item) => (
          <Input
            key={item.id}
            inputType={item.config.elementType}
            elementConfig={item.config.elementConfig}
            value={item.config.value}
            invalid={!item.config.valid}
            used={item.config.used}
            change={(event) => inputChangeHandler(event, item.id)}
          />
        ))}
      </div>
      <Button
        btnType="form"
        click={addContactHandler}
        disabled={!props.contactForm.email.valid ? true : false}
      >
        افزودن
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contactForm: state.cantactForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (updatedForm) =>
      dispatch({ type: "CONTACTINPUTCHANGE", payload: { data: updatedForm } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewParticipants);
