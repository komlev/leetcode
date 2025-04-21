import { expect, test } from "vitest";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let index1 = 0;
  let index2 = 0;
  const arr = [];
  const isOdd1 = !!(nums1.length % 2);
  const middle1 = isOdd1
    ? Math.ceil(nums1.length / 2)
    : Math.floor(nums1.length / 2);
  const isOdd2 = !!(nums2.length % 2);
  const middle2 = isOdd2
    ? Math.ceil(nums2.length / 2)
    : Math.floor(nums2.length / 2);

  while (index1 < nums1.length || index2 < nums2.length) {
    let value1 = nums1?.[index1];
    let value2 = nums2?.[index2];
    if ((value1 !== undefined && value2 >= value1) || value2 === undefined) {
      arr.push(value1);
      index1++;
    } else if (
      (value2 !== undefined && value1 > value2) ||
      value1 === undefined
    ) {
      arr.push(value2);
      index2++;
    }

    if (index1 >= middle1 && index2 >= middle2) {
      break;
    }
  }

  const isOdd = !!((nums1.length + nums2.length) % 2);
  if (isOdd) {
    return arr[arr.length - 1];
  } else {
    return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
  }
};

test("4. Median of Two Sorted Arrays", () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  expect(
    findMedianSortedArrays(
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    )
  ).toBe(9);
});
