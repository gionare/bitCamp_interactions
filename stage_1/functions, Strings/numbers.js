// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
const sampleArray = [1, 2, 3, 4, 5];

// steps to take 
// Create a function - findSecondLowestAndGreatest(array) as its parameter.
// Create a copy of the original array - sortedArray using the slice method to avoid modifying the original array.
// Sort the copied array in ascending order using the .sort() method
// Extract the second and 1before last element (index 1, -2) 
// Call the findSecondLowestAndGreatest function with the input array.


function secLowestAndGreatest(array) {
    
    const sortedArray = array.slice().sort();
    console.log(sortedArray);

    const secLowest = sortedArray[1];
    const secHighest = sortedArray[sortedArray.length -2];
    return {secHighest, secLowest}; // put return into the object

    
}
console.log(secLowestAndGreatest(sampleArray));