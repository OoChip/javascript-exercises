const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let initArr = arr.push(0)
  let newArr = arr.reduce(function(a, b){ return a + b; })
  return newArr
};

const multiply = function(arr) {
  let newArr = arr.reduce(function(a, b){ return a * b; })
  return newArr
};

const power = function(b, e) {
	return b ** e
};

const factorial = function(num) {
  if ( num < 2 ) {return 1}
  for (var i = num - 1; i >= 1; i--) {num *= i}
  return num;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
