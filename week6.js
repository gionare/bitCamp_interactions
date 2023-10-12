const numbersArray = [2, 3, 4, 44, 55, 66, 777, 999, 50];


// 1)დაწერეთ ფუნქცია generateRandomNumber, 
//რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად 
//და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
// The Math.random() function generates a random number between 0 (inclusive) and 1 (exclusive).
// To get a random number between min (inclusive) and max (inclusive): Math.floor(Math.random() * (max - min + 1)) + min
function generateRandomNumber(a,b){
    console.log("your average number is: " + Math.floor(Math.random() * (b - a + 1)) + a);
}
generateRandomNumber(5,10);

// 2)დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, 
//რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად 
//და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
function capitalizeWords(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeWords("first Letter should be capital"));

// 3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს 
//და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// 4)დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად 
//და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.

// 5)დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს 
//ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".

// 6)დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.

// 7)დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.


// 8)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.

// 9)დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი)
console.log(Math.max(...numbersArray));

// 10)დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce)
//cvlileba
function sumAllArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
const result = sumAllArray(numbersArray);
console.log(`The sum of all elements in the array is: ${result}`);