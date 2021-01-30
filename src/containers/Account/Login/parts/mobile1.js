import React from "react";
import { checkValidation } from "../../../../utils/Validators/Validators";
import { connect } from "react-redux";
import Input from '../../../../components/UI/Input/Input'
import Button from '../../../../components/UI/Button/Button'

import "./Login.css";

const Mobile = (props) => {

  let elementsArray = [];
  for (let item in props.loginForm.signIn) {
    elementsArray.push({
      id: item,
      config: props.loginForm.signIn[item],
    });
  }

  const inputChangeHandler = (event, inputElement) => {
    const updatedForm = {
      ...props.loginForm.signIn,
    };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value
    updatedElement.valid = checkValidation(
      updatedElement.value,
      updatedElement.vaildation
    );
    updatedElement.used = true;
    updatedForm[inputElement] = updatedElement;
    props.onChangeInput(updatedForm);
  };

  const mobileSubmitHandler = (event) => {
      console.log("11")
      event.preventDefault()
    for (let item in props.loginForm.signUp) {
        elementsArray.push({
          id: item,
          config: props.loginForm.signUp[item],
        });
      }
  }
  return (
    <div className="login">
      <h1>ورود یا ثبت نام</h1>
      <form onSubmit={mobileSubmitHandler}>
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
        <Button 
        btnType="form"
        disabled={!props.loginForm.signIn.mobile.valid}
        >ادامه</Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (updatedForm) => dispatch({ type: "SIGNINCHANGEINPUT", payload: {data: updatedForm}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
