"use strict";

/*
  --------- 
  Variables
  --------- 
  
  Variables are used to store information.

  For a better readability, it is better to use a single per variable declaration.

  var keyword was the old way of declaring a variable, it works slightly 
  different than the actual let and const keywords.

  There are pure functional languages, that forbid changing the variable value.
  You need to create another variable to store another value. Such languages
  are capable of impressive development. 

*/

// declare a variable
let message;

// assign a value to the variable
message = "go out";

// combine daclaration with assignment
let x = 10;

// declare multiple variables in a single statement
let color = "red",
  age,
  id,
  country = "England";

// copy data from one variable to another
let y = 1;
let v;
v = y;

/* 
----------------
Naming variables
----------------

 Use human-readble names, descriptive and concise at the same time. Avoid
 confuse in your variable names. 

 As a first character, we can only use letters, $ and _.
 For the rest we can use numbers as well, and we can also use
 camel case for those names:

 it is just an illustration, do not use this kind of variables,
 a variable name should be explicit and wisely selected.

 A variable name cannot start with a number, a symbol other than $ and _
 Hyphens aren't allowed as well
  
 let my-var = 3;   Error
 let 1C = 'red';   Error
 let % = 'abc';    Error

 Even if we can name variables in other languages like cyrillic letters, 
 or chinese logograms, there is a convention to use english for naming
 variables. 

 We cannot use reserved words for naming variables.
 let function = 1;  Error
 let for = 4;       Error

 Avoid unnecessary reuse of variables, declare a new one for a new task 
 you have, do not reuse variables, it is bad for debugging. 

*/

let $ = 2;
let _ = 0;
let $_$ = 4;
let ____ = "45";
let $_$_$_$ = "dollars";

let longVariableName = "this is camel case";
let _anotherVariable = "prepended with an underscore";
let $variable = "data";

let cabeça = 1;
let padrões = true;

/* 
  ---------
  Constants
  ---------

  To declare a constant, a variable that cannot be reassigned, use const. 
  
  If we know that the variable never change, then we can use constants. 

  There is a practice to use aliases for difficult to remember values that
  are known prior to execution. Such variables are used with capital letters. 
  Capital named constants are only used as aliases for hard-coded values.

*/

const n = 100;
// n = 1;        Error

const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let orange = COLOR_ORANGE;
console.log(orange);
