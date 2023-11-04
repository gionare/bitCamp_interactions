// // Object Transformation:
//  Write a function that takes an array of objects and transforms them into a single object.
//  The transformation should use a specific property of each object as the key and another property as the value.
//  For example, given the array [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
//  and using the id property as the key and the name property as the value,
//  the function should return { 1: 'Alice', 2: 'Bob' }.

// array of objects
// new variable for single object
// gonA HAVE KEYS AND VALUES
// transform

const person = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function transformArrToObject(array, keyProperty, ValueProperty) {    // ?????ეს ჩანაწერი არ მესმის კარგად.
  let transformedObj = {};

  for (let obj of array) {
    if (obj[keyProperty] !== undefined) {
      //ახალ ობჯეცტიც ილუპება ობჯ პარალელურად და თავის კეის მნიშვნელობად ითვისებს არაის ვალუე მნიშვნელობას
      transformedObj[obj[keyProperty]] = obj[ValueProperty];
      // console.log(transformedObj);
    }
  }

  return transformedObj;
}

console.log(transformArrToObject(person, "id", "name"));
