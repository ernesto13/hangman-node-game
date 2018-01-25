var Word = require("./word.js");
var Letter = require("./letter.js");
var wordList = require("./wordListArr.js");
// var prompt = require("prompt");
var inquirer = require("inquirer");

var guessesRemain = 10;

var alpha = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log("Sports Cars Hangman!");
console.log("Guess the fancy sports car");
console.log("**************************");


//sports cars array
var hangman = {
    wordList:
    // wordList: ["camaro", "mustang", "corvette", "ferrari", "lamborghini"],
    // wordsGuessed: 0,

    // currentWord: null,

        startHangman = function(word) { //this will give a new word from the array

        this.currentWord = new Word(this.wordList[Math.floor(Math.random() * this.wordList.length)]);
        this.currentWord = this.wordList;

    }
}

function promptPlayer() {



    inquirer.prompt([

        {
            type: "value",
            name: "letter",
            message: "Guess a letter "
        }

    ]).then(function(userInput) {
        // Use user feedback for... whatever!!

        var inputLetter = this.Letter;
        if (alpha.indexOf(inputLetter) == -1) {
            guessesRemain--;
            console.log("You guessed wrong! " + userInput.letter + " is not it");
            console.log("You have " + guessesRemain + " remaining");
            promptPlayer();
        }
        if (alpha.indexOf(inputLetter) === this.guess) {
            console.log("You have guessed the right letter!");

        }
        if (guessesRemain === 0) {
            console.log("You ran out of guesses!");
            guessesRemain = 10;
            promptPlayer();
        }

    });

}
promptPlayer();