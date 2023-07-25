/* 
  ---------------
  Basic operators
  ---------------
    
  We have the expression: 5 + 2
  5 and 2 are operands or arguments

  Unary operator is when the operator has a single operand (*)
  
  Binary operator - if it has two operands (**)

  In JS we have next math operations: 
  +, -, *, /, %(remainder), **(exponentiation)
*/

let n = 4;
n = -n; // * here the unary operator '-' reverses the sign

let sum = 1 - 4; // ** here the binary operator '-' performs math operation

let r = 10 % 2; // the remainder of 10 / 2 is 0
let r1 = 11 % 2; // the remainder of 11 / 2 is 1

let v = 2 ** 4; // v = 2^4

/* 
  --------------------
  String Concatination
  --------------------

  If one of the operands is a string, then all the expression is converted
  to string.

*/

let strConcat = 1 + 4 + "2";
let strConcat1 = 1 + 4 + "2" + 5;
let strConcat2 = 1 + 4 + "2" + 5 + 3;

console.log(strConcat); // 52
console.log(typeof strConcat); // string
console.log(strConcat1); // 525
console.log(typeof strConcat1); // string
console.log(strConcat2); // 5253
console.log(typeof strConcat2); // string

// +, -, *, /, ** and %, automatically converts the expression to number
let toNr = 1 + "2" - 1;
let toNr1 = 2 + "4" / 2;
let toNr2 = "4" / 2 + "3" - 1;
let toNr3 = 8 * "2" - 7 + 6 / "2";
let toNr4 = "2" + 7 - "5" / 2;

let toStr = 1 * "2" + 5 + "3";

console.log(toNr); // 11
console.log(typeof toNr); // number
console.log(toNr1); // 4
console.log(typeof toNr1); // number
console.log(toNr2); // 22
console.log(typeof toNr2); // number
console.log(toNr3); // 22
console.log(typeof toNr3); // number
console.log(toNr4); // 22
console.log(typeof toNr4); // number
console.log(toStr); // 22
console.log(typeof toStr); // string

/* 
  ---------------------------
  Numeric conversion, unary +
  ---------------------------

  We can convert a value to a number by simply prepending + operator.
  It is even shorter than Number()

  Because a unary operator has a high precedence, it will execute before 
  any arithmetic operator. (*)

*/
let btns = "4";
let btnsToNr = +btns;

console.log(typeof btnsToNr); // number

let a = "1";
let b = "2";
let c = +a + +b;

console.log(c);
console.log(typeof c);

/* 
  -------------------
  Operator Precedence
  -------------------
  
  If an expression has more than one operator, the execution is done by their
  precedence. 

  Parenthesis override any precedence. (*)
*/

let defaultPrecedence = 1 + 1 * 2; // 3
let overridePrecedence = (1 + 1) * 2; // 4
let parenthesis = (2 + 4 - 5) / 2; // 0.5
let parenthesis1 = 2 / (5 + 6) - 3 * (2 + 1) * 4; // -35.81

/* 
  ----------
  Assignment
  ----------

  Assignment operator has a pretty low precedence (2), that is why in 
  mathematical operations all the expression are done and only in the
  end the value from the expression is assigned to the variable at the
  left of the assignment operator. 

*/

let x = 1;
let y = 2;
let z = 3 + (y = x - x) / 2;

console.log(z); // 3

// We can also chain assignments:
let f, g, h;
f = g = h = 3 ** 2;

console.log(f); // 9
console.log(g); // 9
console.log(h); // 9

// Modify-in-place
// We can also use: +=, -=, /=, *=, and other math operators.
let nr = 10;

nr = 10 + 1;
// or we can use a shorten option:
nr += 1;

/* 
  -----------------------
  Increment and decrement
  -----------------------

  Incrementing and decrementing increases or decreases a variable by one.

  This operation can be applied only on variables, trying to increment
  a nr for ex will give an error (*)

  The prefix for returns a new value, while the postfix form returns the 
  older value. (**)

  If we don't need to use the value we can either pre or postfix forms. (***)

  If we need to increment and use the new value, then we need prefix form. (****)

  If we need to increment and use the older value, then we use the 
  postfix form. (*****)

  The precedence of increment and decrement is higher than most of arithmetical 
  operators. (#)

*/
let counter = 1;
counter++; // 2 postfix operator
--counter; // 1 prefix operator

let step = 1;
let step1 = 1;

++step; // ** 2
step1++; // ** 1

let x1 = 5;
x1++;
--x1;

let y1 = 5;
let z1 = ++y1; // **** 6

let w = 5;
let e = w++; // ***** 5

let num = 1;
let num1 = 1;
let s = 1 + num++; // # 2
let m = 1 + ++num1; // # 3

/* 
  -----------------
  Bitwise operators
  -----------------
  
  Bitwise operators treat arguments as 32-bit integer, and work on the level
  of their binary representation.

  These operators are supported in most programming languages.

  And &
  OR |
  XOR ^
  NOT ~
  LEFT SHIFT <<
  RIGHT SHIFT >> 
  ZERO-FILL RIGHT SHIFT >>>
  
  In web-development, usually we don't need to use these operators, 
  they are used mostly in special areas, such as cryptography for ex. 

  -----
  Comma
  -----

  Comma operator allows us to evaluate several expressions, but only  
  return the last expression.
  
  It has a very low precedence, lower than '='

  Comma is sometimes used for some complex expressions like the one
  below (*)
*/

let a1, b1, c1;
for (a1 = 1, b1 = 2, c1 = a1 + b1; a1 < 5; a1++) {
  console.log(`a1 is ${a1}`);
}
