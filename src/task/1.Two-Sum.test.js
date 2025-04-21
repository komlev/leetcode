import { expect, test } from "vitest";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = nums.reduce((acc, item, index) => {
    acc.set(item, index);
    return acc;
  }, new Map());

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    const v = map.get(rest);
    if (v !== undefined && v !== i) {
      return [i, map.get(rest)];
    }
  }
};

test("1. Two Sum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
