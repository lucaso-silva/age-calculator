import showResults from "./script.js";

export default function calculateDiffBetweenDates(inputs, year, month, day) {
    if (inputs == true) {
      let currentDate = new Date();
      let pastDate = new Date(year, month - 1, day);
      let diffDates = Math.floor(currentDate - pastDate);
      // console.log("difference between dates: " + diffDates);
  
      let oneDay = 1000 * 60 * 60 * 24;
      let totalDays = Math.floor(diffDates / oneDay);
      let totalMonths = Math.floor(totalDays / 30.41);
      let totalYears = Math.floor(totalMonths / 12);
      // console.log(
      //   "total years: " +
      //     totalYears +
      //     ", total months: " +
      //     totalMonths +
      //     ", total days: " +
      //     totalDays
      // );
  
      let numMonths = totalMonths - totalYears * 12;
      let numDays = Math.floor(totalDays - (365 * totalYears + numMonths * 30.5));
  
      // console.log(
      //   "num years: " +
      //     totalYears +
      //     ", num months: " +
      //     numMonths +
      //     ", num days: " +
      //     numDays
      // );
      showResults(totalYears, numMonths, numDays);
    } else {
      console.log("correct inputs");
    }
  }
  