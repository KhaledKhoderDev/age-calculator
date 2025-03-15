const dayInput = document.querySelector(".card__input[name='day']");
const monthInput = document.querySelector(".card__input[name='month']");
const yearInput = document.querySelector(".card__input[name='year']");
const inputElements = document.querySelectorAll('.card__input');
const resultElement = document.querySelector('.card__resultValue');
const submitButton = document.querySelector('.card__button');
const currentYear = new Date().getFullYear();

const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDaysInMonth = (month, year) => {
  const daysPerMonth = [
    0,
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  return daysPerMonth[month] || 0;
};

const validateDay = (day, month, year) => {
  const maxDays = getDaysInMonth(month, year);
  return day > 0 && day <= maxDays;
};
const validateMonth = month => month > 0 && month <= 12;
const validateYear = year => year >= 1900 && year <= currentYear;

const isDateValid = (day, month, year) => {
  let isValid = true;

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  [yearInput, monthInput, dayInput].forEach(input =>
    input.classList.remove('card__input--error'),
  );

  if (birthDate > today) {
    if (year > today.getFullYear()) {
      yearInput.classList.add('card__input--error');
    } else if (month > today.getMonth() + 1) {
      monthInput.classList.add('card__input--error');
    } else {
      dayInput.classList.add('card__input--error');
    }
    isValid = false;
  }

  if (!validateDay(day, month, year)) {
    dayInput.classList.add('card__input--error');
    isValid = false;
  }

  if (!validateMonth(month)) {
    monthInput.classList.add('card__input--error');
    isValid = false;
  }

  if (!validateYear(year)) {
    yearInput.classList.add('card__input--error');
    isValid = false;
  }
  return isValid;
};

const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
};

const onClickHandler = () => {
  const year = parseInt(yearInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const day = parseInt(dayInput.value, 10);
  if (!isDateValid(day, month, year)) {
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
