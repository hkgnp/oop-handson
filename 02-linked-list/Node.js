class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getNext() {
    return this.next;
  }

  setNext(next) {
    this.next = next;
  }

  getData() {
    return this.data;
  }
  setData(newData) {
    this.data = newData;
  }
}

// let A = new Node('A');

// // h will become a reference to A as A is not a primitive variable but an object
// let h = A;

// A.setData('Z');

module.exports = Node;
