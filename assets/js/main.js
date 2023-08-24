import validInputs from "./validation.js";
import showResults from "./showResults.js";

const button = document.querySelector(".btn");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let day = inputDay.value;
  let month = inputMonth.value;
  let year = inputYear.value;

  showResults(validInputs(day, month, year));

  inputDay.value = '';
  inputMonth.value = '';
  inputYear.value = '';
});
