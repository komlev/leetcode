import { expect, test } from "vitest";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  const series = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    while (series.includes(char)) {
      series.shift();
    }
    series.push(char);
    result = Math.max(result, series.length);
  }
  return result;
};

test("3. Longest Substring Without Repeating Characters", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("pwqkpw")).toBe(4);
});
