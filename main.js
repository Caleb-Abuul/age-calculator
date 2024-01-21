const grabItem = (id) => document.getElementById(id);
const displayItem = (element, message) => element.innerText = message;
    

let myForm = grabItem('myForm');
let currentDate = new Date();
let currYear = currentDate.getFullYear();
let currMonth = currentDate.getMonth() + 1;
console.log(currMonth);
let currDay = currentDate.getDate();


let headingDay = document.querySelector('#heading-day');
let headingMonth = document.querySelector('#heading-month');
let headingYear = document.querySelector('#heading-year');

let displayYear = grabItem('display-year'), displayMonth = grabItem('display-month'), displayDay = grabItem('display-day');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    

    validateForm();
})

function validateForm(){
    validateDay();
}

function validateDay(){
    let inputDay = grabItem('bornDay'), inputMonth = grabItem('bornMonth'), inputYear = grabItem('bornYear');

    let inputMonthValue = inputMonth.value.trim();
    let inputDayValue = inputDay.value.trim();
    let inputYearValue = inputYear.value.trim();

    if (inputMonthValue == '04' || inputMonthValue == '06' || inputMonthValue == '09' || inputMonthValue == '11'){
        if (inputDayValue > 30){
            let error = document.getElementById('errorDay');
            displayErrorMessage(error, 'Must be a valid day');
            return;
        } 
    } else if (inputMonthValue > 12){
        let error = grabItem('errorMonth');
        displayErrorMessage(error, 'Must be a valid month');
        return;
    } else if (inputMonthValue == '02'){
        if (inputDayValue > 29){
            let error = grabItem('errorDay');
            displayErrorMessage(error, 'Must be a valid day');
            return;
        }
    } else if (inputMonthValue == '01' || inputMonthValue == '03' || inputMonthValue == '05' || inputMonthValue == '07' || inputMonthValue == '08' || inputMonthValue == '10' || inputMonthValue == '12'){
        if (inputDayValue > 31){
            let error = grabItem('errorDay');
            displayErrorMessage(error, 'Must be a valid day');
            return;
        }
    } else {
        // let errorDay, errorMonth, errorYear = [grabItem('errorDay'), grabItem('errorMonth'), grabItem('errorYear')];

        let errorDay = grabItem('errorDay');
        let errorMonth = grabItem('errorMonth');
        let errorYear = grabItem('errorYear');

        let msg = 'This field is required'
        displayErrorMessage(errorDay, msg);
        displayErrorMessage(errorMonth, msg);
        displayErrorMessage(errorYear, msg);

        return;
    }
    if (inputYearValue > currYear){
        let errorYear = grabItem('errorYear');
        displayErrorMessage(errorYear, 'Must be in the past');
        return;
    }

    // calculate age
    if (currMonth < inputMonthValue){
        if (inputDayValue < currDay){
            let years = (currYear - 1) - inputYearValue;
            let months = 12 - (inputMonthValue - currMonth);
            let days = currDay - inputDayValue;

            console.log(years, months, days);
            console.log('hello');

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        } else if (inputDayValue > currDay){
            let years = (currYear - 1) - inputYearValue;
            let months = 11 - (inputMonthValue - currMonth);
            let days = inputDayValue - currDay;

            console.log(years, months, days);
            console.log('hello');

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        } else {
            let years = (currYear - 1) - inputYearValue;
            let months = 12 - (inputMonthValue - currMonth);
            let days = currDay - inputDayValue;

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        }
        
        
    } else if (currMonth > inputMonthValue){
        let years = currYear - inputYearValue;
        if (inputDayValue < currDay){
            
            let months = (inputMonthValue - 1) - currMonth;
            let days = currDay - inputDayValue;

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        } else if (inputDayValue > currDay){
            let months = inputMonthValue - currMonth;
            let days = inputDayValue - currDay;

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        } else {
            let months = inputMonthValue - currMonth;
            let days = inputDayValue - currDay;

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        }
        
    } else{
        
        if (currDay < inputDayValue){
            let years = (currYear - 1) - inputYearValue;
            let months = 11 - (currMonth - inputMonthValue);
            let days = 30 - (inputDayValue - currDay);

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        } else if (currDay > inputDayValue){
            let years = currYear - inputYearValue;
            let months = currMonth - inputMonthValue;
            let days = currDay - inputDayValue;

            displayItem(displayYear, years);
            displayItem(displayMonth, months);
            displayItem(displayDay, days);
        }
    }
}

function displayErrorMessage(error, message){
    error.innerHTML = `<i>${message}</i>`;
    document.getElementById('bornDay').style.border = '2px solid var(--error-clr)';
    document.getElementById('bornMonth').style.border = '2px solid var(--error-clr)';
    document.getElementById('bornYear').style.border = '2px solid var(--error-clr)';
    headingDay.style.color = 'var(--error-clr)';
    headingMonth.style.color = 'var(--error-clr)';
    headingYear.style.color = 'var(--error-clr)';
}

