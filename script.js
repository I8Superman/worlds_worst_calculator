"use strict";
console.log("Javascript is working");

window.addEventListener("DOMContentLoaded", setupCalculator);

function setupCalculator() {
    const calcButton = document.querySelector('#calculate');
    calcButton.addEventListener('click', calculateStuff);
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearResults);
}

function calculateStuff() {
    // Setting variables for input fields and converting the strings to numbers
    let input1 = Number(document.querySelector('#firstnumber').value);
    let input2 = Number(document.querySelector('#secondnumber').value);
    let op = document.querySelector('#operator').value;

    let result;

    // Making the calculation based ond the operator, using classic if statement
    /*
    if (op === 'add') {
        result = input1 + input2;
    }
    if (op === 'sub') {
        result = input1 - input2;
    }
    if (op === 'mul') {
        result = input1 * input2;
    }
    if (op === 'div') {
        result = input1 / input2;
    } */
    // Or, using the brand spanking new switch statement:
    switch (op) {
        case 'add':
            result = input1 + input2;
            break;
        case 'sub':
            result = input1 - input2;
            break;
        case 'mul':
            result = input1 * input2;
            break;
        case 'div':
            result = input1 / input2;
            break;
        default:
            result = 'Something went wrong!';
            break;
    }
    console.log(result);


    // Round the result if the box is checked
    const checkBox = document.querySelector('#doround');
    const decimals = document.querySelector('#decimals');

    if (checkBox.checked == true) {
        console.log('rounding is checked');
        result = result.toFixed(decimals.value);
        console.log('This is the rounded result ' + result);
    }
    // Making the result appear in the #result list
    const resList = document.querySelector('#results');
    let newResult = document.createElement('li');
    // Appends a list element to #results
    resList.appendChild(newResult);
    // Appends a text node to the li element (supposed to be better than .innerHTML and textContent)
    newResult.appendChild(document.createTextNode(result));
    // Scroll to the bottom of the list
    results.lastChild.scrollIntoView();
    // Copy the result into the #firstnumber field
    const firstField = document.querySelector('#firstnumber');
    firstField.value = result;
}

function clearResults() {
    console.log('clear clicked');
    const resultList = document.querySelector('#results');
    console.log(resultList);
    resultList.innerHTML = "";
}