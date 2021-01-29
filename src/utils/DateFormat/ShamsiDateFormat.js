import moment from "jalali-moment";
export const ShamsiDateFormat = (value) => {
  //console.log("all", value);
  const formatDate = (datePicked) => {
    let inputDate = datePicked.split("-"); //  2020 12 28
    inputDate = inputDate.join("/");
    let dateConverted = moment(inputDate, "YYYY/MM/DD");
    dateConverted = dateConverted.locale("fa");
    dateConverted =
      dateConverted.format("ddd") + " " + dateConverted.format("YYYY/MMMM/DD");
    //console.log(dateConverted);
    return dateConverted;
  };
  const formatTime = (timePicked) => {
    //console.log(timePicked.toString().split(" ")[4])
    let timeConverted = timePicked.toString().split(" ")[4];
    return timeConverted;
  };
  let isValidDateTime = false;
  let jDate = "";
  let jTime = "";
  console.log(value)
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
