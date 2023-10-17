// 7)დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.

function swappWordsSequence(sentence){
    const wordsArray = sentence.split(" ");
    console.log(wordsArray);
    const swappedWords = [];

    for (let i = wordsArray.length; i >= 0; i--) {
        swappedWords.push(wordsArray[i]);
    }
    console.log(swappedWords);
}
swappWordsSequence("swapping words in sequence")