const infoYears = document.querySelector(".info-years");
const infoMonths = document.querySelector(".info-months");
const infoDays = document.querySelector(".info-days");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

export default function showResults(value) {
  let oneDay = 1000 * 60 * 60 * 24;
  let totalDays = Math.floor(value / oneDay);
  let totalMonths = Math.floor(totalDays / 30.41);
  let totalYears = Math.floor(totalMonths / 12);

  if (value > 0) {
    let numMonths = totalMonths - totalYears * 12;
    let numDays = Math.floor(
      totalDays - (365 * totalYears + numMonths * 30.41)
    );

    //console.log("total days: " + totalDays + ", total months: " + totalMonths + ", total years: " + totalYears);

    infoYears.innerHTML = totalYears;
    infoMonths.innerHTML = numMonths;
    infoDays.innerHTML = numDays;

    inputDay.value = "";
    inputMonth.value = "";
    inputYear.value = "";
  } else {
    console.log("Invalid calculation!!");
  }
}
