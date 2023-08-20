const button = document.querySelector(".btn");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");

function validField(field) {
    const id = field.id;
  
    if (id == "day") {
      const day = field.value;
      if (day < 1 || day > 31) {
        field.classList.add("input-error");
        button.setAttribute("disabled", true);
        // console.log("input a valid day");
      } else {
        field.classList.remove("input-error");
        button.disabled = false;
        // console.log("ok, the day was ", day);
      }
    } else if (id == "month") {
      const month = field.value;
      if (month < 1 || month > 12) {
        field.classList.add("input-error");
        button.setAttribute("disabled", true);
        // console.log("input a valid month");
      } else {
        field.classList.remove("input-error");
        button.disabled = false;
        // console.log("ok, the month was ", month);
      }
    } else if (id == "year") {
      const year = field.value;
      if (year > 2023) {
        field.classList.add("input-error");
        button.setAttribute("disabled", true);
        // console.log("input a valid year");
      } else {
        field.classList.remove("input-error");
        button.disabled = false;
        // console.log("ok, the year was ", year);
      }
    }
  }

function validDaysMonth(day, month) {
    if (
      (month == 4 && day == 31) ||
      (month == 6 && day == 31) ||
      (month == 9 && day == 31) ||
      (month == 11 && day == 31)
    ) {
      console.log("correct number days of the month");
      inputDay.classList.add("input-error");
      inputMonth.classList.add("input-error");
  
      inputsValid = false;
    } else if (month == 2 && day >= 30) {
      console.log("correct number days of the month");
      inputDay.classList.add("input-error");
      inputMonth.classList.add("input-error");
      inputsValid = false;
    } else {
      inputDay.classList.remove("input-error");
      inputMonth.classList.remove("input-error");
      inputsValid = true;
    }
  }

export { validField, validDaysMonth }