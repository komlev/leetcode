import { expect, test } from "vitest";

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let row = 0;
  let arr = [];
  let isDown = true;
  for (let i = 0; i < s.length; i++) {
    if (arr[row] === undefined) {
      arr[row] = "";
    }
    if (isDown) {
      arr[row++] += s[i];
    } else {
      arr[row--] += s[i];
    }

    if (row >= numRows - 1 || row === 0) {
      isDown = !isDown;
    }
  }

  return arr.join("");
};

test("6. Zigzag Conversion", () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  expect(convert("A", 1)).toBe("A");
});
