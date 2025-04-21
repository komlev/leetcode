import { expect, test } from "vitest";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const getPairsNum = (n) => (n * (n + 1)) / 2;

  const map = nums.reduce((acc, i) => {
    acc.set(i, (acc.get(i) || 0) + 1);
    return acc;
  }, new Map());

  return [...map.values()].reduce((acc, item) => {
    const pairNum = getPairsNum(item - 1);
    return acc + (pairNum >= k ? 1 : 0);
  }, 0);
};

test("2537. Count the Number of Good Subarrays", () => {
  expect(countGood([1, 1, 1, 1, 1], 10)).toBe(1);
  expect(countGood([3, 1, 4, 3, 2, 2, 4], 2)).toBe(2);
  expect(countGood([1, 4, 3, 2, 2, 4], 2)).toBe(2);
  expect(countGood([4, 3, 2, 2, 4], 2)).toBe(2);
});
