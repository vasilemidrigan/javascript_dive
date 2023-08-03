/* 
  F.prototype

  prototype in this case is a regular property, and the new operator uses it
  to set the [[Prototype]] for the newly created object.(*) It literally 
  states, when a new Opossum is created, assign its [[Prototype]] to animal. 

  F.prototype is only used on new F time, if will change later the prototype 
  property on Opossum, the old objects created from it will keep the old 
  prototype, the new ones will have newly setted prototype.
*/

// *

let animal = {
  eats: true,
};

function Opossum(name) {
  this.name = name;
}

Opossum.prototype = animal;

let bigBoss = new Opossum("Big Boss");

console.log(bigBoss.eats); // true

/* 
  Default F.prototype, constructor property

  Even if we do not specify the prototype property, it has it by default.
  It is a constructor that points back to the function itself.(*)

  In cases when we don't know the right constructor, maybe it is from a 
  3rd party lib, we can create another one of the same kind(**)

  In JS, there is not specific requirements for the constructor, we can 
  delete it by specifying another object.(***) And there is no more 
  constructor at all. 

  So to keep the constructor, we have to add/remove properties to the 
  default 'prototype' instead of overwriting it as a whole.

  Or we can recreate it manually(****)
*/

// *

function Lion(name) {
  this.name = name;
}

console.log(Lion.prototype.constructor == Lion); // true
console.log(Lion.prototype.constructor); // ƒ Lion() {}
console.log(Lion.prototype); // constructor: ƒ Lion()

// **

let cat = new Lion("White Boss");

let blackCat = new cat.constructor("Black Cat");

console.log(blackCat.name); // works

// ***

function Birds(name) {
  this.name = name;
}

console.log((Birds.prototype = { hacked: true }));

let reptiles = {
  crocodiles: true,
  alligators: true,
};

// ****

function Airplane(serie) {
  this.serie = serie;
}

Airplane.prototype = { hacked: true };

Airplane.prototype = {
  constructor: Airplane,
};

console.log(Airplane.prototype); // constructor recreated
