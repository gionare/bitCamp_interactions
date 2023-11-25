// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// *****************  other option to do it  ********************** 
// function alphabetPosition(text) {
//     var result = "";
//     for (var i = 0; i < text.length; i++){
//       var code = text.toUpperCase().charCodeAt(i)
//       if (code > 64 && code < 91) result += (code - 64) + " ";
//     }
//     return result.slice(0, result.length-1);
//   }

// ******************* submitted & adjusted code ***************************
//   function alphabetPosition(text) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let answer = '';
//     for (const element of text) {
//         if (alphabet.includes(element.toLowerCase())) {
//             answer += (alphabet.indexOf(element.toLowerCase()) + 1) + ' '
//         }
//     }
//     answer.slice(0, -1);
//   return answer;
// }
//   console.log(alphabetPosition("The sun set sets at twelve o' clock."));

// *************** თავდაპირველად ამაზე დავიწყეთ მუშაობა **********************
function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const pattern = /[^a-zA-Z ]/u;
    //   Unicode Matching:
    // The u flag enables full Unicode matching, including support for Unicode characters in character classes.
    // const unicodeRegex = /\p{Script=Greek}/u;
    let result = "";
    for(let character of text.toLowerCase()){
        if(!pattern.test(character) && character !== " "){
            // This block will execute for characters that are in the range 'a' to 'z'
            let indexOfCharacter = alphabet.indexOf(character);
            result += (indexOfCharacter + 1) + " ";
        }
    }
    return result.slice(0,-1);
  }
  console.log(alphabetPosition("====he sun set sets at twelve o' clock."));



