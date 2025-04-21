import { expect, test } from "vitest";

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let string = x.toString();

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] != string[right]) return false;
    left++;
    right--;
  }

  return true;
};

test("9. Palindrome Number", () => {
  expect(isPalindrome(121)).toEqual(true);
  expect(isPalindrome(123)).toEqual(false);
  expect(isPalindrome(-121)).toEqual(false);
});
