import React from "react";
import Button from '../../../UI/Button/Button'

import "./MeetingItem.css";

const MeetingItem = (props) => {
  return (
    <li className="meeting-item">
      <div className="date-time">
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
      <div className="room">
        <p>{props.room}</p>
        <p>{props.roomAddress}</p>
      </div>
      <div className="subject">
        <p>{props.subject}</p>
        <p>{props.minute}</p>
      </div>
      <div className="participants">
        <p>{props.participants.join(' ')}</p>
      </div>
      <Button btnType="cancel">لغو جلسه</Button>
    </li>
  );
};

export default MeetingItem;
