import { expect, test } from "vitest";

/**
 * @param {string} columnTitle
 * @return {number}
 */

const MAX = 26;
const map = new Map();
const start = "A".charCodeAt(0);
for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
  map.set(String.fromCharCode(i), i - start + 1);
}

var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const index = columnTitle.length - i - 1;
    const l = columnTitle[i];
    const value = map.get(l);
    const cycle = Math.pow(MAX, index);
    result += cycle * value;
  }
  return result;
};

test("171. Excel Sheet Column Number", () => {
  expect(titleToNumber("AA")).toBe(27);
  expect(titleToNumber("AB")).toBe(28);
  expect(titleToNumber("ZY")).toBe(701);
  expect(titleToNumber("FXSHRXW")).toBe(2147483647);
});
