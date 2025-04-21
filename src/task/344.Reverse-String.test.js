import { expect, test } from "vitest";

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const left = i;
    const right = len - 1 - i;
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
  }
  return s;
};

test("344. Reverse String", () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toEqual([
    "o",
    "l",
    "l",
    "e",
    "h",
  ]);
});
