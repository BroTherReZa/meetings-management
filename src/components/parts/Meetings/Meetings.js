import React from "react";
import MeetingsList from "./MeetingsList/MeetingsList";

const Meetings = (props) => {
  const meetings = [];
  
  return (
    <div className="meetings">
      <MeetingsList meetings={props.list} />
    </div>
  );
};

export default Meetings;
