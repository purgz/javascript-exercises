const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z]/g,"");
    let reverse =  [...word].reverse().join("");
    console.log(reverse);
    return  word === reverse;
};

palindromes("A car, a man, a maraca.")
// Do not edit below this line
module.exports = palindromes;
