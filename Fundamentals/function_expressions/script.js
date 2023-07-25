"use strict";
/* 
  --------------------
  Function Expressions
  --------------------
    
  A function is a special kind of value. 

  A function expression is creating a function in the middle of any
  expression. (*)

  The function creation that happens in the context of an assignment
  expression, is called a Function Expression. 
  
  It is allowed to omit the name of the function in this case. 

  A function in more advanced situations, can be created and immediately 
  called or scheduled for a later execution, and not stored anywhere.
  
  No matter how the function is created, in both cases it is stored in 
  a variable. (*)

  We can assign the function to another variable. (**)

  We can see the code of the function. (***)

  We only call the function when we append parentheses to the end
  of the function name, if there is no parenthesis, the function
  is not called.  
  
  We have semicolons on the end of function expression because it is
  an assignment statement: let x = func() {}; just like let x = 1;    

  Simple values like strings represents data, functions on the other 
  side, can be perceived as actions, we can pass those actions 
  between variables and run when we want. 
*/

// *
let greet = function () {
  console.log("hey there!");
};
function hi() {
  console.log("hi");
}

// **
let hello = hi;

// ***
console.log(hello);

/* 
  ------------------
  Callback Functions
  ------------------

  A callback function, is a function that is passed to another function, 
  and it expects to be called back later if necessary. (**)

  Callback functions can be even declared right into the function call, 
  when passed as arguments to the function, 
  in this case they can be anonymous, and obviously they are not accessible
  outside of the function they are called in. (**)
    
  Callback functions are also called just callbacks. 
*/

// *
function sayHi(toWhom) {
  return "hello";
}
function greetBuddy(hi) {
  console.log(`${hi()}, how are you?`);
}

greetBuddy(sayHi);

// **
let question = false;
function makeResponse(question, pozResponse, negResponse) {
  return question ? pozResponse() : negResponse();
}

makeResponse(
  question,
  function gey() {
    console.log("Yes, I am all for it!");
  },
  function upy() {
    console.log("No, I do not agree!");
  }
);

/* 
  -------------------------------------------
  Function Declaration vs Function Expression
  -------------------------------------------

  A function expression is created when the execution reaches it, and
  is usable and accessible only from that moment. We cannot acces a 
  function expression before it is declared. (*)

  A function declaration can be called earlier that it is defined. That
  is because due to internal algorithms of executing the code, JavaScript
  first looks for Global Function Declarations, and creates them in the
  so called initialization stage. (**)

  Another special feature of Function Declaration, is that it is only
  accessible inside the code block it is declared. (***)

  To make the function visible outside the if statement like in the
  example above, we need to use a function expression, and assign 
  the redMessage function to a variable outside of the if statement,
  in order to make it available globaly or just in outer scope if
  this is case. (#)

  We can use ? ternary operator inside with 
  function declarations right in the call. (##)

*/

// *
// printName("Leonardo");  ERROR: cannot access before initialization
let printName = function (name) {
  console.log(`The name is ${name}`);
};
printName("Leonardo"); // works

// **
showName("Anatol"); // works
function showName(name) {
  console.log(`The name is ${name}`);
}

// ***
let color = "blue";
if (color == "red") {
  function redMessage() {
    console.log("Everything is RED!!!"); // call this function on lines *
  }
  redMessage();
} else {
  function otherColorMessage() {
    console.log("Everything is ... whatever!");
  }
  // redMessage(); // ERRROR *
  otherColorMessage();
}

// redMessage(); ERROR // *

// #
let color1 = "blue";
let getMessage;

if (color1) {
  getMessage = function () {
    console.log("Everything is good!!!");
  };
  getMessage(); // works inside the block
} else {
  getMessage(); // works inside another block on the same level
}

getMessage(); // works globaly

// ##
let hour = 13;
function time(time, message) {
  console.log(`It is ${time}, so ${message}.`);
}
time(
  hour,
  hour < 7
    ? function () {
        console.log("sleep");
      }
    : function () {
        console.log("work");
      }
);
