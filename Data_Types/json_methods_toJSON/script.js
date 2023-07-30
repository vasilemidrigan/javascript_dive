/* 
  JSON methods, toJSON

  JSON allow us to convert object into a string, for sending over
  network, or just for logging. (*)

  We could implement conversion with a method inside our object,
  toString() for example, but if the object becomes very complex,
  it becomes hard to handle such conversions. (**)

  JSON.stringify - converts objects to JSON 
  JSON.parse = JSON to object 

  JSON - JavaScript Object Notation, is a general format to represent
  values and objects. 

  As many other languages have libraries to handle JSON, so it is 
  easy to use JSON for data exchange when the client uses JS and
  the server is written on Ruby/PHP/Java/etc. 
    
  JSON object: uses only double quotes, obj property names are also 
  quoted. {"age": 34}; (*)
  
  JSON.stringify can also be applied to primitives (***)

  JSON skips methods, symbol keys and values, properties that 
  stores undefined. (****)

  Nested objects are converted as well. (#) 

  !Note: No circular references. (##)
*/

// *

let person = {
  name: "Leonardo",
  age: 1.5,
  located: "Albufeira",
};

let json = JSON.stringify(person);

console.log(typeof json); // string
console.log(json); // {"name":"Leonardo","age":1.5,"located":"Albufeira"}

// **

let planet = {
  name: "Earth",
  life: true,

  toString() {
    return `{name: "${this.name}", life: ${this.life}}`;
  },
};

let toJSON = planet.toString();
console.log(toJSON);

// ***

// all are strings, but undefined not!
console.log(JSON.stringify(145));
console.log(JSON.stringify("some text"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(undefined)); // undefined
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify(NaN)); // null
console.log(JSON.stringify({ a: 1 }));
console.log(JSON.stringify([1, 2, 3]));

// ****
let id = Symbol("some useless id");

let obj = {
  name: "object",
  hi() {
    console.log("hi");
  },
  [id]: "incredibly useless thing right here",
  task: undefined,
};

let objToJSON = JSON.stringify(obj);

console.log(objToJSON); // {"name":"object"}

// #
let forest = {
  leafes: true,
  animals: true,
  birds: true,
  trees: {
    tree_1: "willow",
    tree_2: "oak",
  },
};

let forestToJSON = JSON.stringify(forest);

console.log(forestToJSON);
// {"leafes":true,"animals":true,"birds":true,
// "trees":{"tree_1":"willow","tree_2":"oak"}}

// ##
let objA = {
  a: 1,
};

let objB = {
  a: 1,
};

objA.b = objB;
objB.b = objA;

// let circularTOJSON = JSON.stringify(objA);
// Error Converting circular structure to JSON

/* 
  Excluding and transforming: replacer
  
  For configuration the objects properties that we want to convert, 
  and ignore another, like for example the circular reference, which 
  will cause the error(*) Note that age is not specified, and it is not
  converted, as well as the ref property from objC, which will cause the
  error, as it will result in a circular reference. 

  The list of properties in replacer is too long though, imagine if
  there is a even greather object with dozens of properties, so we can
  use a function that will be called for every key/value pair and re-
  turn a replaced value, or undefined if it is to be skipped. (**)

  The replacer function from (**) it applied recursivelly, so it works
  for nested objects and arrays as well. The value of this inside 
  replacer is the current object in wich the current property is. 
*/

// *

let objC = {
  name: "object c",
};
let objD = {
  name: "object d",
  nested: {
    color: "red",
    age: 13,
  },
  reference: objC,
};

objC.ref = objD;

let objDToJSON = JSON.stringify(objD, ["name", "nested", "color", "reference"]);

console.log(objDToJSON);

// **

let toJSON1 = JSON.stringify(objD, function replacer(key, value) {
  return key == "ref" ? undefined : value;
});

/* 
  Formatting: space

  The third argument is space, which is about indentation, pretty
  formating(*), it can also be a string(**).
*/

// *

let objE = {
  name: "object d",
  nested: {
    color: "red",
    age: 13,
  },
};

let indentJSON = JSON.stringify(objE, undefined, 2);
console.log(indentJSON);
/* 
{
  "name": "object d",
  "nested": {
    "color": "red",
    "age": 13
  }
}
*/

let indentJSON1 = JSON.stringify(objE, undefined, "|");
console.log(indentJSON1);
/* 
{
|"name": "object d",
|"nested": {
||"color": "red",
||"age": 13
|}
}
*/

/* 
  Custom "toJSON"

  We can create our own custom toJSON(), which will be aplied in cases
  when there is a conversion to JSON, just like toString for string 
  conversion.

*/
