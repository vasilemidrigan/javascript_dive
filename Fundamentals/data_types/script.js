/* 
  ----------
  Data Types
  ----------
    
  There are 8 data types in JavaScript:
  number
  bigint
  string
  boolean
  null
  undefined
  symbol
  object
 
  JS is a dynamically typed language, which means we can have a variable of 
  type string and then reassign this variable to a number. 

  ------ 
  Number
  ------ 
  
  Number represents integers and floating point numbers.

  There are many arithmetic operations on numbers such as: *, /, +, -, %, etc.

  Infinity, -Infinity and NaN belongs to number data type. 
  
  NaN is a computational error. A result of an incorrect or an undefined
  mathematical operation. If there is NaN somewhere in a complex mathema-
  tical operation, it will propagate to the hole result(**)


*/

let infinity = 1 / 0; // Infinity

let invalid = "a" / 2; // NaN

let propagateNaN = 1 + "a" - 0; // NaN

console.log(propagateNaN);

/* 
  ------
  BigInt
  ------

  In JavaScript number type, cannot represent safely integer values larger
  than 2^53-1, or less than -2^53-1.
  
  If we have an inger which overflows the range, we'll get a precision error, 
  because not all digits fit into that 64bit range. 

  Usually BigInt numbers are required when working with cryptography,
  or microsecond-precision timestamps, etc. 

*/

// create a bigint variable by appending an n to the number
let galaxyDistance = 9992373482344987487n;

// An example of precision error
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

/* 
  ------
  string
  ------
  
  A string must be surrounded by quotes, there are 3 types of them:
  '' single quotes
  "" double quotes
  `` backticks

  Backticks allows us to embed variables and expressions into a string, 
  by wrapping it in ${...}

  In JS we do not have character type like in C for ex. 

*/

let buddy = "Jimi";
let greet = `This is ${buddy}`; // variable
let math = `1 + 3 = ${1 + 3}`; // expression

/* 
  -------
  boolean
  -------
  
  Boolean type has either true of false values.
*/

let response = false;
let isGreather = 1 > 4; // false

/* 
  ----
  null
  ----
  
  null is a type of its own, which is basically just null.

  null represent nothing, empty or value unknown.

*/

// the color is unknown
let color = null;

/* 
  ---------
  undefined
  ---------
    
  undefined data type simply means the value is not assigned. 
  
  a declared variable that is not assigned has an undefined value.

  we can assign undefined to a variable explicitly, but it is not 
  recommended to do that, normaly one uses null to assign an empty
  value, leaving undefined by default to unassigned variables. 
*/

let future; // undefined

/* 
  -------------------
  Objects and Symbols
  -------------------

  Object is a more complex data types, all the data types above are
  primitive, as they store only one type of data, objects on the
  other side can store collections of different data types.
*/

let pers = {
  name: "johny",
  age: 98,
  wifes: ["Amanta", "Eleonora", "Giovanni"],
};

/* 
  ------
  typeof
  ------

  typeof is an operator, not a function.
*/

// we can use typeof to get the data type
console.log(typeof 34);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof 485n);
console.log(typeof Date);
console.log(typeof undefined);
console.log(typeof { a: 1 });

// The data type function comes from object data type, but typeof operator
// treats prompt(in this case) as a function.
console.log(typeof prompt);

// Here we have an error from early days of JS. The data type of the null
// is not an object, is a special type of its own.
console.log(typeof null);
