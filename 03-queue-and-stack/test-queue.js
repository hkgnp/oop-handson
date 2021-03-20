const Queue = require('./Queue');
const Stack = require('./Stack');

let q1 = new Queue();

q1.enqueue(101);
q1.enqueue(102);
q1.enqueue(103);

// Show all and dequeue all of them
// while (q1.peek()) {
//   let item = q1.dequeue();
//   console.log(item);
// }

// let q2 = new Queue();
// let q3 = new Queue();

// Retain even numbers of q1 only.
// while (q1.peek() != null) {
//   let item = q1.dequeue();
//   if (item % 2 == 0) {
//     q2.enqueue(item);
//   }
// }

// while (q2.peek() != null) {
//   let item = q2.dequeue();
//   console.log(item);
// }

// Second item in queue is removed
const jumpQueue = (queueA) => {
  let tmpQ = new Queue();

  let i = 0;
  while (queueA.peek() != null) {
    let item = queueA.dequeue();
    if (i != 1) {
      tmpQ.enqueue(item.data);
    }
    i++;
  }

  while (tmpQ.peek() != null) {
    let item = tmpQ.dequeue();
    queueA.enqueue(item.data);
  }
};

jumpQueue(q1);
// q1.data.display();
while (q1.peek()) {
  let item = q1.dequeue();
  console.log(item.data);
}
