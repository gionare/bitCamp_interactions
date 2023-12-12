// Static Method: Create a class Calculator with a static method 
// add that takes two numbers as parameters and returns their sum.
 
class Calculator {
    // constructor (num1, num2) {
    //     this.num1 = num1;
    //     this.num2 = num2;
    // }
    static sum(num1, num2) {
        return num1 + num2;
    }
}

// const calculator = new Calculator //instance

console.log(Calculator.sum(5, 8));