import { expect, test } from "vitest";
import { similarArrays } from "../helpers/equality";

/**
 * @param {string} digits
 * @return {string[]}
 */

const MAP = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits) {
  const nums = digits.split("").filter((d) => !!MAP[d]);
  if (!nums?.length) {
    return [];
  }
  const result = [];
  const combine = (word, index) => {
    if (index >= nums.length) {
      result.push(word);
      return;
    }

    const d = nums[index];
    const letters = MAP[d];
    for (let i = 0; i < letters.length; i++) {
      const l = letters[i];
      combine(word + l, index + 1);
    }
  };

  combine("", 0);

  return result;
};

test("17. Letter Combinations of a Phone Number", () => {
  expect(
    similarArrays(letterCombinations("234"), [
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ])
  ).toBe(true);
  expect(similarArrays(letterCombinations("2"), ["a", "b", "c"])).toBe(true);
  expect(
    similarArrays(letterCombinations("23"), [
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ])
  ).toBe(true);
});
