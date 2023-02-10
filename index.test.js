const assert = require("assert");
const {
  miniMaxSum,
  total,
  min,
  max,
  evenElement,
  oddElement,
} = require("./index");

describe("miniMaxSum", () => {
  it("should return the minimum and maximum sums of 4 of 5 elements", () => {
    const arr = [1, 3, 5, 7, 9];
    const expected = [16, 24];
    const result = miniMaxSum(arr);
    assert.deepEqual(result, expected);
  });
});

describe('total function', function() {
    it('should return the sum of the elements in the array', function() {
      assert.equal(total([1, 2, 3, 4, 5]), 15);
    });
  });
  
  describe('min function', function() {
    it('should return the minimum element in the array', function() {
      assert.equal(min([3, 1, 4, 2, 5]), 1);
    });
  });
  
  describe('max function', function() {
    it('should return the maximum element in the array', function() {
      assert.equal(max([3, 1, 4, 2, 5]), 5);
    });
  });
  
  describe('evenElement function', function() {
    it('should return an array of even elements', function() {
      assert.deepEqual(evenElement([1, 2, 3, 4, 5]), [2, 4]);
    });
  });
  
  describe('oddElement function', function() {
    it('should return an array of odd elements', function() {
      assert.deepEqual(oddElement([1, 2, 3, 4, 5]), [1, 3, 5]);
    });
  });