const assert = require("assert");
const { miniMaxSum } = require("./index");

describe("miniMaxSum", () => {
  it("should return the minimum and maximum sums of 4 of 5 elements", () => {
    const arr = [1, 3, 5, 7, 9];
    const expected = [16, 24];
    const result = miniMaxSum(arr);
    assert.deepEqual(result, expected);
  });
});
