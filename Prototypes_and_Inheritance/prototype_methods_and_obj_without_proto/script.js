/* 
  Prototype methods, and objects without __proto__

  __proto__ is considered outdated, though we can use it inside the object
  declaration {...}. 

  We can return the [[Prototype]] by using Object.getPrototypeOf(obj), 
  and set it by Object.setPrototypeOf(obj).
  
  Create an empty object with the given prototype and optional descriptors.(*)

  We can set the descriptors as well with Object.create() (**)

  We can also clone the object with all its properties, enumerable, non-
  enumerable, data properties, setters/getters, everything and the 
  rigth [[Prototype]] (***)
*/

// *
let animal = {
  eats: true,
};

let rabbit = Object.create(animal);

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {});

// **

let horse = Object.create(animal, {
  runs: {
    value: true,
    enumerable: false,
  },
});

console.log(horse);

// ***

let clone = Object.create(
  Object.getPrototypeOf(horse),
  Object.getOwnPropertyDescriptors(horse)
);

console.log(horse);

/* 
  Changing [[Prototype]] on the fly is a very slow operation, as it requires
  breaking internal optimizations, so it recommended to avoid doing this, 
  change it on object creation only. 

  Very plain objects
  ------------------

  Usually when we want to work some kind of dictionary for example, with
  associative arrays, we can create a plain object, that doesn't have
  any prototype, so no matter the key we insert it will not conflict with
  the built in methods. In the example below, we create an object 
  that has the prototype set to null, and as __proto__ is a getter or a
  setter of the [[Prototype]], now it doesn't have access to it, so we 
  can safely set our key to __proto__: value, in this case __proto__
  is just a string. 
*/

let obj = Object.create(null);

let key = prompt("What is the key?", "__proto__");

obj[key] = "some value";

console.log(obj[key]);
console.log(obj);
