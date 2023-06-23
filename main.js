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

function resetDisplay() {
  displayDay.innerText = "--";
  displayMonth.innerText = "--";
  displayYear.innerText = "--";
}
function resetWarning() {
  document
    .querySelectorAll(".js-title")
    .forEach((item) => item.classList.remove("title-red"));
  document
    .querySelectorAll(".input")
    .forEach((item) => item.classList.remove("border-red"));
  warningDay.innerText = "";
  warningMonth.innerText = "";
  warningYear.innerText = "";
}
function validateDate() {
  const limit = daysInAMonths[inputMonth.value - 1];
  const day = parseInt(inputDay.value);
  const month = parseInt(inputMonth.value);
  const year = parseInt(inputYear.value);
  const valoresAceptados = /^[0-9]+$/;

  isValid = true;

  if (day > limit || day < 0 || day >= 31) {
    warningDay.innerHTML = "Must be a valid day";
    isValid = false;
  }
  if (month > daysInAMonths.length || inputMonth.value <= 0) {
    warningMonth.innerHTML = "Must be a valid month";
    isValid = false;
  }
  if (year > currentYear) {
    warningYear.innerHTML = "Must be in the past";
    isValid = false;
  }
  if (year < 0) {
    warningYear.innerHTML = "Must be a valid year ";
    isValid = false;
  }
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
}
function showWarning() {
  if (isValid === false) {
    resetDisplay();
    document
      .querySelectorAll(".js-title")
      .forEach((item) => item.classList.add("title-red"));
    document
      .querySelectorAll(".input")
      .forEach((item) => item.classList.add("border-red"));
  } else {
    resetWarning();
    calculateAge();
  }

  console.log(isValid);
}
function showResult(ev) {
  ev.preventDefault();
  validateDate();
  showWarning();
  /*   calculateAge(); */
}
button.addEventListener("click", showResult);
