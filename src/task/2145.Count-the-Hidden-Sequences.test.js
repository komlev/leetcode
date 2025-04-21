import { expect, test } from "vitest";

/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
  let min = 0;
  let max = 0;
  let sum = 0;
  for (const diff of differences) {
    sum += diff;
    min = Math.min(min, sum);
    max = Math.max(max, sum);
  }

  const low = lower - min;
  const hight = upper - max;

  return Math.max(hight - low + 1, 0);
};

test("2145. Count the Hidden Sequences", () => {
  expect(numberOfArrays([1, -3, 4], 1, 6)).toBe(2);
});
