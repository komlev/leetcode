import { expect, test } from "vitest";

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) return i;
  }

  return citations.length;
};

test("274. H-Index", () => {
  expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  expect(hIndex([1, 3, 1])).toBe(1);
});
