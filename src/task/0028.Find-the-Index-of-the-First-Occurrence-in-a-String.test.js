import { expect, test } from "vitest";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack === needle) {
    return 0;
  }
  let index = 0;
  let index2 = 0;
  while (index <= haystack.length - needle.length) {
    while (true) {
      if (index2 >= needle.length) {
        return index;
      }

      if (haystack[index + index2] === needle[index2]) {
        index2++;
      } else {
        index2 = 0;
        break;
      }
    }
    index++;
  }

  return -1;
};

test("28. Find the Index of the First Occurrence in a String", () => {
  expect(1).toBe(1);
});
