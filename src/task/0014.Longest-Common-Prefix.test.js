import { expect, test } from "vitest";

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return "";
  }

  let potential = strs[0];
  let r = potential.length - 1;
  let l = 0;
  for (let i = 1; i < strs.length; i++) {
    let word = strs[i];
    let w = potential;
    while (!word.startsWith(w)) {
      r--;
      w = potential.substring(l, r + 1);
    }
    potential = w;
  }

  return potential;
};

test("14. Longest Common Prefix", () => {
  expect(longestCommonPrefix(["flower", "flower", "flower"])).toBe("flower");
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
