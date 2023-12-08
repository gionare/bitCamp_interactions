// 1. შექმენით მანქანის პროტოტიპი, რომელსაც ექნება ძირითადი მახასიათებლები
// (მაგ: ბორბლების რაოდენობა,  start მეთოდი).
// ამ პროტოტიპის გამოყენებით შექმენით რამდენიმე ბრენდის მანქანის ობიექტი სიჩქარის ფროფერთით.

// this gone be a prototype
// const Car = {
//     wheels : 4,  start () { return ("Car is starting"); },
// };

// const BMW = Object.create(Car); // wrote in BMW prototype
// BMW.speed = 250;
// const Merc = Object.create(Car);  Merc.speed = 260;
// console.log(Merc.start());

// _____________ Do the same with using class ______________
// basically this is object "factory"
class Car {
  constructor(speed, brand) {
    // defines certain properties for object
    this.brand = brand;
    this.wheel = 4; // need to point to new created object by this.
    this.speed = speed;
  }
  start() {
    return `${this.brand} is starting`;
  }
}
// new creates new obj
const BMW = new Car(260, "BMW");
const Merc = new Car(250, "Merc");
// console.log(Merc.start());

// 2. Create a set of JavaScript classes to represent different shapes (e.g., Circle, Square, and Triangle).
// Each shape class should have a method named calculateArea()
// that calculates and returns the area of that shape.
// Use polymorphism to ensure that you can call calculateArea() on any shape object, regardless of its specific class.

// father class
class Shape {
  // wouldnt have constructor { }, coz those shapes they dont have anything in common to cal their are of the shape
  // using polimorphizm
  calculateArea() {
    return Math.PI * this.radius ** 3;
  }
}
// ______ Circle ______  class will extend shape class
class Circle extends Shape {
  constructor(radius) {
    super(); // get functions with inheritance
    this.radius = radius;
  }
  calculateArea() { // override to parent class method, POLIMORPHISM
    return Math.PI * this.radius ** 2;
  }
}
// ________ Square ________
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    calculateArea() {
        return Math.pow(this.side, 2);
    }
}
// _________ Triagle ___________
class Triangle extends Shape {
    constructor (base, height) {
        super() //regardless, write super()
        this.base = base; this.height = height;
    }
    get calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

const shape = new Shape(); // shape is new instance of Shape
const circle = new Circle(10); 
const square = new Square(3); // square is a new instance of Square, & square is extended of Shape
const triangle = new Triangle(5, 4)

// console.log(circle.calculateArea());
// console.log(square.calculateArea());
// console.log(triangle.calculateArea);

