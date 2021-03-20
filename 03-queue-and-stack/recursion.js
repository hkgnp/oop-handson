// For and while loops are iterative
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Recursion loop: Counting a function within a function
countUp = (start, end) => {
  console.log(start);
  if (start == end) {
    return;
  } else {
    countUp(start + 1, end);
  }
};

// countUp(0, 9);

summation = (number) => {
  if (number == 1) {
    return 1;
  } else {
    console.log(number);
    return number + summation(number - 1);
  }
};

console.log(summation(5));

factorial = (number) => {
  if (number == 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(4));

let x = 'kayak';
let checkPalindrome = (x) => {
  if (x.length == 0 || x.length == 1) {
    return true;
  } else {
    return x[0] == x[x.length - 1] && checkPalindrome(x.slice(1, x.length - 1));
  }
};

console.log(checkPalindrome(x));

// checkPalindromeV2 = (str, start, end) => {
//   if (start == end || start > end) {
//     return true;
//   }
//   return str[start] == str[end] && checkIsPalindromeV2(start + 1, end - 1);
// };
