const listInputs = document.querySelectorAll(".input");
const button = document.querySelector(".btn");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const infoYears = document.querySelector(".info-years");
const infoMonths = document.querySelector(".info-months");
const infoDays = document.querySelector(".info-days");
let inputsValid = false

function validField(field) {
  const id = field.id;

  if (id == "day") {
    const day = field.value;
    if (day < 1 || day > 31) {
      field.classList.add("input-error");
      console.log("input a valid day");
    } else {
      field.classList.remove("input-error");
      console.log("ok, the day was ", day);
    }
  } else if (id == "month") {
    const month = field.value;
    if (month < 1 || month > 12) {
      field.classList.add("input-error");
      console.log("input a valid month");
    } else {
      field.classList.remove("input-error");
      console.log("ok, the month was ", month);
    }
  } else if (id == "year") {
    const year = field.value;
    if (year > 2023) {
      field.classList.add("input-error");
      console.log("input a valid year");
    } else {
      field.classList.remove("input-error");
      console.log("ok, the year was ", year);
    }
  }
}

function validDaysMonth(day, month) {
  if (
    month == 4 && day == 31 ||
    month == 6 && day == 31 ||
    month == 9 && day == 31 ||
    month == 11 && day == 31 ) {
    console.log("correct number days of the month");
    inputDay.classList.add("input-error");
    inputMonth.classList.add("input-error");

    inputsValid = false;
  } else if (month == 2 && day >= 30) {
    console.log("correct number days of the month");
    inputDay.classList.add("input-error");
    inputMonth.classList.add("input-error");
    inputsValid = false
  }
  else {
    inputDay.classList.remove("input-error");
    inputMonth.classList.remove("input-error");
    inputsValid = true;
  }
}

function calculateDiffBetweenDates(inputs, year, month, day) {
  if(inputs == true) {
    let currentDate = new Date();
    let pastDate = new Date(year, month - 1, day);
    let diffDates = Math.floor(currentDate - pastDate);
    console.log("difference between dates: " + diffDates);
  
    let oneDay = 1000 * 60 * 60 * 24;
    let totalDays = Math.floor(diffDates / oneDay);
    let totalMonths = Math.floor(totalDays / 30.41);
    let totalYears = Math.floor(totalMonths / 12);
    console.log(
      "total years: " +
        totalYears +
        ", total months: " +
        totalMonths +
        ", total days: " +
        totalDays
    );
  
    let numMonths = totalMonths - totalYears * 12;
    let numDays = Math.floor(totalDays - (365 * totalYears + numMonths * 30.5));
  
    console.log(
      "num years: " +
        totalYears +
        ", num months: " +
        numMonths +
        ", num days: " +
        numDays
    );
    showResults(totalYears, numMonths, numDays);
  } else {
    console.log("correct inputs")
  }
  

  
}

function showResults(years, months, days) {
  infoYears.innerHTML = years;
  infoMonths.innerHTML = months;
  infoDays.innerHTML = days;
}

listInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validField(input);
    console.log(input);
  });

  input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      validField(input);
      console.log(input);
    }
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(day.value, month.value, year.value);
  let pastDay = day.value;
  let pastMonth = month.value;
  let pastYear = year.value;

  validDaysMonth(pastDay, pastMonth)
  calculateDiffBetweenDates(inputsValid, pastYear, pastMonth, pastDay);
});
