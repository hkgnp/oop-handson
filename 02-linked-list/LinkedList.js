const Node = require('./Node');

//////////////////////////////////////////////////
///////////  Algorithm for Linked List ///////////
//////////////////////////////////////////////////

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToBack(newNode) {
    // case 1:
    // if there is nothing in the list
    // set head to the new node that we are adding
    if (this.head == null) {
      this.head = newNode;
    } else {
      // case 2:
      // if there is already something in the list
      // find the last node and link to it
      let current = this.head;
      while (current.getNext() != null) {
        current = current.getNext();
      }
      current.setNext(newNode);
    }
  }

  insertAt(index, newNode) {
    if (index == 0) {
      // means we are inserting a new node to the front
      let oldHead = this.head;
      this.head = newNode;
      this.head.setNext(oldHead);
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.getNext();
      }
      let oldNext = current.getNext();
      current.setNext(newNode);
      newNode.setNext(oldNext);
    }
  }

  delete(index) {
    if (index == 0) {
      let newNext = this.head.getNext();
      this.head = newNext;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.getNext();
      }
      let newNext = current.getNext().getNext();
      current.setNext(newNext);
    }
  }

  display() {
    let current = this.head;
    while (current != null) {
      console.log(current.getData());
      current = current.getNext();
    }
  }

  getAt(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.getNext();
    }
    console.log(current.getData());
  }

  countAll() {
    let current = this.head;
    let count = 0;
    while (current != null) {
      count += 1;
      current = current.getNext();
    }
    console.log(count);
  }

  contains(data) {
    let current = this.head;
    while (current != null) {
      if (current.getData() == data) {
        return true;
      }
      current = current.getNext();
    }
    return false;
  }

  swapHeadAndTail() {
    if (this.head.getNext() == null) {
      console.log('Only one element in list');
    } else if (this.head.getNext().getNext() == null) {
      // IF LIST ONLY HAS 2 ELEMENTS
      let oldHead = this.head;
      this.head = this.head.getNext();
      this.head.setNext(oldHead);
      oldHead.setNext(null);
    } else {
      // IF LIST HAS >2 ELEMENTS
      let secondHead = this.head.getNext();
      let secondLast;
      let current = this.head;
      let newHead;
      while (current != null) {
        if (current.getNext() == null) {
          newHead = current;
        } else {
          secondLast = current;
        }
        current = current.getNext();
      }

      let newTail = this.head;
      this.head = newHead;
      newHead.setNext(secondHead);
      secondLast.setNext(newTail);
      newTail.setNext(null);
    }
  }

  insertSorted(number) {
    let newNode = new Node(number);
    // Add to a position in the linked list such that the list is sorted in ascending order
    // No repeating numbers. Don't insert if number already exists
    let oldHead;
    if (newNode.data < this.head.data) {
      oldHead = this.head;
      this.head = newNode;
      newNode.setNext(oldHead);
    } else {
      let current = this.head;

      while (current.getNext() != null) {
        if (
          newNode.data > current.data &&
          newNode.data < current.getNext().data
        ) {
          let nextNode = current.getNext();
          current.setNext(newNode);
          newNode.setNext(nextNode);
          break;
        }
        current = current.getNext();

        if (current.getNext() == null) {
          let oldTail = current;
          oldTail.setNext(newNode);
          newNode.setNext(null);
        }
      }
    }
  }
}
module.exports = LinkedList;
