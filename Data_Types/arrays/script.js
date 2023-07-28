/* 
  ------
  Arrays
  ------

  When we need to store ordered data, that's where arrays are good at. 

  Objects provide no properties for ordering data, we can nest a property
  in specific space in a object. They aren't meant for that. 

  We can declare an array using two options:(*), the second syntax is used
  most, we can gat an element by using it's index. (**) 

  Replace an element. (***)

  Add a new one. (#)

  As we can see, an array can store data of any types.  (##)
*/

// *

let arr = new Array();
let arrA = [];

// **
let arrB = ["fruit", 2, true];
console.log(arrB[0]);
console.log(arrB[1]);

// ***
arrB[1] = 54;
console.log(arrB); // ['fruit', 54, true]

// #
arrB[3] = undefined;
console.log(arrB); // ['fruit', 54, true, undefined]

// ##
let arrC = [
  "beautiful sunshine",
  7464,
  false,
  { name: "Leonardo" },
  function sayHi() {
    return "hi";
  },
  [1, 2, 3, 4, 6],
];

/* 
  ------------------------------
  Get the last element with 'at'
  ------------------------------

  If we need the last element of the array, we can use(*), but we need to 
  write variable name twice, so there is another solution, which seems
  more elegant(**)  
*/

// *

let arrD = [1, 2, 3, 4];
console.log(arrD[arrD.length - 1]); // 4

// **
console.log(arrD.at(-1)); // 4
console.log(arrD.at(-2)); // 3
console.log(arrD.at(1)); // 2

let charA = arrD.at(-1);
console.log(charA); // 4
console.log(arrD); // the array is not modified

/* 
  -------------------------------
  Methods pop/push, shift/unshift
  -------------------------------

  A queue is an ordered collection of elements which supports two operations: 
  push - append an element to the end, shift - get an element from the beggining,
  advancing the queue so that the element becomes the second. 

  In practice we will use those operation very often, imagine a list of shopping
  items that needs to appear into your cart ordered, or the data structure 
  called stack.

  push - adds elements to the end.
  pop - takes an element from the end. 

  A stack can be illustrated as a pack of card, we add cards to the top and
  take from the top. 

  For stack, the principle LIFO(Last in first out) works, for queues we have
  FIFO(first in first out). 

  Arrays in JavaScript can work both as stacks and as a queue. We can remove
  elements and add them, from the beggining and from the end. 

  In computer science, the data structure that allows that is called a deque. 

  Methods that work with the end of the array: pop and push. pop() extracts the
  item from the array, and modifies the array(*), which is not the case which not 
  modifies the array.

  Method push() appends the element to the array.(**) If we will save 
  .push(), it will just return the length of the array.  

  Methods that work with the beggining of the array are: shift/unshift.
  Adding elements to the start of the array(***), and removing them(****)
  
  Methods push and unshift can add multiple elements at once.
*/

// *

let arrE = ["text", true, { a: 1 }, "another text"];

let char = arrE.pop(); // removing and saving the last element into a variable
arrE.pop(); // just removing the last element

console.log(char); // another text
console.log(arrE); // ['text', true]

// **
let arrF = [1, 2, 3, 4, 5];

arrF.push("spy");
arrF.push("string");
let x = arrF.push(6);

console.log(x); // 8 (the length of the string)
console.log(arrF);

// ***
let arrG = ["text", true, { a: 1 }, "another text"];

let startEl = arrG.shift();
arrG.shift();

console.log(startEl); // 'text'
console.log(arrG); // [{…}, 'another text']

// ***
let arrH = ["text", true, { a: 1 }, "another text"];

let startElem = arrH.unshift(7465); // doesnt't make much sens, it returns length
arrH.unshift(); // this is how it supposed to work

console.log(startElem); // 5 (the length of the new array)
console.log(arrH); // [7465, 'text', true, {…}, 'another text']

/* 
  ---------
  Internals
  ---------
  
  At the core, arrays are objects, they are an extended version of objects, 
  the [] syntax comes from objects, like we access obj[key], we can access an
  array with arr[index]. 

  So arrays are an extended version of objects, that has methods to work with
  ordered data, and the length property for example. 

  There are only 8 data types in JS, so array is an object, thus it behaves
  like an object: It is copied by reference: (*)

  What makes arrays really unique, is their internal representation. The engine
  tries to store its elements in the contiguous memory area, ony after another,
  and there are another optimizations as well, in order to make arrays really
  fast. But they break if we try to work with them as objects.(**) Arrays have
  array-specific optimizations that turns off when the engine sees that we 
  treat an array like a regular object. So in order to benefit from arrays 
  in total, we have to treat arrays like ordered data, and do not treat them
  like objects. If we need arbitrary keys, then we just need to use objects 
  instead. 

  Remember! unshift and shift are much slower than pop and push, as the first
  ones are working with the start of the array, move all elements one index 
  to the left(re-writing literally), from 1 to 0, from 2 to 1 and so on, 
  and then change the length property of the array. 
*/

// *

let arrM = [1, 2, 3, 4];
let arrN = arrM;
arrN[0] = "zzz";
console.log(arrM); // ["zzz", 2, 3, 4];

// **
let arrO = [];

arrO[100] = "a string in the darkness";
arrO.name = "Leonardo";
arrO.sayHi = function () {
  console.log("hi");
};

console.log(arrO);

/* 
  -----
  Loops
  -----
  
  One of the oldest ways to cycle arrays is the for loop.(*)

  There is another form of loop for array though. (**) It shorter than
  for loop, but it doesn't give the index of the current element, but
  that's fine, because there are many cases where we don't need it. We 
  can implement it if we want, though in such cases we can just use for 
  loop.(***)
  
  As arrays are objects, technically we can use for..in loop to iterate
  over arrays. But that's a bad ideea as for..in is optimized for 
  generic objects, not arrays. There are 'array-like' objects, that have
  length and indexes properties, but they may also have non-numeric 
  properties, so the loop will list them as well, which we usually don't 
  need. 
  
  ! As a rule of thumb, we shouldn't use for..in for arrays. 
*/

// *
let arrP = [45, 56, 34, 123, 56];

for (let i = 0; i < arrP.length; i++) {
  console.log(`${i} - ${arrP[i]}`);
}

// **
for (let el of arrP) {
  console.log(el);
}

// ***
let i = 0;
for (let el of arrP) {
  console.log(`${i++} - ${el}`);
}

// ****
for (let key in arrP) {
  console.log(`${key} - ${arrP[key]}`);
}
