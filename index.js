//outputs
const outputYear = document.querySelector('.output-year');
const outputMonth = document.querySelector('.output-month');
const outputDay = document.querySelector('.output-day');
const submitBtn = document.querySelector('.submit-btn');

//inputs
const inputYear = document.querySelector('#year');
const inputMonth = document.querySelector('#month');
const inputDay = document.querySelector('#day');

submitBtn.addEventListener('click', calculateDate);

function calculateDate() {
  let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
  let birthdayObj = new Date(birthday);
  let ageDiffMilli = Date.now() - birthdayObj;
  let ageDate = new Date(ageDiffMilli);
  let ageYears = ageDate.getUTCFullYear() - 1970;
  let ageMonth = ageDate.getUTCMonth();
  let ageDay = ageDate.getUTCDay() - 1;
  //Display
  outputDay.textContent = ageDay;
  outputMonth.textContent = ageMonth;
  outputYear.textContent = ageYears;
}
