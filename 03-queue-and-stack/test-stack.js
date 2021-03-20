const Queue = require('./Queue');
const Stack = require('./Stack');

let s1 = new Stack();
s1.push(101);
s1.push(102);
s1.push(103);

while (s1.peek() != null) {
  let item = s1.pop();
  console.log(item);
}

const isPairWiseStack = (stackA) => {
  let stackB = new Stack();

  while (stackA.peek() != null) {
    let item = stackA.pop();

    if (stackB.peek()) {
      let item2 = stackB.pop();
      if (Math.abs(item - item2) != 1) {
        return false;
      } else {
        stackB.push(item);
      }
    }
    return true;
  }

  if (stackB.peek() != null) {
    return false;
  }
};
