import { expect, test } from "vitest";

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (!a.includes("1") && !b.includes("1")) {
    return "0";
  }
  const aa = [...a].reverse();
  const bb = [...b].reverse();
  let reminder = 0;
  let result = "";

  for (let i = 0; i < Math.max(aa.length, bb.length); i++) {
    const l1 = parseInt(aa[i]) || 0;
    const l2 = parseInt(bb[i]) || 0;
    const value = l1 + l2 + reminder;
    switch (value) {
      case 0:
        result = "0" + result;
        reminder = 0;
        break;
      case 1:
        result = "1" + result;
        reminder = 0;
        break;
      case 2:
        result = "0" + result;
        reminder = 1;
        break;
      case 3:
        result = "1" + result;
        reminder = 1;
        break;
    }
  }

  if (reminder > 0) {
    result = "1" + result;
  }

  if (result[0] === "0") {
    result = "1" + result;
  }
  return result;
};

test("67. Add Binary", () => {
  expect(addBinary("1011", "1010")).toBe("10101");
});
