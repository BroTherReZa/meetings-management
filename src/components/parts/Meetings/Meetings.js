import React, { useEffect } from "react";
import MeetingsList from "./MeetingsList/MeetingsList";
import { connect } from "react-redux";
import axios from "../../../utils/Firebase/axios";

const Meetings = (props) => {
  useEffect(() => {
    axios
      .get("/meetings.json")
      .then((res) => {
        const meetingsList = Object.values(res.data);
        props.getMeetings(meetingsList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filterMeetingsHandler = (list, filter) => {
    console.log(list, filter);
    if (list) {
      switch (props.filter) {
        case "today":
          
          return list;
        case "planned":
          return list;
        case "invited":
          return list;
        case "invitation":
          return list;
        default:
          return list;
      }
    }else{
      console.log("not found any meeting")
    }
  };

  return (
    <div className="meetings">
      <MeetingsList
        meetings={filterMeetingsHandler(props.meetings, props.filter)}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Meetings);
