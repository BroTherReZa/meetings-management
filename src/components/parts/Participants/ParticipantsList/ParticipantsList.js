import React from "react";
import ParticipantItem from "../ParticipantItem/ParticipantItem";

import "./ParticipantsList.css";

const ParticipantsList = (props) => {
  return (
    <div className="participants-list">
      <p>فهرست دعوت شدگان</p>

      <ul>
        <ParticipantItem />
        <ParticipantItem />
      </ul>
    </div>
  );
};

export default ParticipantsList;
