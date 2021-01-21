import React from "react";
import { connect } from 'react-redux'
import { checkValidation } from '../../../../utils/Validators/Validators'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'

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
      ...props.form,
    };
    const updatedElement = { ...updatedForm[inputElement] };
    updatedElement.value = event.target.value;
    updatedElement.valid = checkValidation(
      updatedElement.value,
      updatedElement.vaildation
    );
    updatedElement.used = true;
    updatedForm[inputElement] = updatedElement;
    props.addParticipant(updatedForm);
  }; 

  return (
    <div className="participants-form">
      <form>
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
          <Button btnType="form">افزودن</Button>
        </form>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        contactForm: state.participants
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addParticipant: (newParticipant) => dispatch({ type: 'ADD', payload: {data: newParticipant}})
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (NewParticipants);
