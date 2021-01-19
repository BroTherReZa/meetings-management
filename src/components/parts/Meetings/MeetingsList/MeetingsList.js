import React from "react";
import MeetingItem from "../MeetingItem/MeetingItem";

import "./MeetingsList.css";

const MeetingsList = () => {
  return (
    <ul className="meetings-list">
      <MeetingItem
        date="دوشنبه ۱۳ بهمن"
        time="ساعت ۱۰:۳۰"
        room="مجازی"
        roomAddress="لینک جلسه"
        subject="مدیریت پروژه"
        minute="شرح اقدامات و برنامه ریزی"
        participants={["محمدی", "کشاورزی", "امیری"]}
      />
      <MeetingItem
        date="شنبه ۱۸ بهمن"
        time="ساعت ۱۲:۳۰"
        room="سالن تلاش"
        roomAddress="طبقه ۵"
        subject="پیگیری پروژه"
        minute="گزارش پیشرفت پروژه و مدیریت و برنامه ریزی"
        participants={["نوری", "ناظری", "امیری"]}
      />
    </ul>
  );
};

export default MeetingsList;
