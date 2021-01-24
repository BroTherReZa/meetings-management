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
              <span>{m.name}</span>
              <span>{m.position}</span>
              <span>{m.email}</span>
              <span>{m.mobile}</span>
              <span>{m.state}</span>              
              <Button btnType="cancel">لغو دعوت</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ParticipantsList;
