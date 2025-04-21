import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {string}
 */
const VOWELS = /[aeiou]/i;
var reverseVowels = function (s) {
  let left = 0;
  let right = s.length - 1;
  s = s.split("");
  while (left < right) {
    const l = s[left];
    const r = s[right];
    const isL = VOWELS.test(l);
    const isR = VOWELS.test(r);

    if (!isL || !isR) {
      left += isL ? 0 : 1;
      right -= isR ? 0 : 1;
    } else {
      const tmp = s[left];
      s[left] = s[right];
      s[right] = tmp;
      left++;
      right--;
    }
  }
  return s.join("");
};

test("345. Reverse Vowels of a String", () => {
  expect(reverseVowels("IceCreAm")).toBe("AceCreIm");
});
