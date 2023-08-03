/* 
  Prototypal Inheritance

  In programming, there are many situations when we need to extend something. 
  For example we have an object called animal, and we want to create another
  object on top of the first one, it will inherit properties and methods from
  it, so we don't need to copy them again and again, it just iherits them.

  Here the prototypal inheritance comes to the rescue. 

  An object has a hidden property [[Prototype]], which is either null or points
  to another object. 

  When we read a property from an object and it is missed, JS takes it from 
  the prototype, this is called prototypal inheritance. (*)

  We can also call method by inheritance(**)

  The prototypal chain can be longer(***), but it can't be in circle. 

  We can also define __proto__ in the actual object. (***)

  An object cannot inherit from two other, only one __proto__

  Note: __proto__ is just a getter/setter form [[Prototype]], it is not the 
  prototype itself. 

  __proto__ is a bit outdated, it is recommended to use Object.getPrototypeOf
  and Object.setPrototypeOf instead. 

  We can use setters and getters to set and get values to different levels
  in the prototypal chain (#)
*/

// *

let animal = {
  eats: true,

  walk() {
    console.log("The animal is walking");
  },
};

let opossum = {
  runs: true,
};

opossum.__proto__ = animal;

console.log(opossum.eats); // true

console.log(opossum.__proto__); // animal object

// **
opossum.walk(); // works

// ***
let rat = {
  talking: false,
  __proto__: opossum,
};

rat.walk(); // works

// #

let user = {
  name: "Leonardo",
  surname: "Midrigan",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

admin.fullName = "Vasile Midrigan";

console.log(admin.fullName); // Vasile Midrigan
console.log(user.fullName); // Leonardo Midrigan

/* 
  The value of 'this'

  'this' is not affected by prototypes at all. 

  No matter where the method is found, in an object or its prototype, 'this' 
  always points to the object before the dot. 

  So in this example, by accessing a method from the prototype chain, we 
  change our actual object using 'this' (*)
*/

// *

let animals = {
  eats: true,

  walk() {
    console.log("The animal is walking");
  },
  sleep() {
    this.sleep = true;
  },
};

let tiger = {
  __proto__: animals,
  runs: true,
  predator: true,
};

tiger.sleep();

console.log(tiger.sleep); // true

/* 
  for..in loop iterates over inherited properties as well (*)

  Object.keys() do not iterate over inherited properties(**)

  We can also combine for..in with obj.hasOwnProperty(key),
  to exclude inherited properties(***)
*/

// *

for (let props in tiger) {
  console.log(props); // all 5 properties (tiger + animals)
}

// **

console.log(Object.keys(tiger)); // runs, predator, sleep

// ***

for (let key in tiger) {
  if (tiger.hasOwnProperty(key)) {
    console.log(`Own property: ${key}`);
  } else {
    console.log(`Inherited property: ${key}`);
  }
}
