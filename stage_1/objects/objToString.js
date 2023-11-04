// // Object Serialization:
// Write a function that serializes an object into a string representation.
// The serialization should handle nested objects and arrays.
// For example, given the object { a: 1, b: { c: [2, 3] } },
// the function should return the string "{ a: 1, b: { c: [2, 3] } }".

const carInfo = {
  make: 'mazda',
  model: {
    miata: ['NB', 'ND'],
  }
};

console.log(carInfo);