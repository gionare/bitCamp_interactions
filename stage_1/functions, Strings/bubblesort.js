// Write a JavaScript function to apply the Bubble Sort algorithm.

const sampleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// 5 steps to make process easy 
const bubbleSort = (arr) => {
//1) let swapped - to track the swapping of element in the current iteration.
let swapped; 
//2) do while loop to itterate through the array until it's sorrted
//3) at the start of each iteration set the boolean variable to false 
do {
    swapped = false;
    //4) Use a "for" loop to compare adjacent elements. 
    for (let i = arr.length - 1; i >= 0 ; i--) {
        if (arr[i] > arr[i - 1]) {  //Swap them if they are not in the correct order, 
            let temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            swapped = true;  //set the boolean variable to true if any element is swapped.
        }
    }
} while (swapped);  
// 5) Repeat the loop until there are no more elements to swap in the current iteration.
return arr;
};
console.log(bubbleSort(sampleArray));