'use strict';
// // Exercise 1: Changing Text Content
// // Create an HTML page with a <p> element. 
// Write a JavaScript function that, when called, 
//changes the text content of the <p> element to "Hello, DOM!".
console.log(document.querySelector('.bitcamp').textContent); //დავლოგოთ არსებული textContent
// შევცვალოთ არსებული textContent
function changeTextContent(text) {
document.querySelector('.bitcamp').textContent = 
'adjusted text containing for query Selector' ;
}
changeTextContent()



// // Exercise 2: Changing Styles
// // Create an HTML page with a <button> element. 
// Write a JavaScript function that, when called, 
// changes the background color of the <button> to red and the text color to white.
function changeBtnColor(color) {
    const button = document.querySelector('.custom-button');
    button.style.backgroundColor = color ;
}
changeBtnColor('red');

// // Exercise 3: Creating Elements
// // Create an HTML page with an empty <div> element. 
// Write a JavaScript function that, when called, creates a new <p> element 
// with the text content "New paragraph" and appends it as a child to the <div>.

// // Exercise 4: Event Handling
// // Create an HTML page with a <button> element. 
// Write a JavaScript function that, when the button is clicked, 
// displays an alert with the message "Button clicked!".

// // Exercise 5: Form Validation
// // Create an HTML page with a <form> element containing an input field and a submit button. 
// Write a JavaScript function that, when the form is submitted, validates the input field. 
// If the input is empty, display an error message next to the input field. 
// If the input is not empty, display an alert with the message "Form submitted!".
