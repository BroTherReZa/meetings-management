import React from "react";
import Input from "../../../UI/Input/Input";
import Button from '../../../UI/Button/Button'

import "./SearchParticipants.css";

const SearchParticipants = (props) => {
  return (
    <div className="participants-search">
      <form>
      <Input
        key="id"
        inputType="input"
        elementConfig={{
          type: "text",
          placeholder: "نام / نام خانوادگی / شماره تماس / ایمیل / پست سازمانی",
        }}
        value=""
        invalid={false}
        used={true}
        // change={searchParticipantsHandler}
      />
      <Button btnType="form">جستجو</Button>
      </form>
    </div>
  );
};

export default SearchParticipants;
