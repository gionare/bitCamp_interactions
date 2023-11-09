// created 3 global arrays for exercising
const fruits = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];
const numbers = [22, 1, 55555, 4444, , 88, 333]; 
const numbers2 = [9, 88, 777, 6666, 55555];
console.log(fruits, numbers, numbers2);

// 1)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
let sum = 0;
for (const number of numbers) {
  sum += number; //sum = sum + number
}
console.log("The sum of all numbers: " + sum);

// 2)დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
let average = 0;
for (const number of numbers) {
  average = sum / numbers.length;
}
console.log("The average of array: " + average);

// 3)დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// 12)დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

console.log(numbers.sort());
let combinedArrays = numbers.concat(numbers2);
console.log(combinedArrays.sort());

// 4)დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
const maxNumber = Math.max(...numbers); // using Math.max( array ) function
console.log(...numbers); //spread operator to create a shallow copy of an array or merge multiple arrays into a new array.
console.log("4) " + maxNumber);

// 5)დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
const minNumber = Math.min(...numbers);
console.log("5) " + minNumber);

// 6)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
const findElement = fruits.find((element) => element === "cherry");
console.log(findElement);
//ჩანაწერი functionისთვის იგივეა რაც
// const findElements = (element) => {
//     return element === "cherry";
// }
// შემიძლია find() ში პარამეტრად findElements ფუნქციაც გამოვიძახო

// 7)დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// Write a program to remove an element from an array.
function includes(arr, element ){


for (let number of arr) {
  if (number === element) {
    return true
  }
}
}

const removeElement = 2;
numbers.splice(removeElement, 1); //Remove 1 element starting from the specified index
console.log(numbers);

// 8)დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// Write a program to count the number of occurrences of a specific element in an array.
// 9)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
const dublicateCheck = () => {
  let hasDublicate = false; // Initialize a flag to track duplicates
    let sumOfEven = 0;

  for (const i of numbers) {
    if (i % 2 === 0) {
        sumOfEven += i;
    } else {
        console.log("9) numbers array contains Odd numbers also");
    }
    for (const j of numbers2) {
      if (i === j) {
        hasDublicate = true;
        console.log("8) There is a dublicate");
        break; // Exit the inner loop when a duplicate is found
      }
    }
  }
  if (!hasDublicate) {
    console.log("8) There is no dublicate");
  }
  console.log("9) ლუწი რიცხვების ჯამია: " + sumOfEven);
};
dublicateCheck();


// 10)დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
largestN = 0;
secLargestN = 0;

function findSecondLargestN() {
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largestN) {  // შევადაროთ უდიდესს, მანამ სანამ უდიდესი აღარ გაიზრდება 
    secLargestN = largestN;    // უდიდესს გაუტოლდეს
    largestN = numbers[i];     // უდიდესი გაზარდოს
  } else if (numbers[i] > secLargestN && numbers[i] !== largestN) {   
    secLargestN = numbers[i];
  }
}
  console.log("10) Second largest N: " + secLargestN);
}
findSecondLargestN();

// let sorted = arr.sort( (a, b) => b - a )

// 11)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
//if(arr1.includes(arr2{i}))  ინქლუდეს მეთოდი არ აკვირდება ინდექსაციას..  

function compareArrays(4rray2) {
  
if (numbers.length !== numbers2.length) {  //if array lenght is qeual
  return false;
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] !== numbers2[i]) {
    return false;
  }
}

return true; // if all above wouldn't work
}
console.log(compareArrays(numbers, numbers2));

// 13)დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
console.log(fruits.sort());

// 14)დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
const commonElements = [];
for (const element of numbers) {
  if (numbers2.includes(element)) {
    commonElements.push(element);
  } 
}
console.log("14) " + commonElements);

// 15)შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე
const car = {
  brand: "Porsche",
  model: "911 GT3",
  year: "2020",
}
console.log(car);

// 16)დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, 
// რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
console.log(car.start = "car is starting!");
console.log(car);

// 17)შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
const Person = {
  name: "Giorgi",
  year: "1993",
  city: "Tbilisi",
}
console.log(Person.name);
// 18)დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.
Person.job = "Driver";
console.log(Person);

// 3

// Follow

// You do not have permission to send messages in this channel.

// function keyValue(obj){
// }
// same function but allow function
const keyValue = (obj) => {
  console.log(Object.keys(Object));
  return Object.values(obj), Object.keys(obj);
} 

let object = {
  name: "temo",
  age: 18
}

console.log(keyValue(object));                                                                                                                        

// .slice() example
let word = "Hello world";
let updatedW = word.slice(1,5);
console.log(updatedW);

//,splice(საიდან დაიწყოს, რამდენი ელემენტი წაიშალოს, რა დაიმატოს) method example
let arr5 = [1,2,3,4,5,];
let updatedW2 = arr5.splice(0,3,"Hელლო ვორდ");
console.log(updatedW2);