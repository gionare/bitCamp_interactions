"use strict";
const numbersArray = [2, 3, 4, 44, 55, 66, 777, 999, 50];
const myObject = { name: "Giorgi", lastname: "Nareklishvili", year: "1993", city: "Tbilisi" };
const myObjectsArray = [
    { name: "Giorgi", 
    lastname: "Nareklishvili",
    year: "1993",
}, 
    {name: "Peter", 
    lastname: "Peterson",
}, 
    {name: "Pavle",
    lastname:"Pavlov",
},
];


// 1)დაწერეთ ფუნქცია generateRandomNumber, 
//რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად 
//და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
// The Math.random() function generates a random number between 0 (inclusive) and 1 (exclusive).
// To get a random number between min (inclusive) and max (inclusive): Math.floor(Math.random() * (max - min + 1)) + min
function generateRandomNumber(a,b){
    console.log("your average number is: " + Math.floor(Math.random() * (b - a + 1)) + a);
}
generateRandomNumber(5,10);

// 2)დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, 
//რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად 
//და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
function capitalizeWords(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeWords("first Letter should be capital"));

// 3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს 
//და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// returnkeys function for singe object 
function returnkeys(object) {
    for (const key in object) {
        console.log("example 3): " + key);
    }
}
returnkeys(myObject);

// return keys from all objects  
function returnKeys(arrayOfObjects) {
    const keysArray = [];
    for (const object of arrayOfObjects) {
        for (const key in object) {
            keysArray.push(key);
        }
    }
    console.log(keysArray);
}
returnKeys(myObjectsArray);


// 4)დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად 
//და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
function checkForPangram(string){
    const uniqueLetters = [];
    for (const char of string) {
        if (char >= 'a' && char <= 'z' && !uniqueLetters.includes(char)) {
            uniqueLetters.push(char);
        }
        return uniqueLetters.length === 26;
    } 
}
console.log("example N4: ");
console.log(checkForPangram("zxcvbnmasdfghjklqwertyuiop"));

// 5)დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს 
//ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
function unicWords(string){
    const wordsArray = string.split(" ");
    console.log(wordsArray);
    const unicWords = [];

    for (const word of wordsArray) {
        console.log([word]);
        if (!wordsArray.includes(word) && word !== "the" && word !=="a" && word !== "is") {
            unicWords.push(word);
            unicWords.filter("the", "a", "is")
        }
       console.log(unicWords);
      
    }
}
unicWords("The picture is hanging on a hanger hanger");

// 6)დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
const falsyValues = [undefined, null, NaN, 0, "", false, "2023"] 
const fileterdArray = falsyValues.filter(value => value);
console.log("6) " + fileterdArray);


// 7)დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.
function swappWordsSequence(sentence){
    const wordsArray = sentence.split(" ");
    console.log(wordsArray);
    const swappedWords = [];

    for (let i = wordsArray.length - 1; i >= 0; i--) {
        swappedWords.push(wordsArray[i]);
    }
    console.log(swappedWords);
}
swappWordsSequence("swapping words in sequence")


// 8)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
function isPalindrome(word) {     
   // Reverse the word and compare it to the original.
   const reversedWord = word.split('').reverse().join('');
 
   return word === reversedWord;
 }
 
  
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("game"));



// 9)დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი)
console.log(Math.max(...numbersArray));

// 10)დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce)
//cvlileba
function sumAllArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
const result = sumAllArray(numbersArray);
console.log(`The sum of all elements in the array is: ${result}`);