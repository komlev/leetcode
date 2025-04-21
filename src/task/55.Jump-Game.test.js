import { expect, test } from "vitest";

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let result = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    const value = nums[i];
    if (value + i >= result) {
      result = i;
    }
  }

  return result === 0;
};

test("55. Jump Game", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});
