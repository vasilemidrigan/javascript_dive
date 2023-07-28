/* 
  -------------
  Array methods
  -------------
  
  To delete an element from an array, we cannot use delete operator, 
  it is designed for objects, if we'll use it for arrays, it will 
  keep the deleted index undefined, which is not what we need, instead
  we want the elements to shift after the deletion. (*)
    
  With slice method we can do pretty much, it is very flexible. (**) 
  And it returns the value.(***) We can insert elements without deleting
  any(****) Negative indexes are allowed, which means the end of the 
  array.(#)

*/

// *

let arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, empty, 3]

// **

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 1);
console.log(arr1); // [1, 3, 4, 5]

arr1.splice(0, 2, "string", "text");
console.log(arr1); // ['string', 'text', 4, 5]

// ***
let strings = arr1.splice(0, 2);
console.log(strings); // ['string', 'text']

// ****
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 0, "INJECTED");
console.log(arr2); // [1, 'INJECTED', 2, 3, 4, 5]

// #
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(-1, 1, "X", "Y");
console.log(arr3); // [1, 2, 3, 4, 'X', 'Y']

/* 
  -----
  slice
  -----

  Returns a new array copying to all items from index start to end, not 
  including end, start and end can be negative. (*) We can also copy 
  the whole array, in order to perform some actions, and not affect the
  original array.(**)

  ! It doesn't modify the original array, it copies from it. 
*/

// *

let arr4 = [1, 2, 3, 4, 5];

let x = arr4.slice(0, 3);

console.log(arr4); // [1, 2, 3, 4, 5]
console.log(x); // [1, 2, 3]

// **
let arrCopy = arr4.slice();
console.log(arrCopy); // [1, 2, 3, 4, 5]

/* 
  ------
  concat
  ------

  Creates a new array that includes values from other arrays and additional
  items(*)

  The result is a new array.

  If an arument is an array, then all its elements are copied. (**)
  
  We can copy objects as a whole(***) As well as array-like objects.(****)

  If we want to extract numerical properties from array-like objects, 
  we should have the property [Symbol.isConcatSpreadable]: true (#),
  and we'll get the value into array. 
*/

// *
let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5.concat([56, 657]);

console.log(arr6); // [1, 2, 3, 4, 5, 56, 657]

arr6 = arr6.concat(["data", 34], "test");
console.log(arr6); // [1, 2, 3, 4, 5, 56, 657, 'data', 34, 'test']

// **
let object = {
  name: "Leonardo",
  age: 1.5,
};

// ***
let arr7 = [];
arr7 = arr7.concat(object);
console.log(arr7);

// ****
let arrayLike = {
  0: "test",
  length: 1,
};
let arr8 = [];
arr8 = arr8.concat(arrayLike);
console.log(arr8);

// #
let arrayLike1 = {
  0: "text",
  1: 1,
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};
let arr9 = [];

arr9 = arr9.concat(arrayLike1);
console.log(arr9); // ['text', 1]

/* 
  ----------------
  Iterate: forEach
  ----------------
  
  Runs a function for every element of the array.(*) 
  
  The result of the function if it returns any, is thrown away and ignored. (**)

  The typical use case for forEach is to execute side effects at the end
  of the chain. (*)

*/

// *

let arr12 = ["Earth", "Sun", "Andromeda", "Black Hole", "The Great Attractor"];

arr12.forEach((el, i, arr) => {
  console.log(`${el} is at the position ${i}`);
  if (i == arr.length - 1) console.log(`The entire array was:  ${arr}`);
});

// ** (doesn't make any sense)

let arr13 = [];
arr13 = arr12.forEach((el) => {
  el.toUpperCase();
});
console.log(arr13); // undefined

/* 
  ---------------------
  Searching in an array
  ---------------------

  arr.indexOf(item, from) - looks for 'item' starting from index 'from' and
  returns the index, otherwise -1; It uses === for comparisons. (*)

  arr.includes(item, from) - the same principle, with a difference that it
  returns a boolean. (**) A good feature about inlcudes is that it handles
  NaN correctly.

  Another very useful method is .find(), it is pretty handy when we have
  an array of objects. So we can iterate through those objects and run
  a function on them. (***)

  arr.findIndex() has the same syntax but returns the index or -1 if false.(#)

  arr.findLastIndex() the same as the method above, but searches from right
  to left.(##)

*/

// *

let arr14 = [1, false, 0, "", "string", undefined, null, NaN];

console.log(arr14.indexOf(1)); // 0
console.log(arr14.indexOf(false)); // 1
console.log(arr14.indexOf(false, 2)); // -1 (because of === comparison) !!!
console.log(arr14.indexOf(NaN)); // -1 NaN never equals NaN
console.log(arr14.indexOf(undefined)); // 5
console.log(arr14.indexOf(null)); // 6

// **

console.log(arr14.includes(1)); // true
console.log(arr14.includes(false)); // true
console.log(arr14.includes(false, 2)); // false
console.log(arr14.includes(NaN)); // true
console.log(arr14.includes(undefined)); // true
console.log(arr14.includes(null)); // true

// ***
let guests = [
  {
    name: "Leonardo",
    age: 1.5,
  },
  {
    name: "Petru",
    age: 2.5,
  },
  {
    name: "Vasile",
    age: 3.5,
  },
];

let leonardo = guests.find((guest) => guest.name === "Leonardo");
console.log(leonardo); // {name: 'Leonardo', age: 1.5}

// #
let petruIndex = guests.findIndex((guest) => guest.name === "Petru");
console.log(petruIndex); // 1

// ##
let vasileIndex = guests.findIndex((guest) => guest.name === "Vasile");
console.log(vasileIndex); // 2

/* 
  ------
  filter
  ------

  Returns an array of all matching elements. If true to the first item,
  it pushed it to the result an continues the iteration untill is done.(*)


*/

// *

let babies = [
  {
    name: "Leonardo",
    age: 1.5,
  },
  {
    name: "Petru",
    age: 2.5,
  },
  {
    name: "Victor",
    age: 3.5,
  },
  {
    name: "Daniel",
    age: 4.5,
  },
  {
    name: "Vasile",
    age: 2,
  },
];

let toKindergarden = babies.filter((baby) => baby.age >= 2.5);

console.log(toKindergarden); // Petru, Victor, Daniel (objects)

/* 
  ------------------
  Transform an array
  ------------------

  These methods transform and reorder arrays. 

  ---
  map
  ---
  
  One of the most useful and most used. It calls the function for each
  element of the array and returns the result.(*)
  
  ----
  sort
  ----

  Sorts the array in place.(**) But it uses string comparison. The method
  accepts a ordering function, which will be used to apply another sorting, 
  not the default one. 

*/

// *

let arr15 = ["lorem", "Dacia", "ipsum"];

let toSuper = arr15.map((el) => (el = "super"));
console.log(toSuper); // ['super', 'super', 'super']

// **
let arr16 = [5, 343, 56, 3, 23, 324];
console.log(arr16.sort()); // [23, 3, 324, 343, 5, 56]
