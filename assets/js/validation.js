const allInputsField = document.querySelectorAll(".input");

let currentDate = new Date();
console.log(currentDate);

export default function validInputs(day, month, year) {
  console.log(day, month, year);
  let pastDate = new Date(year, month - 1, day);
  let diffDates = Math.floor(currentDate - pastDate);
  console.log(diffDates);

  if(diffDates < 0) {
    console.log("Input a date in the past!")
    allInputsField.forEach(input => input.classList.add("input-error"))
  } else {
    if (day < 1 || day > 31) {
        console.log("Input correct day!");
      } else if (month == 2 && day > 29) {
        console.log("February may not have more than 29 days");
      } else if (
        (month == 4 && day > 30) ||
        (month == 6 && day > 30) ||
        (month == 9 && day > 30) ||
        (month == 11 && day > 30)
      ) {
        console.log("Incorrect days or month");
      } else if (month < 1 || month > 12) {
        console.log("There are only 12 months!")
      }
      allInputsField.forEach(input => input.classList.remove("input-error"))
      return diffDates;
  }
}