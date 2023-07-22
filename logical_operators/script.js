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

let isPrepared = false;
function prepare() {
  console.log("The soldier is prepared!");
}

!isPrepared || prepare(); // #
