import { expect, test } from "vitest";

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let rle = (str) => {
    const arr = [];
    let index = -1;
    for (let i = 0; i < str.length; i++) {
      const l = str[i];
      const last = arr?.[index];
      if (!last || last?.[1] !== l) {
        arr.push([1, l]);
        index++;
      } else {
        last[0]++;
      }
    }
    return arr.map((a) => a.join("")).join("");
  };

  const seq = (v) => {
    if (v === 1) {
      return "1";
    }
    return rle(seq(v - 1));
  };

  return seq(n);
};

test("38. Count and Say", () => {
  expect(countAndSay(4)).toBe("1211");
});
