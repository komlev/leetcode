let uniqId = 0;

class TreeNode {
  val;
  left;
  right;
  id;

  constructor(val, left, right) {
    this.id = `${uniqId++}`;
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

const readFromInput = (arr) => {
  let depth = 1;
  let depthNum = 1;
  let i = 0;
  const depths = {};
  while (i < arr.length) {
    const val = arr[i++];
    if (!depths[depth]) depths[depth] = [];
    depths[depth].push(val !== null ? new TreeNode(val) : val);
    depthNum -= 1;
    if (depthNum <= 0) {
      depthNum = Math.pow(2, depth);
      depth += 1;
    }
  }

  const rev = Object.values(depths);
  depth = rev.length;
  Object.values(depths)
    .reverse()
    .forEach((nodes, index) => {
      const current = depth - index;
      if (current > 1) {
        let parentIndex = 0;
        nodes.forEach((node, nodeIndex) => {
          const isRight = nodeIndex % 2;
          const parent = depths[current - 1][parentIndex];
          if (isRight) {
            if (parent) parent.right = node;
            parentIndex++;
          } else {
            if (parent) parent.left = node;
          }
        });
      }
    });

  return depths[1][0];
};

const visualize = (root) => {
  const graph = {
    kind: { graph: true },
    nodes: [],
    edges: [],
  };

  const traverse = (node) => {
    if (!graph.nodes.find((n) => n.id === node.id)) {
      graph.nodes.push({
        id: node.id,
        label: `${node.val}`,
        color: node === root ? "#d671ff" : "#2aceff",
      });
    }

    if (node.left) {
      graph.edges.push({ from: node.id, to: node.left.id });
      traverse(node.left);
    }

    if (node.right) {
      graph.edges.push({ from: node.id, to: node.right.id });
      traverse(node.right);
    }
  };

  traverse(root);

  return graph;
};

module.exports = {
  TreeNode,
  visualize,
  readFromInput,
};
