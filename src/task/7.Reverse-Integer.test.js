import { expect, test } from "vitest";

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;
  if (isNegative) {
    x = x * -1;
  }
  const value = [...x.toString()];
  let result = parseInt(value.reverse().join(""));
  result = isNegative ? result * -1 : result;

  if (result >= Math.pow(2, 31) || result <= -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};

test("7. Reverse Integer", () => {
  expect(reverse(123)).toBe(321);
  expect(reverse(-123)).toBe(-321);
});
