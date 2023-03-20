export default function validateDate(date) {
  if (date.length !== 10) {
    return "Date format incorrect";
  } else if (date[4] !== "-" && date[7] !== "-") {
    return "Date format incorrect";
  } else {
    let year = +date.substring(0, 4);
    let month = +date.substring(5, 7);
    let day = +date.substring(8, 10);
    if (
      typeof year !== "number" &&
      typeof day !== "number" &&
      typeof month !== "number"
    ) {
      return "Enter a number for year, day, and month";
    } else if (
      year >= 2023 &&
      month >= 1 &&
      month <= 12 &&
      day >= 1 &&
      day <= 31
    ) {
      return true;
    } else {
      return "Not a valid date";
    }
  }
}
