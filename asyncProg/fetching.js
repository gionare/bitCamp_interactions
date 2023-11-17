// 3. Write a function that runs after 2 seconds when executed,
//      counts from 1 to 10 and then fetches th github user data

// fetching user data

async function getGithubUser(user) {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    console.log(data.login);
  }
  
  function mainFunction() {
    let counter = 0;
  
    let interval = setInterval(() => {
      counter++;
      console.log(counter);
  
      if (counter >= 10) {
        clearInterval(interval);
        // Wait for the fetch operation to complete before moving forward
        getGithubUser("gionare")
          .then(() => {
            // Do something else after fetching user data if needed
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, 2000); // Changed to 2000 milliseconds (2 seconds)
  }
  
  setTimeout(mainFunction, 10);
  

  // 2. print program after fetching will be done. inc ase of 2 fetching
  //screenshot 3-4-



  // 3. fetche 3 dates . and print the one was faster
  