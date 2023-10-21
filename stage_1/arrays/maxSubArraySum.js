// Find the Maximum Subarray Sum: 
// Write a function that takes an array of integers as input 
// and finds the contiguous subarray within the array that has the largest sum. 
// Return the sum of that subarray. 
// For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], 
// the function should return 6, which corresponds to the sum of the subarray [4, -1, 2, 1].

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubarraySum(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let maxEndingHere = arr[0];  // curently max subarray sum (on the current iteration)
    let maxSoFar = arr[0]; // on current iteration max subarray sum found
  
    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }

  console.log(maxSubarraySum(array)); // Output: 6