const Node = require('./Node');

// Every linked list needs to have a head
// The head will refer to the first node in the list
// If the head is null, it means the linked list is empty

let head = null;

let n1 = new Node('A');

head = n1;

// simulate adding a new Node to the back of the list

let n2 = new Node('C');
n1.setNext(n2);

// simulate adding a new Node to the back of the list

let n3 = new Node('E');
n2.setNext(n3);
