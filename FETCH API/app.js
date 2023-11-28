// async function fetchData() {
//   const response = await fetch("http://localhost:3000/people");
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();

// ***********************  POST method  *****************************
// fetch("http://localhost:3000/people", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({  //უნდა გაიგზავნოს JSON ფორმატში 
//         name:"zuka",
//         age: 22,
//     }),
// });
// ეს ყველაფერი ჩავსვათ ფუნქციასი და თუ რამე ერრორია ეგ ფუნქციონალიც გავუწეროთ 
// დაგვჭირდება try , if da .catch() da await 

async function postData() {
    try {
        const response = await fetch("http://localhost:3000/people", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                name: "Zurabi",
                age: 222,
            },
        });
        if (response.status <200 || response.status > 299 ) {
            throw new Error("Failed to post data");
        }
    } catch (error) {
        console.log(error.message);
    }
}
postData();

// *********************** PUT method * უკვე არსებულის ჩანაცვლება ***************************

