import React from "react";
import Meetings from '../../components/parts/Meetings/Meetings'

const Invited = () => {
  return (
    <div className="invited">
      <h1>جلسات دعوت شده</h1>
      <Meetings filter="invited" />
    </div>
  );
};

export default Invited;
