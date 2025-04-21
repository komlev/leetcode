/**
 * @param {string} s
 * @return {number}
 */

const d = "0123456789";

var myAtoi = function (s) {
  let result = 0;
  let i = 0;
  let isNegative = false;
  s = s.trim();

  while (i < s.length) {
    const char = s[i++];
    if (d.includes(char)) {
      result = result * 10 + parseInt(char);
    } else if (i === 1 && char === "-") {
      isNegative = true;
    } else if (i === 1 && char === "+") {
      continue;
    } else if (result === 0 && char === "0") {
      continue;
    } else {
      break;
    }
  }

  if (result >= Math.pow(2, 31)) {
    result = Math.pow(2, 31) - (isNegative ? 0 : 1);
  }

  if (isNegative) {
    result = result * -1;
  }

  return result;
};

import { expect, test } from "vitest";

test("8. String to Integer (atoi)", () => {
  expect(myAtoi("   -042")).toBe(-42);
});
