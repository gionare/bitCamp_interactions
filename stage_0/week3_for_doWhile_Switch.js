// 1)დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.
function numbers() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);;
    }
}
console.log(numbers());

// 2)დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.




function findLongestWord(text) {
    textInArray = text.split(" "); // split by space
    console.log(textInArray);
    let longestWord = 0;

     for (let i = 0; i < textInArray.length; i++) {
        console.log(textInArray[i].length);
        console.log(typeof(+textInArray[i]));  // to find type of index elements, didn't expect string
       
        if (textInArray[i].length > longestWord) {
            longestWord = textInArray[i].length;
        }
        return longestWord;
    }
}

console.log("in you text, the longest word is: " + findLongestWord("bitcamp is awesome and fun"));

// 3)დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.

// console.log(i);
let newArr = [];
for(i=0; i<20 ;i++) {
if(i%2 === 0){  // 6%2 ===0
    newArr.push(i);
}
}
console.log(` Third example ${newArr}`);


function evenNumbers(number){
    let arr = [];
    console.log(arr);
    for (let i= 0; i < number; i++) {
        if (i%2 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}
evenNumbers(20);

// 4)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს  შეყვანილი რიცხვი.
    //with arrow function
        let printHelloArrow = (xTimes) => {
            for (let i = 0; i < xTimes; i++) {
                console.log("Hello Example 4-th");
            }
        };
        printHelloArrow(2)

function printHello(x){
    for (let i = 0; i < x; i++) {
        console.log("Hello");
    }
}
printHello(3);

// 5)დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
let sum = 0;
for (let i = 1; i < 100; i++) {
    sum = sum + i;
}
console.log("5) " + sum);

// 6)დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
function enterMonth(monthNumber){ 
    switch (monthNumber) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(" Prompted month has 31 days");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Choosen month has 30 days");
            break;
        case 2:
            onsole.log("28 or 29");
            break;
        default:
            console.log("Wrong Input");
        }
}
enterMonth(4)

// 7)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. 
// განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.
function guessNumber(randomNumber){
    const fixedNumber = 6;
    while (randomNumber != fixedNumber) {
        return console.log("Wrong, try again");
    } 
    console.log("Congrats your guess is correct, in my Number game ");

}
guessNumber(6)

// 8)დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
function marking(mark) {

switch (mark) {
    case "A":
        console.log("Excelent");
        break;
    case "B":
        console.log("less Excelent");
        break;
    case "C":
        console.log("less- excelent");
        break;
    case "D":
        console.log("2x less Excelent");
        break;
    case "E":
        console.log("3xl less Excelent");
        break;
    default:
        break;
}
}
marking("B");

// 9)დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. 
// პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. 
// სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".

function passwordCheck(password) {
    while (password !== 12345) {              
        console.log("9) Wrong password");
        break;
    }
    console.log("9) Correct password");
}
passwordCheck(12345);


function passwordCheck(password) {
    if (password === 12345) {
        console.log("Correct password");
    } else {
        console.log("Wrong password");
    }
}

passwordCheck(12345);


// 10)დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
function sumDigits(number) {
    const numberStr = number.toString(); // Convert the number to a string, to access individual character
    let sum = 0;

    for (let i = 0; i < numberStr.length; i++) {
        const digit = parseInt(numberStr[i]); // Convert the character to a number
        sum += digit;
    }
    console.log(sum);
}

sumDigits(235);

// 11)დაწერეთ ფუნქცია სახელად countBs, 
//რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად 
//და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
function countBs(string) {
    countB = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            countB += 1;
        } 
    }
    if (countB > 0) {
        console.log(`Found ${countB} "B"s`);
    } else {
        console.log("There are no B's");
    }
    
}
countBs(" Barbeque outdoor is great")