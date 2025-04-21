import { expect, test } from "vitest";
import {
  SingleLinkedList as ListNode,
  getValues,
  readFromInput,
} from "../helpers/list";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const combine = (n1, n2, reminder) => {
    const value = (n1?.val || 0) + (n2?.val || 0) + reminder;
    const hasNext = n1?.next || n2?.next;
    const next = hasNext
      ? combine(n1?.next, n2?.next, Math.floor(value / 10))
      : value > 9
      ? new ListNode(1, null)
      : null;
    return new ListNode(value % 10, next);
  };

  return combine(l1, l2, 0);
};

test("2. Add Two Numbers", () => {
  let result;
  result = addTwoNumbers(readFromInput([2, 4, 3]), readFromInput([5, 6, 4]));
  expect(getValues(result)).toEqual([7, 0, 8]);
  result = addTwoNumbers(
    readFromInput([9, 9, 9, 9, 9, 9, 9]),
    readFromInput([9, 9, 9, 9])
  );
  expect(getValues(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});
