import { expect, test } from "vitest";
import { similarArrays } from "../helpers/equality";

/**
 * @param {number} n
 * @return {string[]}
 */

const BRACKETS = new Map();
BRACKETS.set("(", ")");

var isValid = function (s) {
  const stack = [];
  let i = 0;
  console.log({ s });
  while (i < s.length) {
    const bracket = s[i++];
    if (bracket === "(") {
      stack.push(bracket);
    } else if (bracket === ")") {
      const top = stack[stack.length - 1];
      if (BRACKETS.get(top) === bracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return true;
};

var generateParenthesis = function (n) {
  const result = [];
  const combine = (word, opened, closed) => {
    if (word.length === 2 * n) {
      result.push(word);
    }

    if (opened < n) {
      combine(word + "(", opened + 1, closed);
    }

    if (closed < opened) {
      combine(word + ")", opened, closed + 1);
    }
  };
  combine("", 0, 0);
  return result;
};

test("22. Generate Parentheses", () => {
  let result;
  result = generateParenthesis(3);
  expect(
    similarArrays(result, ["((()))", "(()())", "(())()", "()(())", "()()()"])
  ).toBe(true);
  result = generateParenthesis(1);
  expect(similarArrays(result, ["()"])).toBe(true);
});
