// Object Deep Comparison:
// Write a function that compares two objects deeply and returns true if they are equal, and false otherwise.
// The function should handle nested objects and arrays.
// For example, given the objects { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }, the function should return true.

// 1) i need  2 objects
// 2) function to return, true or false, if objects are equal or not
// 3) handle nested objects and arrays.

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

function objComparison(obj1, obj2) {
    //   make sure when they arent equal, if following... 
  if (typeof obj1 !== typeof obj2 && Object.keys(obj1).length !== Object.keys(obj2).length) {  
    return false;
  }
    //objects keys need to have new name to eterate on them  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // iterate on first obj keys, and compare each obj1 key to obj2 keys named keys2
  for (const key of keys1) {
    if (!keys2.includes(key)) {
        return false;
    }
    // check objcomparizon for obj1 arrays and obj2 arrays is not happening then make it false
    if (!objComparison(obj1[key], obj2[key])) {
        return false;
      }
  }
  return true;
}

console.log(objComparison(obj1, obj2));
