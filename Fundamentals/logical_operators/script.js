/*
  -----------------
  Logical Operators
  -----------------
  
  There are 4 logical operators in JS: || OR, & AND, ! NOT,
  ?? Nullish Coalescing 

  They can be applied to values of any type, and their result can also 
  be of any type. 

  -------
  || (OR)
  -------

  If both operands are falsy, then the expression returns false, otherwise
  it returns true (*) 

  We can pass more than one condition, if at least one is true, the
  expression returns true. (**)  

  OR operator returns the first truthy value, or if there is no one, then
  it returns the last value. It evaluets from left to right, it converts each
  operand to boolean, if the result is true, then it stops and return the 
  original value of that operand, otherwise, like it was mentioned, it goes 
  till the end.(***)
  This is pretty usefull when we need to assign a truthy value to a variable
  depending on two or more other expressions.(****)

  Another feature is so called 'short-circuit evaluation', usually it is used 
  to execute commands either the condition is truthy or falsy (#)

  An interesting example: alert returns undefined, so when executing alerts, || 
  operator goes further searching for a truthy value, until it encounters the 
  integer in the example: (##)

*/
console.log(true || true); // * true untill the line $
console.log(true || false); // *
console.log(false || true); // * $
console.log(false || false); // * false

let a = 1,
  b = 2,
  c = 3;

if (a == b || b > c || c > a) {
  console.log("Something is true, something is..."); // **
}

console.log(null || undefined || "" || 0 || "finally"); // *** finally
console.log(null || undefined || "" || 1 || 0 || "finally"); // *** 1

let firstName,
  lastName,
  nickName = "the eagle";
console.log(`He is ${firstName || lastName || nickName || "a stranger"}`); // ****

let isPrepared = true;
function prepare() {
  console.log("The soldier is not prepared!");
}

isPrepared || prepare(); // #

alert(alert(1) || alert(2) || 100 || false); // ##

/* 
  --------
  && (AND)
  --------
    
  AND operator returns true if both operands are true, otherwise it returns
  false (*)
  
  Any value is allowed as an operand of AND 

  AND returns the first falsy value, or if there is no any, then the last 
  value: result = value1 && value2 && value3 (**) 

  AND has a higher precedence than OR (***)

  It is not recomended to replace if with || and &&, if statements seems 
  to be more readable. But esentially, how AND works in a short circuit,
  is that if the expression on the left is truthy one, then it executes
  the expression on the right, as AND returns the first falsy value, or
  the last one if there is no any falsy value encountered at all. (#)
 
  Another interesting example with alerts: So the alert shows first truthy
  value, then it goes further, as or AND operator is looking for first falsy
  value, then it runs alert(!!!) which returns undefined, and the execution
  stops as our AND operator reached his first falsy value. (##)

*/

console.log(true && true); // * true
console.log(true && false); // * the rests are false
console.log(false && true); // *
console.log(false && false); // *

let x = 1 && "lorem" && undefined && "1827"; // ** undefined
let y = 1 && "lorem" && "1827" && 764; // ** 764

let z = (1 && null) || (true && 1); // *** 1  (null || 1 ---> 1)

let v = 1;
function log() {
  console.log(v);
}

v == 1 && log(); // #

alert(1 && alert("!!!") && alert(2)); // ##

/* 
  -------
  ! (NOT)
  -------
  
  The syntax: result = !value; (*)
  
  The operator accespts a single argument, converts the operand to a boolean
  type, then returns the inverse value. (**)

  A double NOT !! is used to convert the value to a boolean type, just like 
  the + is converting to a number type. (***) 

  Not operator has the higher precedence of all logical operators. 
  
*/

let isOpen = !true; // * false

// ---------------------
// **
console.log(!0); // true
console.log(!true); // false
console.log(!1); // false
console.log(!undefined); // true
console.log(!null); // true
// ---------------------
// ***
console.log(!!0); // false
console.log(!!undefined); // false
console.log(!!1); // true
console.log(!!"lorem"); // true
console.log(!!38845); // true
// ---------------------
