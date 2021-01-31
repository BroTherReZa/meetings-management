import React from "react";
import Meetings from "../../components/parts/Meetings/Meetings";
import Button from "../../components/UI/Button/Button";

const Invitation = (props) => {
  const invitationRequestHandler = () => {
    props.history.push("/invitationform");
  };

  return (
    <div className="invitation">
      <div className="subheader">
        <h1>فهرست دعوت نامه های ارسال شده </h1>
        <Button btnType="form" click={invitationRequestHandler}>
          تنظیم جلسه جدید
        </Button>
      </div>
      <Meetings filter="invitation" />
    </div>
  );
};

export default Invitation;
