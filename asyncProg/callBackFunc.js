// Callbacks
// const timeoutId = setTimeout(() => console.log("Tick"), 3000);
// clearTimeout(timeoutId);
// setTimeout(() => {
//   console.log("this was 3 mins delay");
// }, 4000);


// Callback Basics: 
// 1. Write a function that takes a callback as an argument 
// and calls it after a delay of 1 second. 

function firstFunc(callback){
  setTimeout(() => {
    callback();
  }, 2000);
}
function secondFunc() {
  console.log("Meore funqcia gaeshva, 2 wamis dagvianebit");
}

firstFunc(secondFunc)


// 1. ფუნქცია: პარამეტრად მიიღებს callback ფუნქციებს და
// გამოიძახებს მათ იმის მიხედვით,
// თუ რამდენად სწორედ შესრულდება რაიმე პირობა

// function equalCheck(successCallback, errorCallback) {
//   if (1 + 1 === 2) {
//     successCallback("Equals");
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

// function equals() {
//     return new Promise((resolve, reject) => {
//       if (1 + 1 === 2) {
//         resolve("Equals");
//       } else {
//         reject("Doesn't equal");
//       }
//     });
//   }
  // console.log(equals());
  
  // * When you log the result of equals(), you're actually logging the Promise object,
  //      not the result of the promise resolution.
  // * To see the result, you should use the .then and .catch methods.
  
  // equals()
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));


    // welcoming user after he inputs his name 
    // welcoming by alert -- alert("Welcome " + username)
    // input name by prompt -- prompt("PLease enter ur username. ")

    // function greetings(username) {
    //   alert("Welcome " + username);
    // }

    //  console.log(greetings(gionare));

    // greetings = (username) => {alert("Welcome " + username)};
