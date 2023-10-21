// Rotate Array: 
// Write a function that rotates an array of n elements to the right by k steps. 
// For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3, 
// the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].



// function rotateArr(array, k) {
//     let newArray = [];

//     for (let index = 0; index < array.length; index++) {
//         newArray = array.push([i] + 3);
        
//     }
//     return newArray;
// }
// console.log(rotateArr, k);


const array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotateArrayRight(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than the array length
  
    reverseArray(arr, 0, arr.length - 1);  // Reverse the entire array
  
    reverseArray(arr, 0, k - 1); // Reverse the first k elements
  
    reverseArray(arr, k, arr.length - 1); // Reverse the remaining elements
    
    return arr;
  }
  
  function reverseArray(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  console.log(rotateArrayRight(array, k));