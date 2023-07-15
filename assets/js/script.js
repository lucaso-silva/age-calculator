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
      console.log("ok ", day);
    }
  } else if (id == "month") {
    const month = field.value;
    if (month < 1 || month > 12) {
        field.classList.add("input-error");
      console.log("input a valid month");
    } else {
        field.classList.remove("input-error")
      console.log("ok ", month);
    }
  } else if (id == "year") {
    const year = field.value;
    if (year > 2023) {
        field.classList.add("input-error");
      console.log("input a valid year");
    } else {
        field.classList.remove("input-error")
      console.log("ok ", year);
    }
  }
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
})
