import React from "react";
import Input from '../../UI/Input/Input'

import "./Participants.css";

const Participants = (props) => {
    const searchParticipants = (event) =>{
        return
    }
  return (
    <Input
      key="id"
      inputType="input"
      elementConfig={{
        type: "text",
        placeholder: "نام / نام خانوادگی / شماره تماس / ایمیل / پست سازمانی",
      }}
      value=""
      invalid={false}
      used={true}
      change={searchParticipants}
    />
  );
};

export default Participants;
