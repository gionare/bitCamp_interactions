"use strict";
// // Exercise 1: Changing Text Content
const para = document.querySelector(".paragraph");
// შევცვალოთ არსებული textContent
function changeTextContent() {
  para.textContent = "Hello DOM!";
}
changeTextContent();

// // Exercise 2: Changing Styles
const newBtnColor = document.querySelector(".custom-button");

function changeBtnColor() {
  para.style.color = "green";
  newBtnColor.style.backgroundColor = "white";
}
newBtnColor.addEventListener("click", changeBtnColor);
// shegvidzlia davamatot funqcia 2e parametrad

// // Exercise 3: Creating Elements
//createElement(); createTextNode(); appendChild(); append() 
const newPara = document.createElement("p");
const node = document.createTextNode("This is new paragraph");

function newParagraph() {
  newPara.appendChild(node);
  const element = document.getElementById("myDiv");
  element.appendChild(newPara);
}
newParagraph(); //call the function

// // Exercise 4: Event Handling
let button = document.querySelector(".custom-button");

button.addEventListener("click", () => {
  alert("button Clicked!");
});

// Exercise 5: Form Validation. 
// addEventListener for form btn if it inlcudes or not any string 
let inputForm = document.querySelector("input");
console.log(inputForm.value);
let formButton = document.querySelector("#btn");
console.log(formButton);

formButton.addEventListener("click", (formButtonPreventer) => {
    formButtonPreventer.preventDefault(); //prevent to refresh on click for button
    console.log(formButtonPreventer);
  if (inputForm.value.length != 0) {
    alert("Form submitted!");
  }
});

