import React from "react";
import Meetings from "../../components/parts/Meetings/Meetings";
import Button from '../../components/UI/Button/Button'

const Today = (props) => {
  const invitationRequestHandler = () => {
    props.history.push('/invitationform')
  }
  return (
    <div className="today">
      <div>
      <h1>فهرست دعوت نامه های ارسال شده </h1>
      <Button btnType="form" click={invitationRequestHandler}>تنظیم جلسه جدید</Button>
      </div>
      <Meetings />
    </div>
  );
};

export default Today;
