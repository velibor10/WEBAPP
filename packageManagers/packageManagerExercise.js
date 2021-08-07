const randomWords = require('random-words');
const funnyWords = require('funny-words');
const oneLinerJoke = require('one-liner-joke');
const figlet = require('figlet');
const cowsay = require("cowsay");


// Function where we use random words module

const createSentanceFromThreeWords = () => {
    const word1 = randomWords();
    const word2 = randomWords();
    const word3 = randomWords();

    let sentance = `My wierd sentance is: ${word1.slice(0, 1).toUpperCase()}${word1.slice(1, word1.length).toLowerCase()} is important part of ${word2} and ${word3}!`;

    return sentance;
}

let sentance = createSentanceFromThreeWords();

console.log(sentance);

// Function for edit funnyWords

const editSentance = sentance => {
    let arr = sentance.split(" ");

    let newSentance = "";

    for (let i = arr.length - 1; i >= 0; i--) {
        let word = arr[i];

        newSentance += `${word} `;
    }

    return newSentance;
}

let sentance2 = editSentance(funnyWords("Don't worry, be happy!"));

console.log(sentance2);


// Function for create one liner joke


const createJoke = jokeObject => {
    let joke = "My funny joke is: " + jokeObject.body;

    return joke;
}

let joke = createJoke(oneLinerJoke.getRandomJoke());

console.log(joke);


// Function for words decoration with figlet

const wordDecoration = word => {
    figlet(word, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
}

let decoratingWord = wordDecoration("Hello");

console.log(decoratingWord);


// Function for create cow talking

const cowSaySomething = sentance => {
    console.log(cowsay.say({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
    }));
}

cowSaySomething("This is a stupid lesson");




















