import { expect, test } from "vitest";

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left <= right) {
    const lValue = nums[left];
    const rValue = nums[right];

    const lSqr = lValue * lValue;
    const rSqr = rValue * rValue;

    if (lValue < 0 && lSqr > rSqr) {
      result.push(lSqr);
      left++;
    } else {
      result.push(rSqr);
      right--;
    }
  }

  return result.reverse();
};

test("977. Squares of a Sorted Array", () => {
  expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
});
