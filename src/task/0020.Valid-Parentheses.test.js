import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {boolean}
 */
const BRACKETS = new Map();
BRACKETS.set("(", ")");
BRACKETS.set("[", "]");
BRACKETS.set("{", "}");
const OPEN = [...BRACKETS.keys()];
const CLOSED = [...BRACKETS.values()];

var isValid = function (s) {
  const stack = [];
  let i = 0;
  while (i < s.length) {
    const bracket = s[i++];
    if (OPEN.includes(bracket)) {
      stack.push(bracket);
    } else if (CLOSED.includes(bracket)) {
      const top = stack[stack.length - 1];
      if (BRACKETS.get(top) === bracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

test("20. Valid Parentheses", () => {
  expect(isValid("()")).toBe(true);
});
