import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    const m = map.get(l);
    if (!m) {
      map.set(l, [i, -1]);
    } else {
      map.set(l, [m[0], i]);
    }
  }

  let result = 0;
  const keys = [...map.keys()];
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const [min, max] = map.get(k);
    if (max > 0 && max - min > result) {
      result = max - min;
    }
  }

  return result - 1;
};

test("1624. Largest Substring Between Two Equal Characters", () => {
  expect(maxLengthBetweenEqualCharacters("abca")).toBe(2);
});
