const fibonacci = function(index) {
 if (index < 1){return "OOPS" }
 index = parseInt(index)
 const fibo = [1,1]
 for ( let i = 0 ; i < index - 2 ; i++){
     const newFibo = fibo[i] + fibo[i+1]
     fibo.push(newFibo)
 }
 return fibo.pop()
};

// Do not edit below this line
module.exports = fibonacci;
