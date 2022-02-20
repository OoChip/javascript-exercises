const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replaceAll(/\W/g, "")
    let reverseCleanStr = str.toLowerCase().replaceAll(/\W/g, "").split("").reverse().join("")
    if (cleanStr === reverseCleanStr) {return true}
    else{return false}
};
// Do not edit below this line
module.exports = palindromes;
