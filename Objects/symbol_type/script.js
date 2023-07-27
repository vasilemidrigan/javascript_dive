/* 
  -----------
  Symbol type
  -----------

  Only two primitive types serves as an objects key: strings and
  symbols. 

  If we'll use number, or boolean instead, it will convert auto-
  matically to strings. 

  A symbol represents a unique identifier. (*) A unique primitive
  value.

  Mostly used for debugging purposes, we can symbols a name, called
  also descritptions. (**) idA is a symbol with description 'id of A'.

  Symbols are guaranteed to be unique, even if with the same 
  description, they are different. (***)

  Symbol don't auto-convert. (#) 
  
  If we want to convert a symbol to string we need to explicitly do 
  that: (##) and so now we can alert it. (###)

  To see the description only: ($)
*/

// *
let id = Symbol();

// **
let idA = Symbol("id of A");

// ***
let idB = Symbol("id");
let idC = Symbol("id");

console.log(idB == idC);

// #
// alert(id); Error: cannot convert symobol to string

// ##
console.log(id.toString());

// ###
// alert(id.toString()); // works

// $
console.log(idA.description);

/* 
  -----------------
  Hidden properties
  -----------------

  Symbols allow us to create hidden properties of an object, that 
  no other part of the code can accidentally access or overwrite. 

  If we are working with user objects, that belongs to a 3-rd 
  party library, we'd like to add identifiers to them: (*)
  It is unsafe to add string properties to objects that belongs 
  to another codebase, symbols on the other side, cannot be 
  accessed accidentally, the other codebase, won't be aware
  of newly added symbols into the object, even if they add
  thei id symbol, there woudn't be a conflicts, as symbol are
  always different, even with the same name. That's not the
  case if we'll use strings, we may crack the 3rd party codebase,
  and if they add thei id as a string as well, things goes 
  totally wrong. 
  
*/
let user = {
  name: "John",
};

let idUser = Symbol("id user");
user[id] = 1;
console.log(user);

/* 
  ----------------------------
  Symbols in an object literal
  ----------------------------

  A symbol in an object literal {...} needs to be wrapped into 
  square brackets, as it is a value from a variable id, not a 
  string id. (*)

  for..in loops and Object.keys skips symbols, that is a part of 
  hiding symbolic properties principle, if another library for 
  example loops over our object, it won't access them. (**)

  However, Object.assign() copies both strings and symbols, and
  this is for a reason though, it is not a paradox. The ideea 
  is that when we clone an object or merge them, we usually 
  want all properties to be copied, icluding symbols. 

  Technically we can access symbols(they are not really hidden), 
  by using Object.getOwnPropertySymbols(obj) (***) that returns 
  all symbols, and Reflect.ownKeys(obj) that returns all keys 
  including symbolic ones, but most libraries don't use these 
  methods. (****)

*/

// *

let leo_id = Symbol("about Leo");
let object = {
  name: "leonardo",
  [leo_id]: "playing laughing crying sleeping. repeat.",
};

console.log(object);

// **
let machineID = Symbol("machine factory id");
let machine = {
  code: 7463838,
  misteriousNr: "hdfydu3737",
  [machineID]: "machine id",
};

for (let key in machine) {
  console.log(key); // no symbols
}

console.log(Object.keys(machine)); // no symbols

let remoteMachine = Object.assign({}, machine);

console.log(remoteMachine); // symbol is copied as well

// ***
let planetID = Symbol("planet_id");
let planetSecNr = Symbol("planet_sec_nr");

let solarSystem = {
  planetA: "Earth",
  planetB: "Saturn",
  [planetID]: "identificator",
  [planetSecNr]: "security nr",
};

// [Symbol(planet_id), Symbol(planet_sec_nr)]
console.log(Object.getOwnPropertySymbols(solarSystem));

// ****
// ['planetA', 'planetB', Symbol(planet_id), Symbol(planet_sec_nr)]
console.log(Reflect.ownKeys(solarSystem));

/* 
  --------------
  Global symbols
  --------------
  
  If we need to access a symbol 'id' for example that is already defined, 
  and we want it to be exactly the id that was created, not another one
  generated with the same name, then we need to use global symbols. 

  We want that in some situations when different part of our application 
  wants to access the same symbol. 

  For this reason, there is a so called global symbol registry. We can 
  create symbols there, they will be saved in the registry, and every
  time when we need them, we can access them by using the name, and it
  is guaranteed that it will be the exactly id that was created. 

  To read a symbol from registry, we use Symbol.for(key), if there is 
  no such, it will be created. (*) And here we're reading it again, 
  maybe from another part of the code: (**) , and then check for 
  equality, and they are the same: (***)
  
  So, when we need an application-wide symbols, that are accessible 
  everywhere, we use global symbol regirstry.
  
*/

// *
let idZ = Symbol.for("symbol_name");

// **
let idAgain = Symbol.for("symbol_name");

// ***
console.log(idZ === idAgain); // true

/*
  --------------
  Symbols.keyFor
  --------------

  We've seen that for global symbols, Symbol.for(key) returns a symbol
  by name. To do the opposite, return a name by global symbol, we can 
  do: (*)  
*/

// *

let cubeID = Symbol.for("cube_identification");
let cubeName = Symbol.keyFor(cubeID); // cube_identification

/* 
  --------------
  System symbols
  --------------
  
  There are many system symbols that allow us to tune our objects, like
  Symbol.hasInstance, Symbol.iterator, etc. For example Symbol.toPrimitive
  describe object to primitive conversion. We will dive into them later
  on. 
  
*/
