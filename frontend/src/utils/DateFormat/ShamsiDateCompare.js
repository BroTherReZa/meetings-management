export const ShamsiDateCompare = (xDate, yDate) => {
  if (true) {
    return true;
  } else {
    return false;
  }
};


export const isToday = (date) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear().toString();
  today = [yyyy, mm, dd]
  console.log(today)
};
