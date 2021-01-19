import React from "react";
import Wrapper from "../../components/hoc/Wrapper";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import { DatePicker } from "jalali-react-datepicker";
import Participants from "../../components/services/Participants/Participants";
import "./Invitation.css";
import ParticipantsList from "../../components/services/Participants/ParticipantsList/ParticipantsList";
import axios from "../../utils/Firebase/axios";
import { checkValidation } from "../../utils/Validators/Validators";

const Invitation = (props) => {
  const setMeetingDateHandler = ({ value }) => {
    const updatedMeeting = { ...props.meeting };
    updatedMeeting.meetingDate = value;
    props.setMeetingDate(updatedMeeting);
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

  const invitationSubmitHandler = (event) => {
    event.preventDefault();
    const meeting = {
      subject: props.form.subject.value,
      minute: props.form.minute.value,
      meetingRoom: props.form.meetingRoom.value,
      meetingDate: props.meeting.meetingDate,
    };
    axios
      .post("/meeting.json", meeting)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <form onSubmit={invitationSubmitHandler}>
          <DatePicker
            label="تاریخ و ساعت جلسه :"
            onClickSubmitButton={setMeetingDateHandler}
          />
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
          <Button btnType="form">تنظیم جلسه</Button>
        </form>
        <div className="search-participants">
          <Participants />
        </div>
        <ParticipantsList />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.invitationForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (updatedForm) =>
      dispatch({ type: "INPUTCHANGE", payload: { data: updatedForm } }),
    setMeetingDate: (updatedMeeting) =>
      dispatch({ type: "SETDATE", payload: { data: updatedMeeting } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
