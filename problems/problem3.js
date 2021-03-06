let verifyEquals = require('./verify-equals.js');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3]
]

let outputs = [
  6,
  0
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
    
}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual)
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename)
