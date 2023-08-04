/* 
  Class checking: instanceof

  instanceof operator check if the object belongs to a certain class. It
  also takes into account the inheritance.

  The syntax(*)

  Such a check can be usefull in many cases, like for example in a polymorphic
  function, where it treats its arguments depending on their type.

  It works with constructor functions(**)

  And with built-in classes(***)
*/

// *
class Animal {
  constructor(name) {
    this.name = name;
  }
}

let wolf = new Animal("grey Wolf");

console.log(wolf instanceof Animal); // true

// **

function Lion() {}

let cat = new Lion();

console.log(cat instanceof Lion); // true

// ***

let arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true (arr > Array > Object)

/* 
  The algorithm of instanceof
  ---------------------------

  1. instanceof examines the prototype chain for the check. If there is a static
  method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj), 
  it should return either true or false, and its done. We can costumize the 
  behavior of this method:(*) Let say, if the object has a certain property, it
  belong to a certain class.

  2. Most classes do not have this method, so there, the standart logic is 
  applied. It check if Class.prototype is equal to any of obj.prototype in 
  the chain.

  obj.__proto__ === Class.prototype
  obj.__proto__.__proto__ === Class.prototype
  ...
  
  If the end of the chain is reached and there is no equality found, then it
  returns false. 

  There is a method objA.isPrototypeOf(objB), it returns true if objA is 
  somewhere in the chain of prototypes for objB. 

  So instanceof can be rephrased as: Class.prototype.isPrototypeOf(obj).  
*/

class Bird {
  static [Symbol.hasInstance](obj) {
    if (obj.canFly) return true;
  }
}

let eagle = { canFly: true };

console.log(eagle instanceof Bird); // true

/* 
  Interesting moment, here, when we have a class, it is inherited by another
  class, and then we change the prototype property of the parent class, so 
  the other class is no more an instance of the parent class(*)
*/

function Eagle() {}
let ea = new Eagle();

console.log(ea instanceof Eagle); // true

Eagle.prototype = {};

console.log(ea instanceof Eagle); // false
