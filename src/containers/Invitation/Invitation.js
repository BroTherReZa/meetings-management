import React, {useEffect,} from "react";
import Meetings from "../../components/parts/Meetings/Meetings";
import Button from "../../components/UI/Button/Button";
import axios from "../../utils/Firebase/axios";
import { connect } from "react-redux";

const Invitation = (props) => {

  useEffect(() => {
    axios
      .get("/meetings.json")
      .then((res) => {
        const meetingsList = (Object.values(res.data))
        //console.log("ok", meetingsList)
        props.getMeetings(meetingsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const invitationRequestHandler = () => {
    props.history.push("/invitationform");
  };

  return (
    <div className="today">
      <div>
        <h1>فهرست دعوت نامه های ارسال شده </h1>
        <Button btnType="form" click={invitationRequestHandler}>
          تنظیم جلسه جدید
        </Button>
      </div>
        <Meetings list={props.meetings} filter="today" />
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    meetings: state.meetings,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: (meetingsList) =>
      dispatch({ type: "GETMEETINGS", payload: { data: meetingsList } }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Invitation);
