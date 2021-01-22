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
  const contactInputChangeHandler = (event, inputElement) => {
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
    props.onChangeContactInput(updatedForm);
  };

  const addContactHandler = (event) => {
    event.preventDefault();
    const newContact = {
      name: props.contactForm.name.value,
      position: props.contactForm.position.value,
      email: props.contactForm.email.value,
      mobile: props.contactForm.mobile.value,
    };
    axios
      .post("/contacts.json", newContact)
      .then((res) => {
        console.log("add DB", res);
        props.submit()
      })
      .catch((error) => {
        console.log(error);
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
            change={(event) => contactInputChangeHandler(event, item.id)}
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
    onChangeContactInput: (newParticipant) =>
      dispatch({ type: "CONTACTINPUTCHANGE", payload: { data: newParticipant } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewParticipants);
