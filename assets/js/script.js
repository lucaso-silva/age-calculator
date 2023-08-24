import { validField, validDaysMonth } from "./validation.js";
import calculateDiffBetweenDates from "./calculation.js";

const listInputs = document.querySelectorAll(".input");
const button = document.querySelector(".btn");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

listInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validField(input);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      validField(input);
    }
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(day.value, month.value, year.value);
  let pastDay = inputDay.value;
  let pastMonth = inputMonth.value;
  let pastYear = inputYear.value;

  validDaysMonth(pastDay, pastMonth);
  calculateDiffBetweenDates(pastYear, pastMonth, pastDay);

  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});
