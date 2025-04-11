export const isLeapYear = year => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInMonth = (month, year) => {
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

export const validateDay = (day, month, year) => {
  const maxDays = getDaysInMonth(month, year);
  return day > 0 && day <= maxDays;
};
export const validateMonth = month => month > 0 && month <= 12;
export const validateYear = (year, currentYear) =>
  year >= 1900 && year <= currentYear;

export const isDateValid = (
  day,
  month,
  year,
  dayInput,
  monthInput,
  yearInput,
  currentYear,
) => {
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

  if (!validateYear(year, currentYear)) {
    yearInput.classList.add('card__input--error');
    isValid = false;
  }
  return isValid;
};
