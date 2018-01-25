var Letter = require("./letter.js");

var Word = function(userWord) {
    this.userWordArr = [];
    for (var i = 0; i < Word.length; i++) {
        this.userWordArr.push(new Letter(Word[i]));

    }
    // console.log(userWordArr);
};
Word.prototype.toString = function() {
    return this.userWordArr.join(" ");
}


module.exports = Word;