const grabItem = (id) => document.getElementById(id);


let myForm = grabItem('myForm');
let currentDate = new Date();
let currYear = currentDate.getFullYear();
let currMonth = currentDate.getMonth() + 1;
let currDay = currentDate.getDate();


let headingDay = document.querySelector('#heading-day');
let headingMonth = document.querySelector('#heading-month');
let headingYear = document.querySelector('#heading-year');

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
        } 
    } else if (inputMonthValue > 12){
        let error = grabItem('errorMonth');
        displayErrorMessage(error, 'Must be a valid month');
    } else if (inputMonthValue == '02'){
        if (inputDayValue > 29){
            let error = grabItem('errorDay');
            displayErrorMessage(error, 'Must be a valid day');
        }
    } else if (inputMonthValue == '01' || inputMonthValue == '03' || inputMonthValue == '05' || inputMonthValue == '07' || inputMonthValue == '08' || inputMonthValue == '10' || inputMonthValue == '12'){
        if (inputDayValue > 31){
            let error = grabItem('errorDay');
            displayErrorMessage(error, 'Must be a valid day');
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
    }
    if (inputYearValue > currYear){
        let errorYear = grabItem('errorYear');
        displayErrorMessage(errorYear, 'Must be in the past');
    }

    // calculate age
    if (inputMonthValue < currMonth){
        let years = (currYear - inputYear) - 1;
        
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

