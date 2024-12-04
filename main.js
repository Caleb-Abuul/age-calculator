const grabItem = (id) => document.getElementById(id);
const displayError = (element, message) =>
  (document.getElementById(element).innerText = message);
const displayAge = (element, age) =>
  (document.getElementById(element).innerText = age);

let ageForm = grabItem("myForm"),
  currentDate = new Date(),
  currentDay = currentDate.getDate() + 1,
  currentMonth = currentDate.getMonth() + 1,
  currentYear = currentDate.getFullYear(),
  isError = false;

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputDay = grabItem("bornDay").value.trim();
  let inputMonth = grabItem("bornMonth").value.trim();
  let inputYear = grabItem("bornYear").value.trim();

  isError = false;
  refreshState();

  validateMonth(inputMonth);
  validateDay(inputMonth, inputDay);
  validateYear(inputYear);
  if (isError) {
    return;
  } else {
    calculateAge(inputYear, inputMonth, inputDay);
  }
});

function refreshState() {
  displayError("errorDay", " ");
  displayError("errorMonth", " ");
  displayError("errorYear", " ");

  let inputs = ["bornDay", "bornMonth", "bornYear"];
  let headings = ["heading-day", "heading-month", "heading-year"];

  inputs.forEach((input) => {
    grabItem(input).style.border = "2px solid var(--neutral-light-grey)";
  });
  headings.forEach((heading) => {
    grabItem(heading).style.color = "var(--clr-head)";
  });

  displayAge("display-year", "- -");
  displayAge("display-month", "- -");
  displayAge("display-day", "- -");
}

function validateMonth(month) {
  if (month == 0 || month > 12) {
    displayError("errorMonth", "Must be a valid month");
    styleErrorinputs();
  }
}

function validateDay(month, day) {
  if (month == "04" || month == "06" || month == "09" || month == "11") {
    if (day > 30 || day == 0) {
      displayError("errorDay", "Must be a valid day");
      styleErrorinputs();
    }
  } else if (
    month == "01" ||
    month == "03" ||
    month == "05" ||
    month == "07" ||
    month == "08" ||
    month == "10" ||
    month == "12"
  ) {
    if (day > 31 || day == 0) {
      displayError("errorDay", "Must be a valid day");
      styleErrorinputs();
    }
  } else if (month == "02") {
    if (day > 29 || day == 0) {
      displayError("errorDay", "Must be a valid day");
      styleErrorinputs();
    }
  } else {
    if (day == 0 || day > 31) {
      displayError("errorDay", "Must be a valid day");
      styleErrorinputs();
    }
  }
}

function validateYear(year) {
  if (year > currentYear) {
    displayError("errorYear", "Year must be in the past");
    styleErrorinputs();
  }
  if (year < 1000) {
    displayError("errorYear", "Year must be in the form YYYY");
    styleErrorinputs();
  }
}

function styleErrorinputs() {
  let inputs = ["bornDay", "bornMonth", "bornYear"];
  let headings = ["heading-day", "heading-month", "heading-year"];

  inputs.forEach((input) => {
    grabItem(input).style.border = "2px solid var(--error-clr)";
  });
  headings.forEach((heading) => {
    grabItem(heading).style.color = "var(--error-clr)";
  });
  isError = true;
}

function calculateAge(year, month, day) {
  if (year == currentYear) {
    let years = currentYear - year;

    if (day > currentDay) {
      let months = currentMonth - month - 1;
      let days = 30 - (day - currentDay);
      animateAge(years, months, days);
    } else if (day < currentDay) {
      let months = currentMonth - month;
      let days = currentDay - day;
      animateAge(years, months, days);
    }
  } else if (month > currentMonth) {
    let years = currentYear - 1 - year;
    if (day > currentDay) {
      let months = 11 - (month - currentMonth);
      let days = 30 - (day - currentDay);
      animateAge(years, months, days);
    } else if (day < currentDay) {
      let months = 12 - (month - currentMonth);
      let days = currentDay - day;
      animateAge(years, months, days);
    } else {
      let months = 12 - (month - currentMonth);
      let days = currentDay - day;
      animateAge(years, months, days);
    }
  } else if (month < currentMonth) {
    let years = currentYear - year;
    if (day > currentDay) {
      let months = currentMonth - month - 1;
      let days = 30 - (day - currentDay);

      animateAge(years, months, days);
    } else if (day < currentDay) {
      let months = currentMonth - month;
      let days = currentDay - day;
      animateAge(years, months, days);
    } else {
      let months = currentMonth - month;
      let days = currentDay - day;
      animateAge(years, months, days);
    }
  } else {
    let years = currentYear - year;
    if (day > currentDay) {
      let years = currentYear - 1 - year;
      let months = 11 - (month - currentMonth);
      let days = 30 - (day - currentDay);

      animateAge(years, months, days);
    } else if (day < currentDay) {
      let months = currentMonth - month;
      let days = currentDay - day;
      animateAge(years, months, days);
    } else {
      let months = currentMonth - month;
      let days = currentDay - day;
      animateAge(years, months, days);
    }
  }
}

function animateAge(ageYear, ageMonth, ageDay) {
  let loadDay = 0,
    loadMonth = 0,
    loadYear = 0;

  let timerDay = setInterval(animateDay, 120);
  let timerMonth = setInterval(animateMonth, 80);
  let timerYear = setInterval(animateYear, 20);
  function animateDay() {
    if (loadDay == ageDay) {
      clearInterval(timerDay);
      displayAge("display-day", loadDay);
      return;
    }
    loadDay++;

    displayAge("display-day", loadDay);
  }

  function animateMonth() {
    if (loadMonth == ageMonth) {
      clearInterval(timerMonth);
      displayAge("display-month", loadMonth);
      return;
    }
    loadMonth++;
    displayAge("display-month", loadMonth);
  }
  function animateYear() {
    if (loadYear === ageYear) {
      clearInterval(timerYear);
      displayAge("display-year", loadYear);
      return;
    }
    loadYear++;
    displayAge("display-year", loadYear);
  }
}
