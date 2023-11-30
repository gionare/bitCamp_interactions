// API - A.pplication P.rograming I.nterface
// DOM is also API
// REST API - RE.presentional S.tate T.ransfer 

//fetch() - ინფორმაციის მისაღებად
//jsonplaceholder.typicode.com  - მისაღები request ი 
//fetch("jsonplaceholder.typicode.com/users"); // es damibrunebs dapirebas რაღას დროის მერე
//მნიშვნელობის მიღების შემდენ ვიყენებთ .then() მეთოდს, 
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => console.log(response));
// body: { stream: undefined } - ᲐᲥ ᲩᲐᲬᲔᲠᲘᲚᲘ ᲘᲜᲤᲝ ᲐᲠᲘᲡ ᲩᲕᲔᲜᲗᲕᲘᲡ ᲧᲕᲔᲚᲐᲖᲔ ᲛᲜᲘᲨᲕᲜᲔᲚᲝᲕᲐᲜᲘ
// ᲓᲐ ᲣᲜᲓᲐ ᲐᲛᲝᲕᲘᲦᲝᲗ ᲘᲡ - ᲛᲐᲒᲘᲡᲗᲕᲘᲡ --> .json() ᲔᲡᲔᲪ ᲓᲐᲒᲕᲘᲑᲠᲣᲜᲔᲑᲡ PROMISES, ᲠᲐᲡᲐᲪ ᲘᲡᲔᲕ .then() ᲘᲗ ᲓᲐᲕᲘᲭᲔᲠᲗ
// ᲓᲐ DATA ᲨᲘ ᲨᲔᲕᲘᲜᲐᲮᲐᲕᲗ --> .then((data) => console.log(data)) 
// თუ ერრორია დავიჭიროთ .catch() ით და მესიჯად გამოვიტანოთ error.message
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
// .then((data) => console.log(data)).catch((error) => console.log(error.message));

// იგივე მეთოდი გავაკეთოდ async ფუნქციით. დაგვჭირდება .await()
async function fetchDAta() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //await fetch() - ით ველოდებით ფეთჩინგს
// responceდან ამოვიღოთ მხოლოდ მთავარი მონაცემი და შევინახოთ data ცვლადში
    const data = await response.json();
    console.log(data);
}
fetchDAta();

// API HTTP methods : GET, POST, DELETE, PUT, PATCH 
// PATCH --> updates object, but different than POST method
// fetch() default ად არის get მეთოდი.  fetch("Protocol_DomainName_Path_EndPOint")

// *********************************************************************************
// *****************************  CREATE FAKE API MOCKUP JSON SERVER *******************************

// * install Json server - npm install -g json-server
// sudo npm install json-server - ubuntustvis
// json-server data.json ანუ ფოლდერის სახელი, რომ გავუშვად უშუალოდ
// POST method ით ვამტებბთ ახალ ობჯეკტს
// საჭიროა ობჯექტი გადავიყვანოთ ჯეისონ ობჯექტში რაც არის სტრინგისეულად ჩაწერილი ობჯექტი 
    // const obj = {
    //     name: "zuka",
    //     age: 22,
    // };
    // const jsonObj = JSON.stringify(obj);
    // console.log(jsonObj);

// ********************** STATUS CODES  ***************************
    // Informational responses (100 – 199)
    // Successful responses (200 – 299)
    // Redirection messages (300 – 399)
    // Client error responses (400 – 499)
    // Server error responses (500 – 599)
    