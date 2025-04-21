import { expect, test } from "vitest";

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const totalGas = gas.reduce((acc, i) => acc + i, 0);
  const totalCost = cost.reduce((acc, i) => acc + i, 0);

  if (totalCost > totalGas) {
    return -1;
  }

  let sum = 0;
  let result = 0;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < 0) {
      sum = 0;
      result = i + 1;
    }
  }

  return result;
};

test("134. Gas Station", () => {
  expect(canCompleteCircuit([4], [4])).toBe(0);
  expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
});
