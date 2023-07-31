/* 
  Variable Scope, Closures
  
  Code Blocks 

  A variable is accessible only in the code block it was created (*)

  With var though, it works, because var creates global variables.(**)

  For if, for, while block the same rules are applied. Variables created
  inside those blocks are available only between curly braces. 
*/

// *

{
  let block = true;
}
// console.log(block); // ERROR: block is not defined

// **

{
  var block = true;
}
console.log(block); // works

/* 
  Nested Functions

  A function created into another function is called a nested function.

  It has access to all outer variables. 
  
  Lexical Environment

  1.Variables: 
  A variable is just a property of the special internal object 
  'Envinronment Record'. To get or change a variable, means to get or 
  change a property of that object. 

  The variable (let for example), is assigned only after the declaration.

  2. Function Declarations
  A function declaration is instantly fully initialized, that's why it is
  accessible before the declaration.

  3. Inner and outer Lexical Environment
  When a function runs, it creates a new Lexical Environment, to store 
  local variables and parameters of the call. 
 
  So we have the inner lexical environment, which has a reference to 
  the outer one(global).

  When the code wants to access a variable, the inner LE is searched 
  first, then the outer, then the outer, and so on. 
  
  4. Returning a function
  Every function has a hidden property called [[Environment]], that keeps
  the reference to the environment where it was called. 

  Closure 
  A closure is a function that remembers its outer variables and can access
  them. In JavaScript, with only one exception, all function are closures. 
  With the hidden property [[Environment]], they automatically remember 
  where they were created, and then their code can access outer variables.   
*/

let text = "Hello ";

function hi(name) {
  console.log(`${text} ${name}`);
}

hi("Leo");

/* 
  Garbage Collection

  Usually a LE is removed from memory after the function finishes its 
  execution, just like objects that are unreachable. 
  
  It is important to discard functions references, and thus their closures
  when they aren't needed anymore. 

  If there is a nested function that is still reachable after the function
  ends its execution, then there is the [[Environment]] property which
  references the lexical environment of that function. (*)

  If the function is called many times, and the resulting functions are
  saved, then all LE objects will also be retained in memory.(**)
  

  So the LE is still accessible through that neste function, untill the
  reference is not deleted (***) 

  So the reference to the LE of the outer function is there, because 
  through our nested which is returned, we have the reference to it.
*/

// *

function sayHi() {
  let phrase = "Hi! How are you?";

  return function () {
    return phrase;
  };
}

let greet = sayHi();

greet();

// **

let arr = [sayHi(), sayHi(), sayHi];
console.log(arr);

// ***
greet = null;

// greet(); // ERROR: greet is not a function
