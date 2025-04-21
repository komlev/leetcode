import { expect, test } from "vitest";
import { similarArrays } from "../helpers/equality";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const hash = new Set();
  const result = [];
  for (let l = 0; l < nums.length - 3; l++) {
    let l1 = l + 1;
    let r = nums.length - 1;
    let r1 = r - 1;
    while (l1 < r1) {
      const sum = nums[l] + nums[l1] + nums[r1] + nums[r];
      if (sum === target) {
        const sign = [nums[l], nums[l1], nums[r1], nums[r]]
          .sort((a, b) => a - b)
          .join(",");
        if (!hash.has(sign)) {
          hash.add(sign);
          result.push([nums[l], nums[l1], nums[r1], nums[r]]);
        }
        r1--;
      } else if (sum > target) {
        r1--;
      } else if (sum < target) {
        l1++;
      }

      if (r1 <= l1) {
        r--;
        r1 = r - 1;
        l1 = l + 1;
      }
    }
  }

  return result;
};

test("4Sum", () => {
  let result;
  result = fourSum([1, 0, -1, 0, -2, 2], 0);
  expect(
    similarArrays(result, [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ])
  ).toBe(true);
  result = fourSum([2, 2, 2, 2, 2], 8);
  expect(similarArrays(result, [2, 2, 2, 2])).toBe(true);
  result = fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);
  expect(
    similarArrays(result, [
      [-3, -2, 2, 3],
      [-3, -1, 1, 3],
      [-3, 0, 0, 3],
      [-3, 0, 1, 2],
      [-2, -1, 0, 3],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ])
  ).toBe(true);
});
