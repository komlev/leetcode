import { expect, test } from "vitest";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const l1 = s[i];
    const l2 = t[i];

    map.set(l1, (map.get(l1) || 0) + 1);
    map.set(l2, (map.get(l2) || 0) - 1);
  }

  return !map.values().some((v) => v !== 0);
};

test("242. Valid Anagram", () => {
  expect(isAnagram("rat", "car")).toBe(false);
  expect(isAnagram("anagram", "nagaram")).toBe(true);
});
