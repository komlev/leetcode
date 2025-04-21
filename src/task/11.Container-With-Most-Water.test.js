import { expect, test } from "vitest";

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let lh = height[left];
    let rh = height[right];
    let len = right - left;
    let h = lh;
    if (lh > rh) {
      h = rh;
      right--;
    } else {
      left++;
    }

    const s = len * h;
    if (s > result) {
      result = s;
    }
  }

  return result;
};

test("11. Container With Most Water", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});
