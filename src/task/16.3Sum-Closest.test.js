import { expect, test } from "vitest";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = target - (nums[0] + nums[1] + nums[2]);
  for (let xIndex = 0; xIndex < nums.length; xIndex++) {
    const x = nums[xIndex];
    let yIndex = xIndex + 1;
    let zIndex = nums.length - 1;
    while (yIndex < zIndex) {
      const y = nums[yIndex];
      const z = nums[zIndex];
      const diff = target - (x + y + z);
      if (Math.abs(diff) < Math.abs(result)) {
        result = diff;
        if (result === 0) {
          return target;
        }
      }

      if (diff > 0) {
        yIndex++;
      } else {
        zIndex--;
      }
    }
  }
  return target - result;
};

test("16. 3Sum Closest", () => {
  expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2);
  expect(threeSumClosest([0, 0, 0], 1)).toBe(0);
});
