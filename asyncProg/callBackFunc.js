// Callbacks
setTimeout(() => console.log("Tick"), 3000);
clearTimeout();
setTimeout(() => {
  console.log("this was 3 mins delay");
}, 4000);


// 1. ფუნქცია: პარამეტრად მიიღებს callback ფუნქციებს და
// გამოიძახებს მათ იმის მიხედვით,
// თუ რამდენად სწორედ შესრულდება რაიმე პირობა

// function equalCheck(successCalback, errorCallback) {
//   if (1 + 1 === 2) {
//     successCalback("Equals");
//   } else {
//     errorCallback("Doesn't equal");
//   }
// }

// equalCheck(
//     (message) =>{
//         console.log("Success:", message);
//     }
//     ,
//   (message) => {
//     console.log("Failed:", message);
//   }
// );

// promise version

function equals() {
    return new Promise((resolve, reject) => {
      if (1 + 1 === 2) {
        resolve("Equals");
      } else {
        reject("Doesn't equal");
      }
    });
  }
  // console.log(equals());
  
  // * When you log the result of equals(), you're actually logging the Promise object,
  //      not the result of the promise resolution.
  // * To see the result, you should use the .then and .catch methods.
  
  equals()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));