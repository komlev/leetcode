import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = "";
  let l, r;

  for (let i = 0; i < s.length; i++) {
    l = i;
    r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (result.length <= r - l) {
        result = s.substring(l, r + 1);
      }
      l--;
      r++;
    }

    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (result.length <= r - l) {
        result = s.substring(l, r + 1);
      }
      l--;
      r++;
    }
  }

  return result;
};

test("5. Longest Palindromic Substring", () => {
  expect(longestPalindrome("babad")).toBe("bab");
  expect(longestPalindrome("cbbd")).toBe("bb");
});
