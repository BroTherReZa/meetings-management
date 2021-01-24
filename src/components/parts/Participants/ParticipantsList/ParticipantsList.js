import React from "react";
import Button from "../../../UI/Button/Button";

import "./ParticipantsList.css";

const ParticipantsList = (props) => {
  return (
    <div className="participants-list">
      <p>فهرست دعوت شدگان</p>
      <ul>
        {props.list.map((m, index) => {
          return (
            <li key={index} className="participant-item">
              <span>{m[0].name}</span>
              <span>{m[0].position}</span>
              <span>{m[0].email}</span>
              <span>{m[0].mobile}</span>
              <span>{m[0].state}</span>              
              <Button btnType="cancel">لغو دعوت</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ParticipantsList;
