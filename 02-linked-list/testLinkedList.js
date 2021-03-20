const LinkedList = require('./LinkedList');
const Node = require('./Node');

let numbers1 = new LinkedList();
numbers1.addToBack(new Node(101));
numbers1.addToBack(new Node(102));
numbers1.addToBack(new Node(103));
numbers1.addToBack(new Node(104));
numbers1.addToBack(new Node(105));
numbers1.addToBack(new Node(106));
numbers1.addToBack(new Node(107));
numbers1.addToBack(new Node(108));
numbers1.addToBack(new Node(109));

// numbers1.insertAt(1, new Node('Z'));
// numbers1.insertAt(0, new Node('A'));
// numbers1.delete(0);
// numbers1.display();

// console.log('Get Index 0');
// numbers1.getAt(0);

// console.log('Number of elements');
// numbers1.countAll();

// console.log('Test if number 1123 exists');
// console.log(numbers1.contains(1123));

// console.log('Test if number 102 exists');
// console.log(numbers1.contains(102));

// numbers1.display();
// numbers1.swapHeadAndTail();
// console.log('----------SWAP HEAD AND TAIL----------');
// numbers1.display();

let numbers2 = new LinkedList();

numbers2.addToBack(new Node(201));
numbers2.addToBack(new Node(204));
numbers2.addToBack(new Node(208));
numbers2.addToBack(new Node(210));
// numbers2.display();

// let mergeList = (listA, listB) => {
//   let newList = new LinkedList();

//   let current1 = listA.head;
//   while (current1 != null) {
//     newList.addToBack(new Node(current1));
//     current1 = current1.getNext();
//   }

//   let current2 = listB.head;
//   while (current2 != null) {
//     newList.addToBack(new Node(current2));
//     current2 = current2.getNext();
//   }
//   return newList;
// };

// mergeList(numbers1, numbers2).display();

numbers2.insertSorted(205);
numbers2.display();
