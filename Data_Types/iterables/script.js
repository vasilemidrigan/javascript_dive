/*
  ---------
  Iterables
  ---------

  Iterable objects are a generalization of arrays. That is a concept that
  allows us to make use any object useable in a for..of loop. 

  Of course arrays are iterable, but there are many other built in objects
  that are also iterable, like strings. 

  If an object is not technically an array, but represent a collection
  (list, set) of something, then for..of is a great syntax to apply over
  it. 

  Symbol.iterator
  ---------------
    
  To make an object iterable, we need to include the Symbol.iterator. (*)

  Explicitly nest Symbol.iterator inside our object. (**)
*/

// *
let interval = {
  start: 1,
  end: 6,
};

interval[Symbol.iterator] = function () {
  return {
    current: this.start,
    last: this.end,

    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

for (let time of interval) {
  console.log(time); // works
}

// **
let numList = {
  start: 1,
  end: 10,

  [Symbol.iterator]() {
    this.current = this.start;
    return this;
  },

  next() {
    if (this.current <= this.end) {
      return {
        done: false,
        value: this.current++,
      };
    } else {
      return {
        done: true,
      };
    }
  },
};

for (let prop of numList) {
  console.log(prop);
}

/* 
  String is iterable

  For..of over a string (*)
*/

// *

for (let char of "lorem") {
  console.log(char);
}

/* 
  Calling an iterator explicitly 

  If we need more control, say, for example iterate a bit, do something,
  then iterate again over a string, we can explicitly call an iterator.(*)
*/

let name = "Leonardo";

let iterator = name[Symbol.iterator]();

console.log(iterator.next()); // {value: 'L', done: false}
console.log(iterator.next()); // {value: 'e', done: false}

/* 
  Iterables and array-likes
  
  Iterables - objects that implement Symbol.iterator
  Array-like - obj that have indexes, length property, look like arrays. 

  Strings are both. Have indexes, have length, and for..of works with them. 

  An iterable may be not array-like and vice-versa. (*)
*/

let arrLike = {
  0: 1,
  1: 2,
  length: 2,
};

// for (let prop of arrLike) {
//   console.log(prop); // Error: is not iterable
// }

/* 
  Array.from

  The method takes an iterabel, or an array-like object and creaters an
  array from it. And then we can call methods on it.  (*) 

  We can apply a function to each element, and use this keyword as well.(**)

  Convert an iterable to an array(***)

*/

// *

let arrLike1 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4,
};

let arr = Array.from(arrLike1);
arr.pop();
console.log(arr); // [1, 2, 3]

// **
let newArr = Array.from(arrLike1, (nr) => nr ** nr);
console.log(newArr); // [1, 4, 27, 256]

// ***
let strToArr = Array.from("Profira");
console.log(strToArr); // ['P', 'r', 'o', 'f', 'i', 'r', 'a']
