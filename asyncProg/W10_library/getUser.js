let button = document.querySelector("button");
let inputs = document.querySelectorAll("input");
console.log(inputs);

button.addEventListener("click", () => {
  let IterationSuccessful = true;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      IterationSuccessful = false;
    }
  }
  if (IterationSuccessful) {
    async function addUsers() {
      try {
        const postData = await fetch("http://localhost:3000/userInWeb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputs[0].value,
            surname: inputs[1].value,
            password: inputs[2].value,
          }),
        });
        if (!postData.ok) throw Error("Failed to fetch data");
      } catch (error) {
        console.error(error.message);
      }
    }
    addUsers();
  }
});
