import { expect, test } from "vitest";

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let valueIndex = nums1.length - 1;
  let i = 0;

  while (true) {
    const value1 = nums1[index1];
    const value2 = nums2[index2];

    if ((value1 === undefined && value2 !== undefined) || value2 > value1) {
      nums1[valueIndex--] = value2;
      index2--;
    } else if (
      (value1 !== undefined && value2 === undefined) ||
      value1 >= value2
    ) {
      nums1[valueIndex--] = value1;
      index1--;
    }

    if (valueIndex < 0) {
      return nums1;
    }
  }
};

test("88. Merge Sorted Array", () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 2, 3, 5, 6,
  ]);
});
