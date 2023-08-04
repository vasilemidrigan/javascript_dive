"use strict";
/* 
  Class basic syntax
  ------------------

  In OOP, a class is an extensible program-code-template for creating objects, 
  providing their initial values for state and implementations of behavior.
  (variables and methods)

  Syntax: 

  class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
  }

  let class = new MyClass()

  The constructor is called by new, so we can inialize the object there(*)
  In this example: A new object is created, and the constructor runs with the
  given argument and assigns it to this.name
*/

// *

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

let leo = new Person("Leonardo");
leo.sayHi();

console.log(leo);

let l = { name: "Leonardo" };
console.log(l);

/* 
  What is a class?
  ----------------

  A class is kind of a function. (*)

  class Person {...} creates a function named User, that becomes the result
  of class declaration. The function code is taken from the constructor method,
  assumed empty if we don't provide such method. And stores class methods such
  as sayHi() in Person.prototype

  When the object is created, it takes its methods fromt the prototype.

  So we have the Person constructor() {} which has its properties, and the 
  prototype Person.prototype which has the methods and also points to the 
  constructor.(*)


*/

// *

console.log(typeof Person); // function

// **

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("hi");
  }
}

console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi); // the method code
console.log(User.prototype); // {constructor: ƒ, sayHi: ƒ}

console.log(Object.getOwnPropertyNames(User.prototype));
// ['constructor', 'sayHi']

/* 
  Not just a syntactic sugar
  --------------------------

  There is an opinion that class is a syntactic sugar. Sure we can do the same
  thing without class keyword, but still, class has its differences from this
  approach(*) In the function declaration, we don't need to create a constructor, 
  it has it by default. Then we add a method to prototype.

  The differences though are:

  - A function created by a class has an internal property 
  [[IsClassConstructor]]: true, the language checks for this property in a 
  variety of places, for example, unlike regular function, a class must be
  called with new keyword(**)

  Also a string representation of a class begins with class keyword.(***)
  
  Class methods are non-enumerable.(****) As we see in the example the 
  properties fromt constructor are enumerable, and as well, the method which we
  explicitly set to enumerable: true, the other method is not listed, because
  methods by default are non-enumerable. 

  All code inside class is automatically in strict mode. 
*/

// *

function UserA(name) {
  this.name = name;
}

UserA.prototype.sayHi = function () {
  console.log("Hi");
};

let newUser = new UserA("Johny");
newUser.sayHi(); // Hi

console.log(newUser.constructor.prototype); // {sayHi: ƒ, constructor: ƒ}

// **
class Engineer {
  constructor(profile, experience) {
    this.profile = profile;
    this.experience = experience;
  }

  introduction() {
    console.log(
      `Hi, I am an Engineer in ${this.profile}, with ${this.experience} yoe.`
    );
  }
  greeting() {
    console.log("Hi all!");
  }
}

// Engineer(); Error
new Engineer(); // works

// alert(Engineer); // class Engineer {...}

// ***

let engineerX = new Engineer("Frontend Development", "6");

Object.defineProperty(engineerX, "introduction", {
  enumerable: true,
});

for (let key in engineerX) {
  console.log(key);
}

/* 
  Class Expression
  ----------------

  class expression(*)

  Similar to NFE, class expression can have a name. 

  We can make classes dynamically on demand (**)
*/

// *

let profile = class {
  hi() {
    console.log("hi");
  }
};

// **

function makeClass(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

let cl = makeClass("Hey There!");

console.log(cl.prototype); // {constructor: ƒ, sayHi: ƒ}

/* 
  Getters/Setters
  ---------------

  Classes can include getters/setters and computed values as well.(*)

  Computed names (**)
*/

// *

class EngineerZ {
  constructor(profile) {
    this.profile = profile;
  }

  get profile() {
    return this._profile;
  }

  set profile(value) {
    this._profile = value;
  }

  ["hi" + "_you"]() {
    console.log("hi");
  }
}

let frontendDev = new EngineerZ("Leonardo");

frontendDev.hi_you(); // hi

console.log(frontendDev.profile);

/* 
  Class fields
  ------------

  Class fields is a syntax that allows to add any properties.(*) 
  They are not passed to ClassName.prototype, instead, they are passed
  directly to created object. We can also see that they are predefined
  variables, that we do not specify on initialization of the object.
  Seems pretty comfortable, it is separated from the constructor, it is
  more readble as well. 
  
  To fix the problem with loosing this, when the object is passed arround, 
  we can also implement class fields. So we basically have a property
  that has an arrow function assigned to it. So it takes the 'this' from
  the outer scope.(**)  
*/

class Computer {
  RAM = "32gb"; // *
  Memory = "3tb";

  logBrand = () => {
    console.log(this.brand); // **
  };

  constructor(brand, os) {
    this.brand = brand;
    this.os = os;
  }

  showBrand() {
    console.log(this.brand);
  }
}

console.log(Computer.prototype); // {constructor: ƒ, showBrand: ƒ}

let dell = new Computer("Dell", "Linux");

console.log(dell.RAM); // 32gb
console.log(Computer.prototype.RAM); // undefined

setTimeout(dell.showBrand, 1000); // undefined

// **

setTimeout(dell.logBrand, 1000); // works perfectly
