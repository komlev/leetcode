let uniqId = 0;

class Node {
  id;
  value;
  adjacents;

  constructor(value) {
    this.id = uniqId++;
    this.value = value;
    this.adjacents = new Set();
  }

  addAdjacent(node) {
    this.adjacents.add(node);
  }

  removeAdjacent(node) {
    return this.adjacents.delete(node);
  }

  isAdjacent(node) {
    return this.adjacents.has(node);
  }

  getAdjacents() {
    return [...this.adjacents];
  }
}

class Graph {
  static DIR = "DIR";
  static UNI = "UNI";

  constructor(direction = Graph.UNI) {
    this.nodes = new Map();
    this.direction = direction;
  }

  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    }
    const vertex = new Node(value);
    this.nodes.set(value, vertex);
    return vertex;
  }

  removeVertex(value) {
    const current = this.nodes.get(value);
    if (current) {
      [...this.nodes.values()].forEach((node) => node.removeAdjacent(current));
    }
    return this.nodes.delete(value);
  }

  addEdge(from, to) {
    const fromNode = this.addVertex(from);
    const toNode = this.addVertex(to);
    fromNode.addAdjacent(toNode);
    if (this.direction === Graph.UNI) {
      toNode.addAdjacent(fromNode);
    }
    return [fromNode, toNode];
  }

  removeEdge(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);

    if (fromNode && toNode) {
      fromNode.removeAdjacent(toNode);

      if (this.direction === Graph.UNI) {
        toNode.removeAdjacent(fromNode);
      }
    }

    return [fromNode, toNode];
  }

  isAdjacent(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);

    if (fromNode && toNode) {
      return fromNode.isAdjacent(toNode);
    }

    return false;
  }

  static *bfs(first) {
    const visited = new Map();
    const visitList = [];

    visitList.push(first);

    while (visitList.length) {
      const node = visitList.pop();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach((n) => visitList.push(n));
      }
    }
  }

  static *dfs(first) {
    const visited = new Map();
    const visitList = [];

    visitList.push(first);

    while (visitList.length) {
      const node = visitList.shift();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach((n) => visitList.push(n));
      }
    }
  }

  isConnected(from, to) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);

    if (fromNode && toNode) {
      const startNode = Graph.bfs(fromNode);
      for (const node of startNode) {
        if (node === toNode) {
          return true;
        }
      }
    }

    return false;
  }

  findPath(from, to, path = new Map()) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    const newPath = new Map(path);

    if (!toNode || !fromNode) return [];

    newPath.set(fromNode);

    if (from === to) {
      return [...newPath.keys()];
    }

    for (const node of fromNode.getAdjacents()) {
      if (!newPath.has(node)) {
        const nextPath = this.findPath(node.value, to, newPath);
        if (nextPath.length) {
          return nextPath;
        }
      }
    }

    return [];
  }

  findAllPaths(from, to, path = new Map()) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    const newPath = new Map(path);

    if (!toNode || !fromNode) return [];
    newPath.set(fromNode);

    if (from === to) {
      return [[...newPath.keys()]];
    }

    const paths = [];
    fromNode.getAdjacents().forEach((node) => {
      if (!newPath.has(node)) {
        const nextPaths = this.findAllPaths(node.value, to, newPath);
        nextPaths.forEach((nextPath) => paths.push(nextPath));
      }
    });
    return paths;
  }

  getLeafs() {
    return [...this.nodes.values()].filter((n) => n.adjacents.size === 1);
  }

  hasLeafs() {
    return this.getLeafs().length > 0;
  }

  getOrphans() {
    return [...this.nodes.values()].filter((n) => n.adjacents.size === 0);
  }

  hasOrphans() {
    return this.getOrphans().length > 0;
  }

  getNodes() {
    return [...this.nodes.values()];
  }

  getSize() {
    return this.getNodes().length;
  }

  getIslands() {
    const visited = new Map();
    const nodes = this.getNodes();
    const result = [];

    const visit = (node) => {
      if (visited.has(node)) return false;
      const visitList = [node];
      while (visitList.length) {
        const node = visitList.pop();
        visited.set(node);
        node.getAdjacents().forEach((n) => {
          if (!visited.has(n)) {
            visitList.push(n);
          }
        });
      }

      return true;
    };

    nodes.forEach((n) => {
      const isNew = !visited.has(n) && visit(n);
      if (isNew) {
        result.push(n);
      }
    });

    return result;
  }
}

const visualize = (g) => {
  const graph = {
    kind: { graph: true },
    nodes: [],
    edges: [],
  };

  [...g.nodes.values()].forEach((n) => {
    graph.nodes.push({ id: `${n.id}`, label: `${n.value}` });
    [...n.adjacents].forEach((edge) => {
      graph.edges.push({ from: `${n.id}`, to: `${edge.id}` });
    });
  });

  return graph;
};

const readFromInput = (input) => {
  const graph = new Graph();

  input.forEach(([x, y]) => {
    const key = `x:${x}_y:${y}`;
    graph.addVertex(key);
  });

  input.forEach(([x, y], i) => {
    input.forEach(([x2, y2], j) => {
      if ((x === x2 || y === y2) && i !== j) {
        const key = `x:${x}_y:${y}`;
        const key2 = `x:${x2}_y:${y2}`;
        graph.addEdge(key, key2);
      }
    });
  });

  return graph;
};

module.exports = {
  Node,
  Graph,
  readFromInput,
  visualize,
};
