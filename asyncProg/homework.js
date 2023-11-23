// წასაკითხი

//     წაიკითხეთ თავი XI - Asynchronous Programming

// სავარჯიშოები

//  1.  Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.

function firstFunc(callback) {
setTimeout( () => { console.log("1. Done! after 3000 miliseconds"); } ,3000)
}
firstFunc()

//  2.   Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.
// A promise is simply an object that we create that will produce a single value some time in the future. 
// 1) create or return promise with resolve & reject
// 2) resolve should be saccess and should have setTimeoOut( functionRef, delay )

const delayedPromise = new Prmise((resolve, reject) => {
    setTimeout( () => {resolve("2. Success Mesage for you, delayed 2000milisecond")}, 2000 );
});
delayedPromise.then( (message) => {console.log(message)} ).catch( (error) => {console.error(error)} );

//  3.   Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.
// Create a Function to Return Delayed Promises:
// Create a Promise Chain:
// Run the Code:

//  4.   Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
   
//  5.   Error Handling: Modify the previous example to include error handling using try/catch.

//  6.   Fetch API: Use the Fetch API to make a simple GET request to a mock API and log the response.

//  7.   Async Function with Fetch: Create an asynchronous function that uses the Fetch API to get data from an API and log it.



// ******************  shavifurceli  *************************
// object constructor
// class car{
//     constructor(color, door, tires){
//         this.color=color;
//         this.door=door;
//         this.tires=tires;
//     }
// }
// let myCar = new car('balck', '6', 'deflated');
// console.log(myCar);





