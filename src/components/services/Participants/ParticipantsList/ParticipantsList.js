import React from "react";
import ParticipantItem from "../ParticipantItem/ParticipantItem";

import "./ParticipantsList.css";

const ParticipantsList = (props) => {
  return (
    <div className="participants">
        <ul className="participants-list">
      <ParticipantItem />
      <ParticipantItem />
    </ul>
    </div>
  );
};

export default ParticipantsList;
