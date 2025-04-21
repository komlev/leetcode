import { expect, test } from "vitest";
import { readFromInput } from "../helpers/tree";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  const traverse = (node, path) => {
    const isLeaf = !node.left && !node.right;
    if (isLeaf) {
      result.push([...path, node.val].join("->"));
      return;
    }

    const nextPath = [...path, node.val];

    if (node.left) {
      traverse(node.left, nextPath);
    }

    if (node.right) {
      traverse(node.right, nextPath);
    }
  };

  traverse(root, []);
  return result;
};

test("257. Binary Tree Paths", () => {
  expect(binaryTreePaths(readFromInput([1, 2, 3, null, 5]))).toEqual([
    "1->2->5",
    "1->3",
  ]);
  expect(binaryTreePaths(readFromInput([1]))).toEqual(["1"]);
});
