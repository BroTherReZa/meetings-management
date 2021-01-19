import React from "react";
import Meetings from "../../components/parts/Meetings/Meetings";

const Today = (props) => {
  return (
    <div className="today">
      <h1>فهرست جلسات امروز</h1>
      <Meetings />
    </div>
  );
};

export default Today;
