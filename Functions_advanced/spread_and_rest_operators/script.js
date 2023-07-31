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
  
  We can convert a string into an array of characters with sprea and
  with Array.from(), the difference between those two though, is that
  Array.from() works with iterables and array-like objects, while
  spread works only with iterables. (###)
*/

// *

function sumD(a, b, ...args) {
  let sumAB = a + b;

  for (let arg of [...args]) {
    sumAB += arg;
  }

  return sumAB;
}

console.log(sumD(3, 4, 6, 7, 8, 9, 9)); // 46

// **
let arr = [1, 2, 3, 4];
let arr1 = [1, 3, 9, 4];

Math.max(...arr, ...arr1);

// ***
Math.max(...arr, 7, 9, ...arr1, 10);

// #
let mergedArr = [...arr, 857, 45, arr1];

// ##

console.log(..."this is a text");

// ###

let str = "hello";

console.log([...str]);

console.log(Array.from(str));

let x = {
  0: 1,
  1: 2,
  length: 2,
};

console.log(Array.from(x));
// console.log([...x]); // Error: x is not iterable

/* 
  Copy an array/object

  With spread operator we can copy the content of an array into another, 
  keeping at the same time different references. (*)

  The same is applied to objects(**) It is much shorter than Object.assign()
*/

// *

let arr3 = [1, 2, 3];
let arr4 = [...arr3];

arr3[0] = "a";

console.log(arr4); // [1, 2, 3]

// **

let obj1 = { a: 1 };
let obj2 = { ...obj1 };

obj1.a = 3;

console.log(obj2); // {a: 1}
