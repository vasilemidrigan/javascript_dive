"use strict";
/* 
  Property flags and descriptors

  Property flags
  --------------
  Object properties, beside a value, have 3 special attributes:
  writable: can be changed, otherwise read-only
  enumerable: listed or not in loops
  configurable: can be deleted and these properties modified or not. 

  Get property descriptor: (*) An object with the value and flags. 

  Change the flags (**) Here I do not specify any flags, so the flags
  that are not specified, by default becomes false. 

  Create a true flag (***)
*/

// *

let person = {
  name: "Leonardo",
};

let descriptor = Object.getOwnPropertyDescriptor(person, "name");

console.log(descriptor);

// **

Object.defineProperty(person, "age", {
  value: 1.5,
});

let descriptor1 = Object.getOwnPropertyDescriptor(person, "age");

console.log(descriptor1);
// {value: 1.5, writable: false, enumerable: false, configurable: falsel}

// ***
Object.defineProperty(person, "name", {
  writable: false,
});

let descriptor2 = Object.getOwnPropertyDescriptor(person, "name");

console.log(descriptor2);
// {value: 'Leonardo', writable: false, enumerable: true, configurable: true}

/* 
  Non-writable
  ------------

  A property can't be reassigned if the flag is false.(*)
*/

// *
let fellow = {
  name: "John",
};

Object.defineProperty(fellow, "name", {
  writable: false,
});

// fellow.name = "Steve";
// ERROR Uncaught TypeError: Cannot assign to read only property 'name' of object

/* 
  Non-enumerable
  --------------

  Here we see how to make a property not listed in a loop.(*)
*/

// *

let state = {
  region_A: "California",
  region_B: "New-York",
  region_C: "Texas",
};

for (let key in state) {
  console.log(state[key]); // list all
}

Object.defineProperty(state, "region_B", {
  enumerable: false,
});

for (let key in state) {
  console.log(state[key]); // region_B not listed
}

/* 
  Non-configurable
  ----------------

  A non-configurable property, can't be deleted and it's attributes can't
  be modified. (*) Though, we can change it's value. 

  So making a property non-configurable, is a one way road, we can't change it
  back later. 

*/

// *

let buddy = {
  name: "Vasile",
};

Object.defineProperty(buddy, "name", {
  configurable: false,
});

// ERROR: Cannot redefine property 'name' in the statement below

// Object.defineProperty(buddy, "name", {
//   configurable: true,
// });

// delete buddy.name;  ERROR cannot delete property 'name'

buddy.name = "Vasile Midrigan";

console.log(buddy);

/* 
  Object.defineProperties
  -----------------------

  We can define more properties at once: (*)

*/

let obj = {
  color: "red",
  name: "cube",
};

Object.defineProperties(obj, {
  color: {
    writable: false,
  },
  name: {
    value: "triangle",
    configurable: false,
  },
});

/* 
  Object.getOwnPropertyDescriptors
  --------------------------------
 
  With this method, we can clone an object, taking in account the flags, which
  do not make a loop. This method also copies symbolic and non-enumerable proper-
  ties, which again, a regular loop does not. (*)
    
  So this is pretty handy solution to clone an object with all the flags, 
  symbols as it is. 
*/

// *

let id = Symbol("Earth ID");

let planet = {
  [id]: "earth id",
  life: true,
  name: "Earth",
  water: true,
  oxygen: true,
  age: 4.5e9,
};

Object.defineProperty(planet, "oxygen", {
  enumerable: false,
});

for (let key in planet) {
  console.log(planet[key]); // oxygen is not enumerable
}

let clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(planet)
);

console.log(clone);

/* 
  Properties that limit access to the objects:

  Prevent new properties(*)

  Set configurable false for all properties of the object(**)

  There are more methods to work with this kind of tasks.
*/

// *
let objA = {
  name: "a",
};

Object.preventExtensions(objA);

// objA.age = 23;
// Uncaught TypeError: Cannot add property age, object is not extensible

let objB = {
  name: "mister b",
  age: 45,
  location: "Australia",
};

Object.seal(objB);

// objB.armor = false;
// Uncaught TypeError: Cannot add property armor, object is not extensible

// delete objB.name; ERROR

console.log(objB);
