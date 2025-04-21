import { expect, test } from "vitest";
import { similarArrays } from "../helpers/equality";

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const target = 0;
  const result = [];
  for (let xIndex = 0; xIndex < nums.length; xIndex++) {
    let yIndex = xIndex + 1;
    let zIndex = nums.length - 1;
    const x = nums[xIndex];

    if (nums[xIndex - 1] === nums[xIndex]) {
      continue;
    }

    if (x > target) {
      continue;
    }

    const xTarget = 0 - x;
    while (yIndex < zIndex) {
      const y = nums[yIndex];
      const z = nums[zIndex];
      const value = y + z;

      if (value === xTarget) {
        result.push([x, y, z]);
        yIndex++;

        while (nums[yIndex - 1] === nums[yIndex]) {
          yIndex++;
        }

        while (nums[zIndex + 1] === nums[zIndex]) {
          zIndex--;
        }
      } else if (value > xTarget) {
        zIndex--;
      } else {
        yIndex++;
      }
    }
  }

  return result;
};

test("15. 3Sum", () => {
  expect(
    similarArrays(threeSum([-1, 0, 1, 2, -1, -4]), [
      [-1, 0, 1],
      [-1, -1, 2],
    ])
  ).toEqual(true);
  expect(threeSum([0, 1, 1])).toEqual([]);
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
