import { expect, test } from "vitest";

/**
 * @param {number} num
 * @return {string}
 */

const MAP = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

var intToRoman = function (num) {
  let result = "";
  const symbols = Object.keys(MAP);
  for (const symbol of symbols) {
    if (num === 0) break;
    const value = MAP[symbol];
    const count = Math.floor(num / value);
    if (count === 0) {
      continue;
    }
    result += symbol.repeat(count);
    num -= count * value;
  }

  return result;
};

test("12. Integer to Roman", () => {
  expect(intToRoman(3749)).toBe("MMMDCCXLIX");
  expect(intToRoman(58)).toBe("LVIII");
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
