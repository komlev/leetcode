import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let result = 0;
  while (i >= 0) {
    const l = s[i];
    if (l === " ") {
      if (result > 0) {
        return result;
      }
    } else {
      result++;
    }
    i--;
  }

  return result;
};

test("58. Length of Last Word", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5);
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
});
