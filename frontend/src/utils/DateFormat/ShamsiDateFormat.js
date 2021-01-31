import moment from "jalali-moment";
export const ShamsiDateShow = (inputDate) => {
  inputDate = inputDate.join("/");
    let dateConverted = moment(inputDate, "YYYY/MM/DD");
    dateConverted = dateConverted.locale("fa");
    dateConverted =
      dateConverted.format("ddd") + " " + dateConverted.format("DD MMMM YYYY");
    return dateConverted;
}

export const ShamsiDateFormat = (value) => {
  const formatDate = (datePicked) => {
    let inputDate = datePicked.split("-"); //  2020 12 28
    return inputDate;
  };
  const formatTime = (timePicked) => {
    let timeConverted = timePicked.toString().split(" ")[4];
    timeConverted = "ساعت "+ timeConverted
    return timeConverted;
  };
  let isValidDateTime = false;
  let jDate = "";
  let jTime = "";
  //console.log(value)
  if (value["_i"]) {
    jDate = formatDate(value["_i"].slice(0, 10));
    jTime = formatTime(value["_d"]);
    isValidDateTime = true;
    return { jDate, jTime, isValidDateTime };
  } else {
    console.log("inputDate invalid!");
    return { jDate, jTime, isValidDateTime };
  }
};
