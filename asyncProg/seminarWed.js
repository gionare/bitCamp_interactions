// 1. Write a function that runs after 2 seconds when executed, counts from 1 to 10 and then fetches the github user data.

async function getGithubUser(user) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${user}`
  );
  const data = await response.json();
  return data;
}

function mainFunction() {
  let counter = 0;
  const userPromise = getGithubUser("1");

  userPromise.then(() => {
    console.log("fetching data is done");
  });

  let interval = setInterval(async () => {
    counter++;
    console.log(counter);

    if (counter >= 10) {
      clearInterval(interval);
      console.log(await userPromise);
    }
  }, 100);
}

// setTimeout(mainFunction, 100);

// 2. Write a program that fetches two different data and prints them after both of them are fetched

const fetchData1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
const fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
const fetchData3 = fetch("https://jsonplaceholder.typicode.com/todos/3");
const fetchData4 = fetch("https://jsonplaceholder.typicode.com/todos/4");
const fetchData5 = fetch("https://jsonplaceholder.typicode.com/todos/5");
const fetchData6 = fetch("https://jsonplaceholder.typicode.com/todos/6");

Promise.all([
  fetchData1,
  fetchData2,
  fetchData3,
  fetchData4,
  fetchData5,
  fetchData6,
])
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data);
  });

// 3. Write a program that fetches three different datas and prints the one which will get faster to us.

const apiURLs = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

function fetchFastestData() {
  const promises = apiURLs.map((url) =>
    fetch(url).then((response) => response.json())
  );

  return new Promise((resolve, reject) => {
    Promise.race(promises)
      .then((fastestData) => {
        resolve(fastestData);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchFastestData()
  .then((data) => {
    console.log("Fastest API response:", data);
  })
  .catch((error) => {
    console.log("Error while fetching data:", error);
  })
  .finally(() => {
    console.log("done");
  });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });