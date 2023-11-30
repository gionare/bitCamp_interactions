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
// endpointze უნდა გავგზავნო request ი 

// async function putData () {
//         const response = await fetch ("http://localhost:3000/people/6", {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/JSON",
//             },
//             body: JSON.stringify({
//                 name: "put method- Boria",
//                 age: 8,
//             }),
//         });
//         console.log(response);
//     }
//     putData()

// *********************** DELETE method * უკვე არსებულის წაშლა ***************************

// async function deleteData(){
//     const response = await fetch ("http://localhost:3000/people/13", {
//         method: "DELETE",
// });
//     console.log(response);
// }
// deleteData()
