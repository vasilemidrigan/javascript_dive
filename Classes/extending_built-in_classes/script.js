/* 
  Extending built-in classes
  --------------------------
  
  Built-in classes like Array, Map are also extendable.(*)

  Built methods like map, filter, and others return new 
  objects of exactly the inherited type Arr (**)
  
  We can costumize that behavior, we can specify what constructor
  should JS use to internally create new entities in map, filter, etc.(***)
 
  So we can use [Symbol.species](){} to specify the type of entity it is 
  returned from built-in methods.  
*/

// *

class Arr extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let array = new Arr(1, 2, 3, 4, 5);
console.log(array.isEmpty()); // false

// **
let filteredArr = array.filter((nr) => nr > 3);
filteredArr.isEmpty(); // false
console.log(array.constructor === Arr); // true

// ***

class ArrayX extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

let arrX = new ArrayX(4, 23, 2, 45, 56, 56, 8);

let filteredArray = arrX.filter((el) => el > 3);

// filteredArray.isEmpty(); ERROR: isEmpty is not a function

/* 
  No static inheritance in built-ins
  ----------------------------------

  Built-in objects have their own static methods like: Object.keys, 
  Array.isArray, etc. 
  
  If we have an array it inherits Array.prototype and can use static 
  methods from Arrar, it also inherits from Object.prototype, but
  it doesn't reference to Object, so our Array can't use static 
  methods of Object. This is an important limitation which is there
  for a reason. Static methods are there for the whole class of a
  certain type, we can't use for example Object.keys on Date object,
  it is just non-sense. 
*/
