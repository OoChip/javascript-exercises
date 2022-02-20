const sumAll = function(a,b) {
let sum = 0
let min = Math.min(a,b)
let max = Math.max(a,b)
console.log(typeof a);
    for (let i = min ; i <= max ; i++){
        sum += i
    }
if (a < 0 || b < 0 || (typeof a) !== "number" || (typeof b) !== "number" ){
    return "ERROR"
}else{
    return sum}
}
// Do not edit below this line
module.exports = sumAll;
