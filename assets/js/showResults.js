const infoYears = document.querySelector(".info-years");
const infoMonths = document.querySelector(".info-months");
const infoDays = document.querySelector(".info-days");

export default function showResults(value) {
  let oneDay = 1000 * 60 * 60 * 24;
  let totalDays = Math.floor(value / oneDay);
  let totalMonths = Math.floor(totalDays / 30.41);
  let totalYears = Math.floor(totalMonths / 12);

  if(value > 0) {
    let numMonths = totalMonths - (totalYears * 12);
  let numDays = Math.floor(totalDays - (365 * totalYears + numMonths * 30.41));

  console.log("total days: " + totalDays + ", total months: " + totalMonths + ", total years: " + totalYears);


    infoYears.innerHTML = totalYears;
    infoMonths.innerHTML = numMonths;
    infoDays.innerHTML = numDays;
  } else {
    console.log("Invalid calculation!!")
  }
  
  }