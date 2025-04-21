import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {number}
 */

const MAP = {
  CM: 900,
  CD: 400,
  XC: 90,
  XL: 40,
  IX: 9,
  IV: 4,
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

var romanToInt = function (s) {
  const symbols = Object.keys(MAP);
  let result = 0;
  for (const symbol of symbols) {
    if (s === "") break;
    while (s.includes(symbol)) {
      s = s.replace(symbol, "");
      result += MAP[symbol];
    }
  }

  return result;
};

test("13. Roman to Integer", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
  expect(romanToInt("MMMDCCXLIX")).toBe(3749);
});
