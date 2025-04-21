import { expect, test } from "vitest";

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let left1 = 0;
  let left2 = 0;
  let l1 = s[left1++];
  let l2 = t[left2++];
  const map = new Map();
  while (l1 || l2) {
    if (l1) {
      map.set(l1, (map.get(l1) || 0) + 1);
    }

    if (l2) {
      map.set(l2, (map.get(l2) || 0) - 1);
    }
    l1 = s[left1++];
    l2 = t[left2++];
  }
  const keys = [...map.keys()];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (map.get(key) !== 0) {
      return key;
    }
  }

  return "";
};

test("389. Find the Difference", () => {
  expect(findTheDifference("abcd", "abcde")).toBe("e");
});
