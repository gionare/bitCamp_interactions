// Find Missing Number: 
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
// find the missing number. 
// For example, given the array [3, 0, 1], the function should return 2.

const array = [3, 0, 1];

function findMissingN (array){
    const n = array.length;
    const expectedSUm = (n * (n + 1)/2);
    //console.log(expectedSUm);
    const actualSum = array.reduce((sum, num) => sum + num, 0); //შეეკითხე .reduce( , 0)
    console.log("actualSum = " + actualSum);
    return expectedSUm - actualSum;
}
console.log(findMissingN(array));
