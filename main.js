"use strict";

const inputDay = document.querySelector(".js-input-day");
const inputMonth = document.querySelector(".js-input-month");
const inputYear = document.querySelector(".js-input-year");

const warningDay = document.querySelector(".js-warning-day");
const warningMonth = document.querySelector(".js-warning-month");
const warningYear = document.querySelector(".js-warning-year");

const displayDay = document.querySelector(".js-display-day");
const displayMonth = document.querySelector(".js-display-month");
const displayYear = document.querySelector(".js-display-year");

const button = document.querySelector(".js-btn-calculate");

const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
const daysInAMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let isValid = true;

function showWarning() {
  if (!isValid) {
    document
      .querySelectorAll(".js-title")
      .forEach((item) => item.classList.add("title-red"));
  }
}
function ResetDisplay() {
  displayDay.innerText = "--";
  displayMonth.innerText = "--";
  displayYear.innerText = "--";
}

function validateDate() {
  const limit = daysInAMonths[inputMonth.value - 1];
  const day = parseInt(inputDay.value);
  const month = parseInt(inputMonth.value);
  const year = parseInt(inputYear.value);

  if (day > limit || day < 0 || day >= 31) {
    warningDay.innerHTML = "Must be a valid day";
    !isValid;
  }
  if (month > daysInAMonths.length || inputMonth.value <= 0) {
    warningMonth.innerHTML = "Must be a valid month";
    !isValid;
  }
  if (year > currentYear) {
    warningYear.innerHTML = "Must be in the past";
    !isValid;
  }
  if (year < 0) {
    warningYear.innerHTML = "Must be a valid year ";
    !isValid;
  }

  isValid;
}
function calculateAge() {
  if (inputDay.value > currentDay) {
    currentDay = currentDay + daysInAMonths[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (inputMonth.value > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  displayDay.innerHTML = currentDay - inputDay.value;
  displayMonth.innerHTML = currentMonth - inputMonth.value;
  displayYear.innerHTML = currentYear - inputYear.value;
  console.log("NO MISIELA");
}

function showResult(ev) {
  ev.preventDefault();
  validateDate();
  showWarning();
  calculateAge();
}
button.addEventListener("click", showResult);
