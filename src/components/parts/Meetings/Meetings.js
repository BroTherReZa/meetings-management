import React from "react";
import MeetingsList from "./MeetingsList/MeetingsList";

const Meetings = (props) => {
  const meetings = [
    {
      meetingId: "1",
      meetingDate: "سه شنبه ۱۶ بهمن",
      meetingTime: "ساعت ۱۲:۰۰",
      meetingRoom: "محل جلسه",
      meetingRoomAddress: "آدرس مکان جلسه",
      subject: "موضوع جلسه ۱",
      minute: "دستور جلسه ۱",
      participants: ["مدعو۱", "مدعو۲", "مدعو۳", "مدعو۴"],
    },
    {
      meetingId: "2",
      meetingDate: "چهارشنبه ۱۷ بهمن",
      meetingTime: "ساعت ۰۹:۰۰",
      meetingRoom: "محل جلسه",
      meetingRoomAddress: "آدرس مکان جلسه",
      subject: "موضوع جلسه ۲",
      minute: "دستور جلسه ۲",
      participants: ["مدعو۱", "مدعو۲", "مدعو۳", "مدعو۴"],
    },
  ];
  return (
    <div className="meetings">
      <MeetingsList meetings={props.list} />
    </div>
  );
};

export default Meetings;
