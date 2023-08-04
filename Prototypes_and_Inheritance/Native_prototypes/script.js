"use strict";
/* 
  Native Prototypes

  The prototype property is widely used by the core of JS itself, all built-in
  constructor functions uses it.

  Object.prototype
  ----------------

  When we create a new obj literal: let obj = {}, is the same as 
  obj = new Object(), where Object is a built-in object constructor 
  function, with its own prototype referencing a huge object with 
  a lot of properties and methods. 

  So creating an object object, doesn't matter the syntax, the ideea is 
  that the Object.prototype = Object, so newly created object will have
  the [[Prototype]] equal to the Object(*)

  The Objects [[Prototype]] is null.(**)
*/

// *

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.__proto__.constructor); // Object

// **
console.log(Object.prototype.__proto__); // null

/* 
  Other built-in prototypes
  -------------------------

  When we create an array for example, the default new Array() constructor
  is used internally, so Array.prototype becomes its prototype and provide
  methods. 

  All built-in prototypes, inherits from Object.prototype, that's why it
  is common to hear - In JS, everything is object.

  Let's see an array inheritance(*)
*/

// *

let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true

/* 
  Primitives
  
  Methods of these objects(primitives are wrapped by temporary objects
  at runtime), can be accessed (*)
*/

// *

console.log(Number.prototype);
console.log(Boolean.prototype);
console.log(String.prototype);

/* 
  Changing native prototypes
  --------------------------

  Even we can do that, generally that's a bad idea, it is not recommended
  to change built-in methods.(*) It is easy to get a conflict, as they 
  are global accessed. 

  However, polyfilling is the only approved way to change the built-in 
  methods. 
*/

// *
String.prototype.order = function () {
  console.log("ordered string on paper!");
};

"lorem".order(); // ordered string on paper

/* 
  We can also borrow methods from built-in prototypes(*) It will
  work if there is no any errors in compatibility. In this case it 
  works because the internal algorithm of .join()
*/

// *

let arrayLike = {
  0: 234,
  1: 654,
  length: 2,
};

arrayLike.join = Array.prototype.join;

console.log(arrayLike.join(",")); // works
