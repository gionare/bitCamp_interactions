// 1)შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.
const Person = {
  name: "Giorgi",
  year: "1993",
  city: "Tbilisi",
}
console.log(Person);

// 2)დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში 
// სახელის values.
Person.sayHello = function() {
  console.log("Hello " + Person.name);
};
Person.sayHello();

// 3) წაშალეთ ასაკის property.
//delete Person.year; //to delete whole key
Person.year = undefined;
delete Person.year;


// 4)დაამატეთ ობიექტში job.
Person.job = "Developer";
console.log(Person);

// 5)დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.
let jobLength = 0;
Person.jobLength = function () {
  return Person.job.length
}
console.log(Person.jobLength());

// 6)ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// print number of properties
let numberOfKeys = Object.keys(Person).length;
console.log("6) NUmber of keys in Person Object is : " + numberOfKeys);

// 7)გაარკვიეთ ,აქვს თუარა ობიექტს gender property ,თუ არაქვს ,მაშინ შექმენით მეთოდი .

// 8)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.

// 9)გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value. 
