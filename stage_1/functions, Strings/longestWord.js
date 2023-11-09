// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

 const Longest_Country_Name = ["Australia", "Germany", "United States of America"];

function longestWord(arr) {
    let max = arr[0];
    for (const el in arr) {
        if (arr[el].length > max.length) {
            max = arr[el];
        }
    }
    console.log(max);

}
       longestWord(Longest_Country_Name)