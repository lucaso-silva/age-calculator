import { validField, validDaysMonth } from "./validation.js";
import calculateDiffBetweenDates from "./calculation.js";

const listInputs = document.querySelectorAll(".input");
const button = document.querySelector(".btn");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const infoYears = document.querySelector(".info-years");
const infoMonths = document.querySelector(".info-months");
const infoDays = document.querySelector(".info-days");
let inputsValid = false;

export default function showResults(years, months, days) {
  infoYears.innerHTML = years;
  infoMonths.innerHTML = months;
  infoDays.innerHTML = days;
}

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
  let pastDay = day.value;
  let pastMonth = month.value;
  let pastYear = year.value;

  validDaysMonth(pastDay, pastMonth);
  calculateDiffBetweenDates(inputsValid, pastYear, pastMonth, pastDay);

  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});
