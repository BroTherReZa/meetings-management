import React from "react";
import { checkValidation } from "../../../../utils/Validators/Validators";
import { connect } from "react-redux";
import Input from "../../../../components/UI/Input/Input";
import Button from "../../../../components/UI/Button/Button";


const Mobile = (props) => {
  let elementsArray = [];
  for (let item in props.loginForm) {
    elementsArray.push({
      id: item,
      config: props.loginForm[item],
    });
  }

  const inputChangeHandler = (event, inputElement) => {
    const updatedForm = {
      ...props.loginForm,
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

  return (
    <div className="mobile">
        <h2>شماره تلفن همراه خود را وارد کنید</h2>
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
        click={props.clicked}
        btnType="form"
        disabled={!props.loginForm.mobile.valid}
      >
        ادامه
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm.mobileForm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (updatedForm) =>
      dispatch({ type: "MOBILECHANGEINPUT", payload: { data: updatedForm } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Mobile);
