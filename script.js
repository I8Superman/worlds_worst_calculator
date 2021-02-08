"use strict";
console.log("Javascript is working");

window.addEventListener("DOMContentLoaded", setupCalculator);

function setupCalculator() {
    // Setup shit here
    // Add eventlisteners - triggers calculateStuff
    // Triggers clearResults
    const calcButton = document.querySelector('#calculate');
    calcButton.addEventListener('click', calculateStuff);
}

function calculateStuff() {
    // Setting variables for 
    let input1 = Number(document.querySelector('#firstnumber').value);
    let input2 = Number(document.querySelector('#secondnumber').value);
    let op = document.querySelector('#operator').value;

    let result;
    // Making the calculation based ond the operator
    // if (op === 'add') {
    //     result = input1 + input2;
    // }
    // if (op === 'sub') {
    //     result = input1 - input2;
    // }
    // if (op === 'mul') {
    //     result = input1 * input2;
    // }
    // if (op === 'div') {
    //     result = input1 / input2;
    // }

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
    }


    console.log(result);


    // Check if result should be rounded - depending on the setting of the dropdown box
    // If rounding is needed -> round result to correct # of decimals
    // Then/Else -> write result into the first number field
    // append reult to end of a list
    // scroll list to bottom 
}

function clearResults() {
    // add eventlistener to clear results node
    // When clicked, clear (remove) results from list
}