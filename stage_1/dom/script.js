'use strict';
// // Exercise 1: Changing Text Content
// // <p> element. 
//changes text content of the <p> element to "Hello, DOM!".


// შევცვალოთ არსებული textContent
function changeTextContent() {
    const para = document.querySelector('.paragraph'); 
    para.textContent = 'Hello DOM!';
}



// // Exercise 2: Changing Styles
// <button> element. 
// changes the background color of the <button> to red and the text color to white.

function changeBtnColor(){
    const para = document.querySelector('.paragraph');
    const newBtnColor = document.querySelector('.custom-button');

    para.style.color = 'green';
    newBtnColor.style.backgroundColor = 'red';
}

// // Exercise 3: Creating Elements
// // Create an HTML page with an empty <div> element. 
// Write a JavaScript function that, when called, creates a new <p> element 
// with the text content "New paragraph" and appends it as a child to the <div>.

function newParagraph() {
    

    const newPara = document.createElement("p");
    const node = document.createTextNode("This is new paragraph");
    newPara.appendChild(node);

    const element = document.getElementById("myDiv");
    element.appendChild(newPara);

}
newParagraph() //call the function


// // Exercise 4: Event Handling
// // Create an HTML page with a <button> element. 
// Write a JavaScript function that, when the button is clicked, 
// displays an alert with the message "Button clicked!".

// // Exercise 5: Form Validation
// // Create an HTML page with a <form> element containing an input field and a submit button. 
// Write a JavaScript function that, when the form is submitted, validates the input field. 
// If the input is empty, display an error message next to the input field. 
// If the input is not empty, display an alert with the message "Form submitted!".
