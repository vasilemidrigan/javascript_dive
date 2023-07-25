/* 
  -------
  Objects
  -------

  Primitive data types, like for example a string, contain only one data
  type, like in this case strings.

  Objects on the other hand, store collections of various data.

  An object stores key-value pairs, where the key is a string, also 
  called property name, and the value can be anything.

  An object can be created using two syntaxes: (*)

  Usually object literal is used. 
*/

// *
let person = new Object(); // object constructor syntax
let personA = {}; // object literal syntax

/* 
  -----------------------
  Literals and properties
  -----------------------

  Property values are accessible by using the dot notation. (*)

  Objects keys are strings. 

  To remove a property we can use delete operator. (**)

  Multiname property name must be quoted. (***)

  Trailing comma is the comma after the last property or method
  in the object, it makes it easier to add/remove/move properties. 

  For multiword properties, the dot access doesn't work. (#)

  Square brackets, allows us to obtain a property name as the result
  of any expression: (##)
*/

// *
let leonardo = {
  name: "Leonardo",
  age: 1.5,
  hobby: "cry",
  "favorite toy": "remote controled supercar", // ***
};

console.log(leonardo.name);

// **
delete leonardo.hobby;

// #
console.log(leonardo["favorite toy"]);

// ##
let key = "age";
console.log(leonardo[key]); // works
console.log(leonardo.key); // undefined

/* 
  -------------------
  Computed Properties
  -------------------

  Computed Property is a property in square brackets inside an object 
  literal, which takes its name from a variable outside.(*)

  We can use more complex expressions inside our square brackets. (**)

*/

// *
let characteristic = "flow";
let property = "length";
let coordinates = "location";

let river = {
  [characteristic]: "catastrophic",
  [property]: "6650km",
  ["river's " + coordinates]: "Egipt",
};

console.log(river);

/*
  ------------------------
  Property Value Shorthand
  ------------------------

  In real code, we often use existing variables as values for property
  names, so property names have the same names as variables. We can 
  use property value shorthand in order to make the code more concise.(*) 
*/

// instead we can do like in the line *
function createUser(name, age) {
  return {
    name: name,
    age: age,
  };
}
let profira = createUser("Profira", 29);

// *
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
let natalia = makeUser("Natalia", 52);

/* 
  --------------------------
  Property names limitations
  --------------------------

  We can use reserved words like: let, function, return, when naming
  object properties. There is no limitation on property names, they
  can any string and any symbol. (*)

*/

let obj = {
  for: 2,
  let: 6,
  function: "unknown",
  if: "nothing",
  193: 2, // number 193 converts to string '193'
};

/*
  --------------------------------------
  Property existence test, “in” operator
  --------------------------------------

  If we try to access from an object a property that doesn't exists, 
  will get undefined, so we can check if the object has the property: (*)

  There is a special operator 'in' for the same purpose. (**)

  We can also use variables that contains actual name to be tested. (***)

  There are a certain situation when checking for a property with 
  undefined fails. That's when our property is explicitly equal to
  undefined. So in this case 'in' operator does his job, while
  checking with undefined doesn't. (#)
*/

let colors = {
  first: "red",
  second: "blue",
};

// *
console.log(colors.third === undefined); // true

// **
console.log("first" in colors); // true (property exists)
console.log("fourth" in colors); // false (property doesn't exists)

// ***
let order = "first";
console.log(order in colors); // true

// #
let letters = {
  a: true,
  b: true,
  c: undefined,
};
console.log(letters.c === undefined); // true (doesn't exist)
console.log("c" in letters); // true (exists)

/* 
  ------------------
  The 'for..in' loop
  ------------------

  The syntax: 
  for(key in object) {
    // body code
  }

  For..in is a loop to walk over all keys of an object. It is completely 
  different from 'for' loop. 

  Outputing all properties of an object. We could use any name instead of
  key. (*)
*/

let soldier = {
  name: "Jonhatan Smith",
  age: 32,
  nikname: "Blue Fire",
};

for (let key in soldier) {
  console.log(`${key} - ${soldier[key]}`);
}

/* 
  ----------------------
  Ordered like an object
  ----------------------
  
  When looping through objects, integer properties are ordered, other 
  strings appear in the creation order. First integers, then strings.(*)
  Integer here means a string that can be converted to an integer and
  vice versa. 
*/

// *
let map = {
  object: true,
  1: "apple",
  sky: true,
  5: "pen",
  planet: "Earth",
  2: "paper",
  8: "sword",
};

for (let key in map) {
  console.log(key); // 1, 2, 5, 8, object, sky, planet
}
