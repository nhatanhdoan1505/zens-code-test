const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter five space-separated integers: ", (input) => {
  let arr = input.split(" ").map(Number);
  const [minSum, maxSum] = miniMaxSum(arr);
  console.log(`${minSum} ${maxSum}`);
  rl.close();
});

function miniMaxSum(arr) {
  if (arr.length !== 5) {
    throw new Error("Array must contain exactly 5 elements");
  }
  arr.sort((a, b) => a - b);
  let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
  let maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);
  return [minSum, maxSum];
}

function total(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function min(arr) {
  return arr.reduce((a, b) => (a < b ? a : b));
}

function max(arr) {
  return arr.reduce((a, b) => (a > b ? a : b));
}

function evenElement(arr) {
  return arr.filter((el) => el % 2 === 0);
}

function oddElement(arr) {
  return arr.filter((el) => el % 2 !== 0);
}

module.exports = { miniMaxSum, total, min, max, evenElement, oddElement };
