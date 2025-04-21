let uniqId = 0;

class SingleLinkedList {
  id;
  val;
  next;

  constructor(val, next) {
    this.id = `${uniqId++}`;
    this.val = val;
    this.next = next;
  }
}

const readFromInput = (input) => {
  let node = null;
  while (input.length) {
    node = new SingleLinkedList(input.pop(), node);
  }

  return node;
};

const getValues = (node) => {
  const arr = [];
  let current = node;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
};

module.exports = {
  SingleLinkedList,
  readFromInput,
  getValues,
};
