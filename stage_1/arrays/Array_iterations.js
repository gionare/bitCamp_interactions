// 1.Write a function that calculates the sum of all elements in an array.
// 2.Create a function that calculates the average of elements in an array.
// 3.Implement a function that returns a random element from an array.
// 4.Write a function that removes all even numbers from an array.
// 5.Write a function that generates a random password of a given length.
// 6.Write a function that converts a Roman numeral to an integer.


arrN = [ 1, 2, 3, 4, 10, 9, 8, 7, 6 ];

function calcSum(arr) {
    let sum = 0;
    let average = 0;
    let randomN = 0;
    let oddN = [];
    let randPass = [];
    let randPassString = '';

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        const randomIndex = Math.floor(Math.random() * arr.length);
        randPass.push(arr[randomIndex]);
        randPassString = randPass.join('')

        if (arr[i] % 2 !== 0) {
            oddN.push(arr[i]);
        }
        
    }
    average = sum / arr.length;
    const randomi = Math.floor(Math.random() * arr.length);
    randomN = arr[randomi];

    return {sum, average, randomN, oddN, randPassString };
} 
console.log(calcSum(arrN));



