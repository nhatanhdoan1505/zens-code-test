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

module.exports = { miniMaxSum };
