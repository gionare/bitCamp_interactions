// Class Method: Create a class ArrayHelper
// with a method reverseArray that takes an array and returns its reversed version.

// original arr gone be --> [1, 2, 3, 4, 5];
// reverseArray method
// reversedArr

class ArrayHelper {
  reverseArray(arr) {
    //Why everseArr method should be static?
    return arr.reverse();
  }
}
// instance
const arrayHelperInstance = new ArrayHelper();

const arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);

const reversedArr = arrayHelperInstance.reverseArray(arr);
console.log("Reversed Array:", reversedArr);