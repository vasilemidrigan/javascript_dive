/* 
  Rest and spread
  
  Functions in JS, can receive an arbitrary number of arguments.(*)
  
  Rest Parameters

  If we pass more arguments to a function than it has parameters, there
  will be no error, it will only work with the parameters it has(**)

  We can gather all the arguments into an array (***)

  Or we can have some parameters as variables, and the rest as an array(****)

  The rest parameters, must always be at the end. 
*/

// *

Math.max(3, 5, 6, 7, 3, 2, 1, 3, 5, 5);

// **

function sum(a, b) {
  return a + b;
}

console.log(sum(4, 5, 4, 5, 6)); // 9 (works with first two only)

// ***

function sum1(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sum1(1, 2, 3, 4, 5)); // 15

// ****

function shopList(distributor, region, ...args) {
  console.log(`Distributor: ${distributor} | Region: ${region}`);

  for (let arg of args) {
    console.log(`Product: ${arg}`);
  }
}

shopList("General Motors", "Oklahoma", "seats", "wheels", "glass");

/* 
  The 'arguments' variable
  
  There is a special array-like object which has all the arguments of 
  the function. It is prefereble though to use sprea syntax instead.
  The downside is that it is not an array, so we cannot perform array
  methods on it. (*)

  Arrow functions don't have arguments object, it takes it from the 
  outer function.(**)

*/

// *

function shopList1(distributor, region, ...args) {
  console.log(`Distributor: ${distributor} | Region: ${region}`);

  for (let arg of args) {
    console.log(`Product: ${arg}`);
  }

  console.log(arguments);
}

shopList1("General Motors", "Oklahoma", "seats", "wheels", "glass");

// **

function a(a, b) {
  let x = 1;

  arrowFunc = (x) => console.log(arguments);

  arrowFunc();
}

a(2, 3); // 2, 3

/*
  Spread syntax 

  When we need to unpack an iterable object into a list of elements, we can
  use spread operator. (*)

  We can pass multiple spread iterables (**)

  Or combine with normal values(***)

  Merge arrays (#)

  Turn a string into an array of characters (##)

  Internally spread uses iterators to gather elements just like the 
  for..of does. 


*/
