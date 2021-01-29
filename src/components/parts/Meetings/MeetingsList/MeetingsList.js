import React from "react";
import Button from "../../../UI/Button/Button";

import "./MeetingsList.css";

const MeetingsList = (props) => {
  return (
    <ul className="meetings-list">
      {props.meetings.map((m, index) => {
        return (
          <li key={index} className="meeting-item">
            <div className="date-time">
              <p>{m.meetingDate}</p>
              <p>{m.meetingTime}</p>
            </div>
            <div className="room">
              <p>{m.meetingRoom}</p>
              <p>{m.meetingRoomAddress}</p>
            </div>
            <div className="subject">
              <p>{m.subject}</p>
              <p>{m.minute}</p>
            </div>
            <div className="participants">
              <p>
                {m.participants.map((p, index) => {
                  return (<span key={index}>{p.name + " "}</span>);
                })}
              </p>
            </div>

            <Button btnType="cancel">لغو جلسه</Button>
          </li>
        );
      })}
    </ul>
  );
};

export default MeetingsList;
