import { isDateValid } from './dateValidation.js';
import { calculateAge } from './ageCalculation.js';
const dayInput = document.querySelector(".card__input[name='day']");
const monthInput = document.querySelector(".card__input[name='month']");
const yearInput = document.querySelector(".card__input[name='year']");
const inputElements = document.querySelectorAll('.card__input');
const resultElement = document.querySelector('.card__resultValue');
const submitButton = document.querySelector('.card__button');
const currentYear = new Date().getFullYear();

const onClickHandler = () => {
  const year = parseInt(yearInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const day = parseInt(dayInput.value, 10);
  if (
    !isDateValid(day, month, year, dayInput, monthInput, yearInput, currentYear)
  ) {
    resultElement.textContent = '--';
    return;
  }
  resultElement.textContent = calculateAge(year, month, day);
};

inputElements.forEach(input => {
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitButton.focus();
      onClickHandler();
    }
  });
});

inputElements.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value < 1) input.value = '';
  });
});

submitButton.addEventListener('click', onClickHandler);
