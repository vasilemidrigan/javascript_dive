/* 
  ---------------------
  Methods of primitives
  ---------------------

  JS allows us to work with primitives as if they were objects, they
  also provide methods. 

  One of best things about objects, is that we can store function 
  into them.

  Many built-in objects like dates, erros, html elements, have their
  properties and methods. But this feature comes with a cost. Objects
  are havier than primitives, that requires additional resources. 
  
  ------------------------
  A primitive as an object
  ------------------------

  The paradox faced by the JavaScript creator: 
  1. There are many things one would want to do with a primitive, it
  would be great to access them using methods. 
  2. Primitives must be as fast and lightweight as possible. 

  The Solution: 
  1. Primitives are still primitives.
  2. The language allows access to methods and properties of strings, 
    numbers, booleans and symbols. 
  3. In order for that to work, a special object wrapper that provides
    the extra functionality is created, and then destroyed. 
  
  Those objects are called: String, Number, Boolean, Symbol and BigInt.

  In this example (*), as we know, the string is a primitive, so when
  accessing the property of the string .toUpperCase, a special temporary
  object is created, that knows the string, and has the useful method
  toUpperCase(), so it runs the method, returns the uppercased string,
  and the temporary object is destroyed. 

  So primitives are lightweight despite the fact that they have such 
  complex abilities, because of this feature, creating a temporary object,
  wrapper object more preciselly, perform the actions, and destroy the 
  object, interesting approach. 

  Constructors String/Number/Boolean are for internal use only, it is
  highly unrecommended to use the syntax in the example. (**) On the 
  other hand, using the samy syntax without new keyword, performing
  conversions is totaly reasonable. (***)
  
  null and undefined have no methods, no wrapper objects, they are the
  most primitive values. If we'll try to access a property of a such
  value we'll get an error. 
*/

// *
let letters = "abgh";
console.log(letters.toUpperCase()); // ABGH

// **
console.log(typeof new Number(0)); // object
console.log(typeof 0); // number
console.log(new Number(0) === 0); // false -> object === number

let str = "text";
let str1 = "text";
let str2 = new String("text");

console.log(str === str1); // true -> string === string
console.log(str === str2); // false -> string === object

// ***
let nr = Number("534");
let affirmative = String(true);
