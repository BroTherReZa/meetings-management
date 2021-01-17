import React from "react";
import Wrapper from "../../components/hoc/Wrapper";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import { DatePicker } from "jalali-react-datepicker";
import Participants from "../../components/services/Participants/Participants";
import "./Invitation.css";
import ParticipantsList from "../../components/services/Participants/ParticipantsList/ParticipantsList";

const Invitation = (props) => {
  const checkValidation = (value, rules) => {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    return isValid;
  };

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
    props.onChangeInput(updatedForm);
  };

  const elementsArray = [];
  for (let item in props.form) {
    elementsArray.push({
      id: item,
      config: props.form[item],
    });
  }

  return (
    <Wrapper>
      <div className="invitation">
        <h1>فرم دعوت به جلسه</h1>
        <form>
          <div className="meeting-date">
            <label>تاریخ و ساعت جلسه :</label>
            <DatePicker />
          </div>
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
          <div className="search-participants">
            <Participants />
            <Button btnType="form">ارسال دعوت نامه</Button>
          </div>
        </form>
        <ParticipantsList />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (updatedForm) =>
      dispatch({ type: "INPUTCHANGE", data: updatedForm }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
