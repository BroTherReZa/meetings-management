import React from "react";
import Button from '../../../UI/Button/Button'

import "./ParticipantItem.css";

const ParticipantItem = (props) => {
  return (
    <li className="participants-item">
      <span>آقای دکتر رحیمی</span>
      <span>کارشناس مرکز فاوا</span>
      <span>در انتظار تایید</span>
      <Button btnType="cancel">لغو جلسه</Button>
    </li>
  );
};

export default ParticipantItem;
