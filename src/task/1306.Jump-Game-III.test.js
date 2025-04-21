import { expect, test } from "vitest";

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const reached = new Set();
  const buffer = [start];

  while (buffer.length) {
    const index = buffer.pop();
    reached.add(index);
    const value = arr[index];
    if (value === 0) {
      return true;
    }

    const left = index - value;
    const right = index + value;

    if (!reached.has(left) && left >= 0) {
      buffer.push(left);
    }

    if (!reached.has(right) && right < arr.length) {
      buffer.push(right);
    }
  }

  return false;
};

test("1306. Jump Game III", () => {
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBe(true);
  expect(canReach([4, 2, 3, 0, 3, 1, 2], 0)).toBe(true);
  expect(canReach([3, 0, 2, 1, 2], 2)).toBe(false);
});
