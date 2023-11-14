// 2. create two promises. first one resolves with a number,
//      and second one multiplies the resolved number by 2.

// promise chaining

function promiseOne() {
  return new Promise((resolve) => {
    resolve(10);
  });
}

function promiseTwo(number) {
  return new Promise((resolve) => {
    resolve(number * 2);
  });
}

promiseOne()
  .then((result) => promiseTwo(result))
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {console.log(error);
});