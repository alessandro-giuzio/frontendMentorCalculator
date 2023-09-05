const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const yearsResult = document.getElementById('years');
const monthsResult = document.getElementById('months');
const daysResult = document.getElementById('days');


function isValidDate(day, month, year) {
  const newDate = new Date(`${year}-${month}-${day}`);
  if (isNaN(newDate) || newDate.getFullYear() !== year || newDate.getMonth() + 1 !== month || newDate.getDate() !== day) {
    return false;
  }

  const lastDayOfMonth = new Date(year, month, 0).getDate();
  return day <= lastDayOfMonth;
}


function validateForm(day, month, year) {
  const currentDate = new Date();
  const maxYear = currentDate.getFullYear();

  if (!day || !month || !year) {
    return "Please enter all fields.";
  }

  if (day < 1 || day > 31) {
    return "Day must be between 1 and 31.";
  }

  if (month < 1 || month > 12) {
    return "Month must be between 1 and 12.";
  }

  if (year > maxYear) {
    return "Year cannot be in the future.";
  }

  if (!isValidDate(day, month, year)) {
    return "Invalid date.";
  }

  return "";
}



function calculateAge(){
  const birthdate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
    const today = new Date();

    const ageInMilliseconds = today - birthdate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears * 365.25 - years * 365.25 - months / 12 * 365.25));

    yearsResult.value = years;
    monthsResult.value = months;
    daysResult.value = days;
  }

  // Attach the function to the input fields' change event
  dayInput.addEventListener("input", calculateAge);
  monthInput.addEventListener("input", calculateAge);
  yearInput.addEventListener("input", calculateAge);


