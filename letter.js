// where user guesses letter
var Letter = function(letter) {

    this.letter = letter;
    this.hasBeenGuessed = false;
};
// use prototype here 
Letter.prototype.toString = function() {
    // if statement 
    if (!this.hasBeenGuessed) {
        return "_";
    }
    return this.letter;


};
Letter.prototype.guess = function(guess) {
    if (guess === this.letter) {
        this.hasBeenGuessed = true;
    }
    return guess === this.letter; //check to see if works 
}

// var a = new Letter("a");
// console.log(a + " ");
// a.guess("b");
// a.guess("a");


//a.hasBeenGuessed = true;




module.exports = Letter;