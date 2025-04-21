import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {boolean}
 */
const letter = /[a-z0-9]/i;
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const ll = s[left];
    const lr = s[right];
    const hasLeft = letter.test(ll);
    const hasRight = letter.test(lr);
    if (!hasLeft || !hasRight) {
      left += hasLeft ? 0 : 1;
      right -= hasRight ? 0 : 1;
    } else if (ll !== lr) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

test("125. Valid Palindrome", () => {
  expect(isPalindrome("race a car")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  expect(isPalindrome("0P")).toBe(false);
});
