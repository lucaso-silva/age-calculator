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

function calculateDifferenceYears(year) {
  const date = new Date();
  const currentYear = date.getFullYear();
  
  console.log("The current year is: " + currentYear);

  const differenceInYears = currentYear - year;
  console.log("Difference in years: " + differenceInYears)
}

function calculateDifferenceMonth(month) {
  const date = new Date();
  let currentMonth = date.getMonth() + 1;
  let differenceInMonths;

  console.log("The current month is: " + currentMonth);
  
  if(currentMonth > month){
    differenceInMonths = currentMonth - month
  } else {
    differenceInMonths = month - currentMonth;
  }

  console.log("Difference in months: " + differenceInMonths);
}

function calculateDifferenceDays(day) {
  const date = new Date();
  const currentDay = date.getDate();

  console.log("The current day is: " + currentDay);
  
  // if() {

  // }
  // const differenceInDays = currentDay - day
  // console.log(differenceInDays);
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
    calculateDifferenceYears(year.value);
    calculateDifferenceMonth(month.value);
    calculateDifferenceDays(day.value);
})
