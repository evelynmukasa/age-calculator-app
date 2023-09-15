# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](images/ScreenShot%201.png)
![](images/ScreenShot%202.png)
![](images/ScreenShot%203.png)
![](images/ScreenShot%204.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

```js
if(monthValue === 2){
        if(isLeapYear(yearValue)){
            errorMessages[0].textContent = validateInput(dayValue, 1, 29, "This field is required.", "Must be a valid day.", calculatorInput[0], calculatorLabel[0]);
        }else{
            errorMessages[0].textContent = validateInput(dayValue, 1, 28, "This field is required.", "Must be a valid day.", calculatorInput[0], calculatorLabel[0]);
        }
          
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
```

### Useful resources

- [chat GPT ](https://chat.openai.com/auth/login) - This helped me remember some notions I had forgotten after a long break from programming

## Author
- Frontend Mentor - [@evelynmukasa](https://www.frontendmentor.io/profile/@evelynmukasa)

