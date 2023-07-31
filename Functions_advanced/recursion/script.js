/* 
  Recursion and stack

  Recursion is a programming pattern, useful in situations when a task
  can be naturally split into several tasks of the same kind, but simpler. 
  When a function calls itself, that is called recursion. 

  Two ways of thinking

  1. Iterative thinking (implementing a loop) (*)
  2. Recursive thinking (implementing a recursive function) Simplify the
  task and call self. (**) We simplify the task. 

  A recursive function is usually shorter than an iterative one. 

  The maximal call of recursion steps is called - recursion depth. The 
  maximal amount of recursion depth is from 10000 to 100000. 
*/

// *

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 5)); // 32

// **
function power(x, n) {
  if (n == 1) {
    return x; // base case
  } else {
    return x * power(x, n - 1); // recursive step
  }
}

console.log(power(2, 5)); // 32
