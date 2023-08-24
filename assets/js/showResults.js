const infoYears = document.querySelector(".info-years");
const infoMonths = document.querySelector(".info-months");
const infoDays = document.querySelector(".info-days");

export default function showResults(years, months, days) {
    infoYears.innerHTML = years;
    infoMonths.innerHTML = months;
    infoDays.innerHTML = days;
  }