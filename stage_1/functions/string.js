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
console.log(capitalWord('the quick brown fox'));