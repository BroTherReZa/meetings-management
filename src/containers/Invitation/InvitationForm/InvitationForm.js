import React from "react";
import Wrapper from "../../../components/hoc/Wrapper";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { connect } from "react-redux";
import { DatePicker } from "jalali-react-datepicker";
import Participants from "../../../components/parts/Participants/Participants";
import "./InvitationForm.css";
import ParticipantsList from "../../../components/parts/Participants/ParticipantsList/ParticipantsList";
import axios from "../../../utils/Firebase/axios";
import { checkValidation } from "../../../utils/Validators/Validators";

const InvitationForm = (props) => {
  const setMeetingDateHandler = ({ value,}) => {
    const meetingDate = Object.values(value)[4];
    props.setMeetingDate(meetingDate);
    console.log(meetingDate)
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
      meetingDate: "دوشنبه ۱۵ بهمن",//props.meetingDate,
      meetingTime: 'ساعت ۱۰:۳۰',
      meetingRoom: props.form.room.value,
      meetingRoomAddress: props.form.roomAddress,
      subject: props.form.subject.value,
      minute: props.form.minute.value,
      participants: ["مدعو۱", "مدعو۲", "مدعو۳", "مدعو۴"]
    };
    axios
      .post("/meetings.json", meeting)
      .then((res) => {
        console.log("ok", res);
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
    meetingDate: state.meetingDate
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
export default connect(mapStateToProps, mapDispatchToProps)(InvitationForm);
