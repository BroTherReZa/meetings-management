import React from "react";
import ParticipantItem from "../ParticipantItem/ParticipantItem";

import "./ParticipantsList.css";

const ParticipantsList = (props) => {
  return (
    <ul>
      <ParticipantItem />
      <ParticipantItem />
    </ul>
  );
};

export default ParticipantsList;
