const grabItem = (id) => document.getElementById(id);
let ageForm = grabItem('myForm');
const displayError = (element, message) => document.getElementById(element).innerText = message;

const displayAge = (element, age) => document.getElementById(element).innerText = age;

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();
let isError = false;


ageForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let inputDay = grabItem('bornDay').value.trim();
    let inputMonth = grabItem('bornMonth').value.trim();
    let inputYear = grabItem('bornYear').value.trim();

    isError = false;
    refreshState();

    validateMonth(inputMonth);
    validateDay(inputMonth, inputDay);
    validateYear(inputYear);
    if (isError){
        return;
    } else {
        calculateAge(inputYear, inputMonth, inputDay);
    }
})

function refreshState(){
    displayError('errorDay', ' ');
    displayError('errorMonth', ' ');
    displayError('errorYear', ' ');

    let inputs = ['bornDay', 'bornMonth', 'bornYear'];
    let headings = ['heading-day', 'heading-month', 'heading-year'];

    inputs.forEach(input =>{
        grabItem(input).style.border = '2px solid var(--neutral-light-grey)';
    })
    headings.forEach(heading =>{
        grabItem(heading).style.color = 'var(--clr-head)';
    })
    
    displayAge('display-year', '- -');
    displayAge('display-month', '- -');
    displayAge('display-day', '- -');
}


function validateMonth(month){
    if (month == 0 || month > 12){
        displayError('errorMonth', 'Must be a valid month');
        styleErrorinputs();
    }
}

function validateDay(month, day){
    if (month == '04' || month == '06' || month == '09' || month == '11'){
        if (day > 30 || day == 0){
            displayError('errorDay', 'Must be a valid day');
            styleErrorinputs();
        }
        
    } else if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12'){
        if (day > 31 || day == 0){
            displayError('errorDay', 'Must be a valid day');
            styleErrorinputs();
        }
    } else if (month == '02'){
        if (day > 29 || day == 0){
            displayError('errorDay', 'Must be a valid day');
            styleErrorinputs();
        }
    } else {
        if (day == 0 || day > 31){
            displayError('errorDay', 'Must be a valid day');
            styleErrorinputs();
        }
    }
}

function validateYear(year){
    if (year > currentYear){
        displayError('errorYear', 'Year must be in the past');
        styleErrorinputs();
    }
    if (year < 1000){
        displayError('errorYear', 'Year must be in the form YYYY');
        styleErrorinputs();
    }
}

function styleErrorinputs(){
    let inputs = ['bornDay', 'bornMonth', 'bornYear'];
    let headings = ['heading-day', 'heading-month', 'heading-year'];

    inputs.forEach(input =>{
        grabItem(input).style.border = '2px solid var(--error-clr)';
    })
    headings.forEach(heading =>{
        grabItem(heading).style.color = 'var(--error-clr)';
    })
    isError = true;
}

function calculateAge(year, month, day){
    if (month > currentMonth){
        let years = (currentYear - 1) - year;
        if (day > currentDay){
            let months = 11 - (month - currentMonth);
            let days = 30 - (day - currentDay);

            showAge(years, months, days);
        } else if (day < currentDay){
            let months = 12 - currentMonth;
            let days = currentDay - day;
            showAge(years, months, days);
        } else if (day == currentDay){
            let months = 12 - currentMonth;
            let days = currentDay - day;
            showAge(years, months, days);
        }
    } else if (month < currentMonth){
        let years = currentYear - year;
        if (day > currentDay){
            let months = 11 - (month - currentMonth);
            let days = 30 - (day - currentDay);

            showAge(years, months, days);
        } else if (day < currentDay){
            let months = 12 - currentMonth;
            let days = currentDay - day;
            showAge(years, months, days);
        } else if (day == currentDay){
            let months = 12 - currentMonth;
            let days = currentDay - day;
            showAge(years, months, days);
        }
    } else if (month == currentMonth){
        let years = currentYear - year;
        if (day > currentDay){
            let years = (currentYear - 1) - year;
            let months = 11 - (month - currentMonth);
            let days = 30 - (day - currentDay);

            showAge(years, months, days);
        } else if (day < currentDay){
            let months = currentMonth - month;
            let days = currentDay - day;
            showAge(years, months, days);
        } else if (day == currentDay){
            let months = month - currentMonth;
            let days = currentDay - day;
            showAge(years, months, days);
        }
    }
}

function showAge(year, month, day){
    displayAge('display-year', year);
    displayAge('display-month', month);
    displayAge('display-day', day);
}





