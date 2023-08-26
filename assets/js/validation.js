import showResults from "./showResults.js";

const allInputsField = document.querySelectorAll(".input");
const inputDayField = document.querySelector("#day");
const inputMonthField = document.querySelector("#month");
const errorMsg = document.querySelector(".error-msg");

let currentDate = new Date();
console.log(currentDate);

export default function validInputs(day, month, year) {
  console.log(day, month, year);
  let pastDate = new Date(year, month - 1, day);
  let diffDates = Math.floor(currentDate - pastDate);
  console.log(diffDates);

  if (diffDates < 0) {
    allInputsField.forEach((input) => input.classList.add("input-error"));
    errorMsg.textContent = "Input a date in the past!";
    errorMsg.style.display = "block";
  } else {
    if (day < 1 || day > 31) {
      console.log("Input correct day!");
      inputDayField.classList.add("input-error");
      errorMsg.textContent = "Input a correct day ";
      errorMsg.style.display = "block";
      return;
    } else if (month == 2 && day > 29) {
      inputDayField.classList.add("input-error");
      inputMonthField.classList.add("input-error");
      errorMsg.textContent = "February may not have more than 29 days";
      errorMsg.style.display = "block";
      return;
    } else if (
      (month == 4 && day > 30) ||
      (month == 6 && day > 30) ||
      (month == 9 && day > 30) ||
      (month == 11 && day > 30)
    ) {
      console.log("Incorrect days or month");
      inputDayField.classList.add("input-error");
      inputMonthField.classList.add("input-error");
      errorMsg.textContent =
        "Please correct your info, incorrect day or month.";
      errorMsg.style.display = "block";
      return;
    } else if (month < 1 || month > 12) {
      console.log("There are only 12 months!");
      inputMonthField.classList.add("input-error");
      errorMsg.textContent = "Correct the info about month";
      errorMsg.style.display = "block";
      return;
    }
    allInputsField.forEach((input) => input.classList.remove("input-error"));
    errorMsg.textContent = "";
    errorMsg.style.display = "none";
    showResults(diffDates);
  }
}
