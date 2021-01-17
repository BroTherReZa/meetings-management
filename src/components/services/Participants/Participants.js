import React from "react";
import Input from '../../UI/Input/Input'

import "./Participants.css";

const Participants = (props) => {
  return (
    <Input
      key="id"
      inputType="input"
      elementConfig={{
        type: "text",
        placeholder: "نام یا نام خانوادگی یا شماره تماس یا پست سازمانی",
      }}
      value=""
      //   invalid={!item.config.valid}
      //   used={item.config.used}
      //   change={(event) => inputChangeHandler(event, item.id)}
    />
  );
};

export default Participants;
