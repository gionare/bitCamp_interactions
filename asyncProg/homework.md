// წასაკითხი

//     წაიკითხეთ თავი XI - Asynchronous Programming

// სავარჯიშოები

//  1.  Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.

function firstFunc(callback) {
setTimeout( () => { console.log("Hello World!"); } ,3000)
}
firstFunc()

//  2.   Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.

// let myPromise = new Promise(resolve, reject);

// myPromise.then();

//  3.   Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.

//  4.   Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
   
//  5.   Error Handling: Modify the previous example to include error handling using try/catch.

//  6.   Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.

//  7.   Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.



// shavifurceli

const Obj = {
    color: "green",
    door: "4",
    tires: "inflated",
}
console.log(Obj)

let newObj = new Obj("balck", "6", "deflated");

console.log(Obj);