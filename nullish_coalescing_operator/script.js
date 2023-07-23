/*
  ------------------------------
  Nullish coalescing operator ??
  ------------------------------
  
  This operator is a recent addition, so older browsers may need polyfills. 

  As ?? operator treats undefined and null similarly, we'll say that a value
  is defined if it is neither null nor undefined. 

  a ?? b 
  If a is defined then a, otherwise b (*)
  
  This is just a shorter way to write: 
  result = (a !== null && a !== undefined) ? a : b;

  We can use ?? for providing a default value: (**)
  
  In the example (**) we can replace all ?? operators to || operators, it 
  will still work, but there is a difference between those two:
  OR operator will return the first truthy value, or the last one, while
  Coalescing operator will return the first defined value. So in the example 
  (***) we see the difference.

  In practice we may want to set default values to variables that are not
  defined, like undefined and null, because 0, false, '', are also values
  at the end of the day. A variable distance=0; is a pretty valid statement,
  we have a distance that is equal to 0 kilometers for ex, it is a fact that
  we need to work with, it is not a false statement from some perspective. 

  The precedence is 3, equal to || operator, because of that, we may need
  parenthesis to perform some calculations. 

  JavaScript forbids using ?? with && and || without specifying the precedence
  with parenthesis.This all for safety reasons.  This line of (****) code 
  will give an error, and this one (#) will fix the error.
*/

//*
let a = 1;
let b;

console.log(a ?? b); // 1
// ------------------

// **
let userName;
let userNikname;
let defaultName = userName ?? userNikname ?? "Anonymous"; // Anonymous
// ------------------

// ***
let x = false;
let y = 0;
let str = "";
console.log(x || y || str); // str
console.log(x && y && str); // x
// ------------------

// let i = 4 || 3 ?? true; // ****
let i = (4 || 3) ?? true; // # 4
