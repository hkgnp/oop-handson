const Queue = require('./Queue');
const Stack = require('./Stack');

///// EXERCISE 1 ///////
const queueToStack = (queueA) => {
  let s = new Stack();
  let tmpQueue = new Queue();

  while (queueA.peek() != null) {
    let item = queueA.dequeue();
    s.push(item);
  }
  while (s.peek() != null) {
    let item = s.pop();
    tmpQueue.enqueue(item);
  }
  while (tmpQueue.peek() != null) {
    let item = tmpQueue.dequeue();
    s.push(item);
  }
  while (s.peek() != null) {
    let item = s.pop();
    console.log(item);
  }
};

let xQueue = new Queue();
xQueue.enqueue(1);
xQueue.enqueue(4);
xQueue.enqueue(8);
xQueue.enqueue(9);
xQueue.enqueue(10);

// queueToStack(xQueue);

///// EXERCISE 2 ///////

const evenFirst = (queueA) => {
  let evenQueue = new Queue();
  let oddQueue = new Queue();
  let correctQueue = new Queue();
  while (queueA.peek()) {
    let item = queueA.dequeue();
    if (item % 2 === 0) {
      evenQueue.enqueue(item);
    } else {
      oddQueue.enqueue(item);
    }

    while (oddQueue.peek() != null) {
      let item = oddQueue.dequeue();
      evenQueue.enqueue(item);
    }

    while (evenQueue.peek() != null) {
      let item = evenQueue.dequeue();
      console.log(item);
    }
  }
};

// evenFirst(xQueue);

///// EXERCISE 3 ///////

const matchHTML = (htmlTags) => {
  let stack = new Stack();
  let arr1 = htmlTags.split(/[\s,<,>]+/);
  let error;
  for (let c of arr1) {
    if (c == 'p') {
      stack.push('p');
    }
    if (c == '/p') {
      let removed = stack.pop();
      if (removed == undefined) {
        console.log('Extra closing p tag');
        error = true;
        break;
      }
    }
  }

  if (stack.peek() == null && error == undefined) {
    console.log('All tags are closed');
  } else if (stack.peek() != null) {
    console.log('Extra opening p tag');
  }
};

// matchHTML('<p>Hello World</p>');

// EXERCISE 4

// let numbers = [1, 2, 3, 4, 5, 6, 7, 9, 11, 15];
let numbers2 = [2];
let countOdd = (numbers, start, end) => {
  if (numbers.length == 1) {
    return 'What are you doing';
  } else if (numbers.length > 1 && start == end) {
    return 1;
  } else if (numbers[start] % 2 != 0) {
    return 1 + countOdd(numbers, start + 1, end);
  } else {
    return countOdd(numbers, start + 1, end);
  }
};
console.log(countOdd(numbers2, 0, numbers2.length - 1));
// console.log(countOdd(numbers, 0, numbers.length - 1));

// console.log(countOdd(numbers, 0, 6));

// EXERCISE 5

// let numbers = [1, -1, 2, -3];

const inAscendingOrder = (numbers, start, end) => {
  if (start == end) {
    return true;
  } else {
    return (
      numbers[start + 1] > numbers[start] &&
      inAscendingOrder(numbers, start + 1, end)
    );
  }
};

// console.log(inAscendingOrder(numbers, 0, numbers.length - 1));
let square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

let square2 = [
  [2, 4, 6],
  [2, 1, 1],
  [4, 5, 8],
];

const isMagicSquare = (square) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 2; j > -1; j--) {
      // console.log(square[i][i] + square[i][j] + square[j][j]);
      if (sq) {
        return true;
      } else {
        return false;
      }
    }
  }
};
// console.log(isMagicSquare(square2));
// isMagicSquare(square);
