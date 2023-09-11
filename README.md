# Age calculator

https://github.com/lucaso-silva/age-calculator/assets/97140968/0e75895b-242e-4347-a2e3-19211dce1ce4

### See in the [link](https://lucaso-silva.github.io/age-calculator/)

## Overview
This project was developed with the intent to practice JavaScript programming.

It was based on a challenge from the website [Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub) 

> Status: Concluded ✔️

---

### Objectives
- View an age in years, months, and days after submitting a valid date through the form ✅
- Receive validation errors if:
  - Any field is empty when the form is submitted ✅
  - The day number is not between 1-31 ✅
  - The month number is not between 1-12 ✅
  - The year is in the future ✅
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April) ✅
- View the optimal layout for the interface depending on their device's screen size ✅
- See hover and focus states for all interactive elements on the page ✅
- **Bonus**: See the age numbers animate to their final number when the form is submitted ⚠️

## Built with
- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- Flexbox
- JavaScript

## What I learned 💡

In this project, I practiced using the JavaScript `Date` object.

It was necessary to create two variables, one to assign the current date and the other variable  to assign the date inputted.

```JavaScript
let currentDate = new Date();

function validInputs(day, month, year) {
  let pastDate = new Date(year, month - 1, day);
  let diffDates = Math.floor(currentDate - pastDate);
///(...)
}
```

The difference between the two periods is expressed in milliseconds, so they were necessary to convert the result into the number of years, months, and days.

```JavaScript
function showResults(value) {
  let oneDay = 1000 * 60 * 60 * 24;
  let totalDays = Math.floor(value / oneDay);
  let totalMonths = Math.floor(totalDays / 30.41);
  let totalYears = Math.floor(totalMonths / 12);

  if (value > 0) {
    let numMonths = totalMonths - totalYears * 12;
    let numDays = Math.floor(
      totalDays - (365 * totalYears + numMonths * 30.41)
    );
```
 
---
### 🛠️ Continued development
The next steps will be focused on : 
- See the age numbers animating to their final result
- Turn the design as similar as possible to the model
---

### Useful resources
- [MDN - Position](https://developer.mozilla.org/pt-BR/docs/Web/CSS/position)
- [W3 Schools - JavaScript Date Reference](https://www.w3schools.com/jsref/jsref_obj_date.asp)
- [W3 Schools - JavaScript Get Date Methods](https://www.w3schools.com/js/js_date_methods.asp)
