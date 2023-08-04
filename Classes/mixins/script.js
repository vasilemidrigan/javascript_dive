/* 
  Mixins
  ------

  In JS we can only inherit from one [[Prototype]], and a class can only
  extend one other class.

  A mixin is a class containing methods that can be used by other classes 
  without the need to inherit from it. 

  An example of mixins would be to make an object of useful methods that we can
  merge into a prototype of any class. (*) So we basically make available in
  the whole prototype chain those methods. It is just a method copying on the 
  top prototype, and it is available in the chain below. 

  So mixins are a solution for situations when we need multiple inheritance, 
  but, as we cannot directly implement it in JavaScript, we can use mixins 
  for this purpose. 

  We should be carefull when naming mixins, in order to not override other
  existing methods. 
*/

// *

let greeting = {
  hi() {
    console.log(`hi ${this.name}`);
  },
  bye() {
    console.log(`bye ${this.name}`);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Person.prototype, greeting);
new Person("Leo").hi(); // hi Leonardo

class Leonardo extends Person {}
new Leonardo("Leonardo").bye(); // bye Leonardo

/* 
  Mixins can inherit from each other(*)
*/

// *

let hiMixin = {
  sayHi() {
    console.log("Hello everyone!");
  },
};

let sayHiMixin = {
  __proto__: hiMixin,

  hi() {
    super.sayHi(); // points to hiMixin (parent)
    console.log("How are you all?");
  },
};

class Buddy {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Buddy.prototype, sayHiMixin);

new Buddy("Leo").hi(); // works
