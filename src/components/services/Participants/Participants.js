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
        placeholder: "نام یا نام خانوادگی یا شماره تماس یا پست سازمانی",
      }}
      value=""
      invalid={false}
      used={true}
      change={searchParticipants}
    />
  );
};

export default Participants;
