const listInputs = document.querySelectorAll(".input");
const button = document.querySelector(".btn")

function validField(field) {
  const id = field.id;

  if (id == "day") {
    const day = field.value;
    if (day < 1 || day > 31) {
        field.classList.add("input-error");
      console.log("input a valid day");
    } else {
        field.classList.remove("input-error")
      console.log("ok, the day was ", day);
    }
  } else if (id == "month") {
    const month = field.value;
    if (month < 1 || month > 12) {
        field.classList.add("input-error");
      console.log("input a valid month");
    } else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11 && day == 31) {
      field.classList.add("input-error");
      console.log("this month can't have 31 days");
    } else {
        field.classList.remove("input-error")
      console.log("ok, the month was ", month);
    }
  } else if (id == "year") {
    const year = field.value;
    if (year > 2023) {
        field.classList.add("input-error");
      console.log("input a valid year");
    } else {
        field.classList.remove("input-error")
      console.log("ok, the year was ", year);
    }
  }
}

function calculateDiffBetweenDates(year, month, day) {
  let currentDate = new Date();
  let pastDate = new Date(year, month - 1, day);
  let diffDates = Math.floor(currentDate - pastDate);
  console.log("difference between dates: " + diffDates)

  let oneDay = 1000 * 60 * 60 * 24;
  let totalDays = Math.floor(diffDates/oneDay);
  let totalMonths = Math.floor(totalDays/30.41);
  let totalYears = Math.floor(totalMonths/12)
  console.log("total years: " + totalYears + ", total months: " + totalMonths + ", total days: " + totalDays)

  let numMonths = totalMonths - (totalYears * 12)
  let numDays = Math.floor(totalDays - ((365 * totalYears) + (numMonths *30.5)))

  console.log("num years: " + totalYears + ", num months: " + numMonths + ", num days: " + numDays)

  showResults(totalYears, numMonths, numDays)
}

function showResults(years, months, days) {
  const infoYears = document.querySelector(".info-years");
  const infoMonths = document.querySelector(".info-months");
  const infoDays = document.querySelector(".info-days");

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

button.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(day.value, month.value, year.value)
    let pastDay = day.value;
    let pastMonth = month.value;
    let pastYear  = year.value;
    
    calculateDiffBetweenDates(pastYear, pastMonth, pastDay);
})
