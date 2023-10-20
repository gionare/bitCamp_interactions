// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'

//steps to take
// Create a function capitalWord(text)
// Split and store the text into an words array using the space separator
// Initialize an empty array capitalizedWords to store the capitalized words.
// Iterate through each word in the words array using a for...of loop:
// Accessing the first character of the word with word[0].
// Converting the first character to uppercase using the toUpperCase() method.
// Appending/მიმაგრება the capitalized first character to the rest of the word, by using word.slice(1).
// Push the resulting capitalizedWord into the capitalizedWords array.
// join the capitalizedWords array into a single string using the space character as the separator.
// Return the capitalized string.

function capitalWord(text) {
  const words = text.split(" ");
  console.log(words);
  const capitalWords = [];

  for (const word of words) {
    const capitalWord = word[0].toUpperCase() + word.slice(1);
    capitalWords.push(capitalWord);
  }
  return capitalWords.join(" ");
}
console.log(capitalWord("the quick brown fox"));

// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'

//solution
// Create a function alphabetizeString that takes a string as input.
// Convert the input string into an array of characters .split('')
// Use the sort method to sort the characters in the array in alphabetical order.
// After sorting, use the join method to concatenate the sorted characters back into a string.
// Return the alphabetized string.

function aToZ(str) {
  console.log(str);
  return str.split("").sort().join("");
}
console.log(aToZ("webmaster"));

// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// Algorithm:
// Create a function, combinations, that takes the input string as a parameter.
// Determine the total number of combinations, which is equal to 2 to the power of the string length (2^n).
// Initialize an array to store the results.

function combinations(inputString) {
  let tempArr = [];
  let resultArr = [];

  for (let i = 0; i < inputString.length; i++) {
    tempArr = [inputString[i]];
    let index = 0;
    while (resultArr[index]) {
      tempArr.push("" + resultArr[index] + inputString[i]);
      index++;
    }

    resultArr = resultArr.concat(tempArr);
  }

  return resultArr;
}

// Example usage:
console.log(combinations("dog"));

// better code and simplier to solve the problem
// use debuging
//using array.prototype.slice();
let example = "protocol";
console.log("Result should be oto : " + example.slice(2, 5));

function combinations(str) {
  const results = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      results.push(str.slice(i, j));
    }
  }
  return results;
}
console.log(combinations("dog"));

// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'

function unicWord(str) {

  for (let i = 0; i < str.length; i++) {
    let isRepeated = false;  
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isRepeated = true;
        break;
      } 
    }
    if (!isRepeated){  //after passing 2 for circles, check the status of isRepeated is true or false
      console.log("non repeated letter is : ");
      return str[i];
    }
  }
  return nulll; // return null if there is no repeated elements
}
console.log(unicWord("abacddbec"));
