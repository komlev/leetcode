import { expect, test } from "vitest";

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const potentials = new Set();
  const potentialsMap = new Map();
  let result = 0;
  answers.forEach((answer) => {
    if (answer === 0) {
      result++;
    } else {
      const value = answer + 1;
      potentials.add(value);
      potentialsMap.set(value, (potentialsMap.get(value) || 0) + 1);
    }
  });

  return (
    result +
    [...potentials].reduce((acc, item) => {
      const answered = potentialsMap.get(item);
      if (answered > item) {
        return acc + Math.ceil(answered / item) * item;
      }

      return acc + item;
    }, 0)
  );
};

test("781. Rabbits in Forest", () => {
  expect(numRabbits([1, 1, 2])).toBe(5);
  expect(numRabbits([10, 10, 10])).toBe(11);
  expect(numRabbits([1, 1, 2])).toBe(5);
  expect(numRabbits([0, 0, 1, 1, 1])).toBe(6);
});
