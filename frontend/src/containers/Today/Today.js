import React from "react";
import {isToday} from '../../utils/DateFormat/ShamsiDateCompare'
import Meetings from "../../components/parts/Meetings/Meetings";

const Today = (props) => {
  isToday()

  return (
    <div className="today">
      <h1>فهرست جلسات امروز</h1>
      <Meetings filter="today" />
    </div>
  );
};

export default Today;
