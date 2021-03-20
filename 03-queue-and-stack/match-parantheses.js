const Queue = require('./Queue');
const Stack = require('./Stack');

let expression = '(a + b) * (y + z))';

let stack = new Stack();

for (let c of expression) {
  if (c == '(') {
    stack.push('(');
  } else if (c == ')') {
    let removed = stack.pop();
    // use removed != "("
    if (!removed) {
      console.log('Error due to extra --closing-- bracket');
      error = true;
      break;
    }
  }
}

if (stack.peek() == null && error == false) {
  console.log('All paranthesies are paired!');
} else if (stack.peek() != null) {
  console.log('Error due to extra --opening-- bracket');
}
