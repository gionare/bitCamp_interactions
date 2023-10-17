// 1)დავწეროთ ფუნქცია,რომელიც დაპრინტავს "hello world"
function sayHello(){
    console.log("Hello World");
}
sayHello();

// 2)დავწეროთ ფუნქცია,რომელიც გამოიტანს ორი რიცხვის ჯამს.
function add(num1, num2){
        return num1 + num2;
     }
     //let sum = add(Math.random(), Math.random());
     let sum = add(2,6);
     console.log(sum);

// 3)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს ტექსტს და აბრუნებს ტექსტის სიგრძეს.
function convert(string){
    console.log(string.length);
}
convert("example");

// 4)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს 2 სიტყვას და აბრუნებს შეწებებულ სიტყვას.
function gather(string1, string2){
    console.log(string1 + string2);
}
gather("Bit", "Camp");

// 5)დავწეროთ ფუნქცია, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს ამ რიცხვს,დაბრუნებული რიცხვი მოვათავსოთ ცვლადში და დავპრინტოთ.
function returnN(i){
    console.log(i);
}
returnN(2);

// 6)დავწეროთ ფუნქცია, რომელიც არგუმენტად იღებს სიტყვას და აბრუნებს ამ სიტყვას  დიდი ასოებით.
function uppercase(string){
    console.log(string.toUpperCase());
}
uppercase("letters to upper case");

// 7)დავწეროთ ფუნქცია ,რომელიც არგუმენტად იღებს სიტყვას და აბრუნებს ამ სიტყვას  პატარა  ასოებით.
function lowerCase(string){
console.log(string.toLowerCase());
}
lowerCase("Small LeTTers");

// 8)დავწეროთ ფუნქცია,რომელსაც არგუმენტად ექნება 2 რიცხვი და დააბრუნებს ამ ორი რიცხვის გაყოფის ნაშთს.
function diff(num1, num2){
    console.log(num1 % num2);
}
diff(15, 4);

// 9)დავწეროთ ფუნქცია,რომელსაც არგუმენტად ექნება სახელი და დააბრუნებს "hello (saxeli)"
function helloName(name){
    console.log("Hello " + name);
}
helloName("Sandro")

// 10)დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს  2 რიცხვს და აბრუნებს ორი რიცხვის სხვაობას.
function diff(num1, num2){
    console.log(num1 - num2);
}
diff(15, 4);

// 11)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
function oddOrEven(num){
    if (num % 2 === 0){
    console.log(num + " is Even");
    } else{
        console.log(`${num} is Odd`); //VScode suggested to use `${ }
}
}
oddOrEven(10);

// 12)დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
function lowerOrHigher(num){
    if (num >= 0){
        console.log(num + " is Higher than Zero");
    } else if(num = 0) {
        console.log(num + " is Zero");
    }
     else{ 
        console.log(num + " is less than Zero");
    }
}
lowerOrHigher(7);

// 13)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.
function differenceDivision(num1, num2){
    if (num1 % num2 === 0){
    console.log(num1 + " & " + num2 + " numbers can be devided");
    }else{
        console.log(num1 + " & " + num2 + " can not be devided without difference");
    }
}
differenceDivision(15, 4)

// 14)დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
function emptyString(string){
    if(string.length === 0){
        console.log("string is empty");
    } else{
        console.log("String is not empty");
    }
}
emptyString("")

// 15)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
function containing(string) {
    if (string.includes("bitCamp")) {
        console.log(string + ": contains bitCamp");
    } else {
        console.log(string + ": Doesn't contains bitCamp");
    }
}
containing("bitCamp is cool");

// 16)დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
function minNum(num1, num2) {
    if ((num1 - num2) > 0) {
        console.log(num1 + " is greater than " + num2);
    } else {
        console.log(num2 + " is greater than " + num1);
    }
}
minNum(8, 4)