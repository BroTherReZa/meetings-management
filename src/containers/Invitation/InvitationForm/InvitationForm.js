import React, {useEffect} from "react";
import Wrapper from "../../../components/hoc/Wrapper";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { connect } from "react-redux";
import { DatePicker } from "jalali-react-datepicker";
import SearchParticipants from "../../../components/parts/Participants/SearchParticipants/SearchParticipants";
import "./InvitationForm.css";
import ParticipantsList from "../../../components/parts/Participants/ParticipantsList/ParticipantsList";
import axios from "../../../utils/Firebase/axios";
import { checkValidation } from "../../../utils/Validators/Validators";
import NewParticipants from "../../../components/parts/Participants/NewParticipants/NewParticipants";

const InvitationForm = (props) => {

  // useEffect(()=>{
  //   axios
  //   .get("/contacts.json")
  //   .then((res) => {
  //     console.log("load DB", res.data);
  //     if (res.data) {
  //       const contactList = Object.values(res.data);
  //       props.getContacts(contactList);
  //     }
  //   });
  //   console.log('run effect')
  // },[props.contactForm])

  const newSumbitHandler = () => {
    axios
    .get("/contacts.json")
    .then((res) => {
      console.log("load DB", res.data);
      if (res.data) {
        const contactList = Object.values(res.data);
        props.getContacts(contactList);
      }
      console.log(props.participants)
    });
  }

  const elementsArray = [];
  for (let item in props.form) {
    elementsArray.push({
      id: item,
      config: props.form[item],
    });
  }

  const setMeetingDateHandler = ({ value }) => {
    const meetingDate = Object.values(value)[4];
    props.setMeetingDate(meetingDate);
    console.log(meetingDate);
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
      meetingDate: "دوشنبه ۱۵ بهمن", //props.meetingDate,
      meetingTime: "ساعت ۱۰:۳۰",
      meetingRoom: props.form.room.value,
      meetingRoomAddress: props.form.roomAddress,
      subject: props.form.subject.value,
      minute: props.form.minute.value,
      participants: ["مدعو۱", "مدعو۲", "مدعو۳", "مدعو۴"],
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
          <SearchParticipants />
          <NewParticipants submit={newSumbitHandler}/>
          <Button btnType="form">تنظیم جلسه</Button>
        </form>
        <ParticipantsList />
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.invitationForm,
    meetingDate: state.meetingDate,
    participants: state.participants,
    contactForm: state.contactForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeInput: (updatedForm) =>
      dispatch({
        type: "INVITATIONINPUTCHANGE",
        payload: { data: updatedForm },
      }),
    setMeetingDate: (updatedMeeting) =>
      dispatch({ type: "SETMEETINGDATE", payload: { data: updatedMeeting } }),
    getContacts: (contactList) =>
      dispatch({ type: "GETCONTACTS", payload: { data: contactList } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InvitationForm);
