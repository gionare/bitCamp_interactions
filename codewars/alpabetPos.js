// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.


// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// დავალაგოთ ყველა ასო ანბანის მიხედვით
// შემავალი ტექსტიდან ამოვიღოთ პირველი ასო, შევადაროთ ანბანს და დავბეჭოთ მისი მდებარეობა
//


function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const pattern = /[^a-zA-Z]/g;
    let result = "";
    for(let character of text.toLowerCase() ){
        if(!pattern.test(character) && character !== " "){
            let indexOfCharacter = alphabet.indexOf(character) + 1;
            result += indexOfCharacter + " ";
        }
    }
    return result.slice(0,-1);
  }
  console.log(alphabetPosition("T@he sun set sets at twelve o' clock."));
