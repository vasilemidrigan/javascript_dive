"use strict";
/* 
  The 'new' Function syntax

  The syntax new Function() is rarely used. The reason it is used, 
  is because sometimes there's no alternative to it. 

  The feature is, that we can create a function from a string. Which
  is pretty handy when for example we receive the function from a 
  server. (*)

  We can create the function without arguments as well (**)

  It is used in specific cases like I said, when we get the function
  from a server, or dynamically compile a function from a template, 
  in complex web-apps. 

  Closure

  The function with the new syntax, references the global Lexical Environment, 
  not the local one. (***)
*/

// *

let func = new Function("a", "b", "return a + b");

console.log(func(2, 3)); // 5

// **
let hi = new Function('console.log("hi")');

hi(); // hi

// ***
function greeting() {
  let greet = "Hey there!";

  // let func = new Function("console.log(`${greet}`)");
  // Error: greet is not defined

  let func = function () {
    console.log(`${greet}`);
  };

  return func;
}

greeting()(); // Hey there!
