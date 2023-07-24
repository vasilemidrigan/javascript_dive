// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  return a > b ? b : a;
}
min(1, 1); // 1
min(1, 2); // 1
min(2, 1); // 1

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(a, b) {
  return a ** b;
}

pow(4, 7); // 16384
