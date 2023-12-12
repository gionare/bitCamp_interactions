// // Countdown:
// // Write a recursive function that prints numbers from a given positive integer down to 1.

// // String Length:
// // Create a recursive function to find the length of a given string.
// // let count = 0;
// // function findLength(str) {
// //     if (str === "") {
// //         return count;
// //     }else{
// //         count++;
// //         return findLength(str.slice(0,-1));
// //     }
// // }
// // console.log(findLength('Hello world!'));

// // Even or Odd:
// // Write a recursive function to determine if a given integer is even or odd.
// function evenOrOdd(num) {
//     //  return num === 0 ? "Even" : num === 1 ? "Odd" : evenOrOdd(num - 2);
//         if (num == 0) {
//             return "Even"
//         } if (num == 1) {
//             return "Odd"
//         }
//         return evenOrOdd(num-2)
//     }
//     console.log(evenOrOdd(50))

// // Sum of Natural Numbers:
// // Write a recursive function to find the sum of the first n natural numbers.
// function sum(number) {
//     if (number <= 1) {
//         return number
//     }else{
//         return number + sum(number - 1);
//     }
// }
// console.log(sum(8));

// Factorial:
// Implement a recursive function to calculate the factorial of a non-negative integer.
//
// function factorial(int) {
//   if (int < 0) {
//     return "Input only positive";
//   }
//   if (int === 0 || int === 1) {
//     return 1;
//   }
//   return int * factorial(int - 1);
// }
// console.log(factorial(5));

// Print Array Elements:
// Write a recursive function to print all elements of an array.
// function newArray(arr) {
//   if (arr.length === 0) {
//     return;
//   }
//   console.log(arr[0]);
//   newArray(arr.slice(1));
// }
// newArray([1, 2, 3, 4, 5]);

// // Power of 2:
// // Implement a recursive function to check if a given number is a power of 2.

function powerOfTwo(num) {
    // gayofebit mivides 1 mde
  // 16%2 = 0   // n%2 = 1  araa Power of 2
  if (num === 1) {
    return "Given number is Power of 2";
  }
  if (num % 2 !== 0) {
    return "Given number is not Power of 2";
  } 
   return powerOfTwo(num / 2);
}
console.log(powerOfTwo(18));

