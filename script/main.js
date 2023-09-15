const birthDay = document.getElementById('day');
const birthMonth = document.getElementById('month');
const birthYear = document.getElementById('year');
const errorMessages = document.querySelectorAll('.error');
const theForm = document.getElementById('theForm');
const calculatorInput = theForm.querySelectorAll('input');
const calculatorLabel = theForm.querySelectorAll('label');
const calculateBtn = document.getElementById('submitButton');

const actualDate = new Date();
const actualDay = actualDate.getDate();
const actualMonth = actualDate.getMonth() + 1;
const actualYear = actualDate.getFullYear();

calculatorInput.forEach(input=>{
    input.addEventListener("input", function (e) {
        
        this.value = this.value.replace(/[^0-9]/g, "");
        
      });
 })

calculateBtn.addEventListener('click', calculateAge);

function calculateAge() {
    
    const dayValue = parseInt(birthDay.value);
    const monthValue = parseInt(birthMonth.value);
    const yearValue = parseInt(birthYear.value);

    errorMessages.forEach(errorMessage => errorMessage.textContent="");

    errorMessages[0].textContent=validateInput(dayValue, 1, 31, "This field required.", "Must be a valid day.", calculatorInput[0], calculatorLabel[0]);
    errorMessages[1].textContent=validateInput(monthValue, 1, 12, "This field required.", "Must be a valid month.", calculatorInput[1], calculatorLabel[1]);
    errorMessages[2].textContent=validateInput(yearValue, 0, actualYear, "This field required.", "Must be a valid year.", calculatorInput[2], calculatorLabel[2]);

    if ([4, 6, 9, 11].includes(monthValue) && dayValue > 30) {
        
        errorMessages[0].textContent = validateInput(dayValue, 1, 30, "This field is required.", "Must be a valid day.", calculatorInput[0], calculatorLabel[0]);
    }

    if(monthValue === 2){
        if(isLeapYear(yearValue)){
            errorMessages[0].textContent = validateInput(dayValue, 1, 29, "This field is required.", "Must be a valid day.", calculatorInput[0], calculatorLabel[0]);
        }else{
            errorMessages[0].textContent = validateInput(dayValue, 1, 28, "This field is required.", "Must be a valid day.", calculatorInput[0], calculatorLabel[0]);
        }
          
    }

    if (yearValue > actualYear || (yearValue >= actualYear && monthValue > actualMonth) || (monthValue == actualMonth && dayValue > actualDay)) {
        errorMessages[2].textContent = validateInput(yearValue, 0, actualYear, "This field required.", "Must be in the past.", calculatorInput[2], calculatorLabel[2]);
    }

    const errors =[];

    errorMessages.forEach(errorMessage=> errors.push(errorMessage.textContent));
    
    if (errors.every(error => error === "")) {
        const {years,months,days}=calculateAgeFromDate(dayValue,monthValue,yearValue);
        displayAge(years,months,days);

    } else {
        displayAge("--","--","--");
    }
}

function validateInput(value, minValue, maxValue, requiredMessage, invalidMessage, input, label) {
    if ( isNaN(value) || value === "") {
        input.classList.add('error-border');
        label.classList.add('error-label');
        return requiredMessage;
    } else if (value < minValue || value > maxValue) {
        input.classList.add('error-border');
        label.classList.add('error-label');
        return invalidMessage;
    } else {
        input.classList.remove('error-border');
        label.classList.remove('error-label');
        return "";
    }
}

function calculateAgeFromDate(day,month,year){
    let days = actualDay - day;
    let months = actualMonth - month;
    let years = actualYear - year;

    if (actualDay < day) {
        days = (actualDay + 30) - day;
        months = (actualMonth - 1) - month;
    }
    if (actualMonth < month) {
        months = (actualMonth + 12) - month;
        years = (actualYear - 1) - year;
    }
   return {years,months,days}
}

 function displayAge(years,months,days){
    document.getElementById('resultDays').textContent = days.toString();
    document.getElementById('resultMonths').textContent = months.toString();
    document.getElementById('resultYears').textContent = years.toString();
 }

 function isLeapYear(year) {
    // Check if it's a century year (ending in '00')
    if (year % 100 === 0) {
      // It's a century year; check if it's divisible by 400
      return year % 400 === 0;
    } else {
      // It's not a century year; check if it's divisible by 4
      return year % 4 === 0;
    }
  }



