/* 
  -------
  Numbers
  -------

  In JS, there are two types of numbers:
  - regular numbers, stored in 64bit format, also known as 'double-precision
    floating point numbers'. 
  - BigInt numbers: integers of arbitrary length. They need when regular 
    numbers can't safely work, as they can't exceed 2^53 - 1 or be less 
    than -2^53 - 1. 
  
  ------------------
  Ways to write a nr
  ------------------

  We can use underscores for readability.(*)

  If the nuymber is too long, we can use the format 1e9 (1 + nine zeros)(**)
*/

let n = 1000000000000;

let nr = 1_000_000_000_000; // *

let billion = 1e9; // 1000000000
let billions = 7.4e9; // 7400000000

// *
let mcs = 0.000001;
let mcsE = 1e-6; // five zeros to the left from one
let x = 85e-8; // 0.0000085;

/* 
  -----------------------------
  Hex, binary and octal numbers
  -----------------------------

  Hexadecimal numbers are widely used in JS to represent colors, encoded
  characters, etc. An easier way to write them is 0x and then the number. (*)
  
  Binary and octal numbers are rarely used, and have the prefixes: ob and 0o(**)

  --------------
  toString(base)
  --------------

  the method num.toString(base), returns a string representation of num in 
  the numeral system with the given base.(***) The default base is decimal,
  the interval is from 2 to 36;

  Binary numbers are mostly used for debugging bitwise operations. 

  A useful thing is that when we need to make a long identifier into some-
  thing shorter, for example an url, we can use 36 base. 

  If we want a method directly on a number, we should use 2 dots(****), or
  parentheses, in my case the formater automatically puts parentheses. Why 
  we can't put one dot? Is because JS looks for a decimal part if there is
  a digit and a dot, so it gets the error. 
*/

// *

let a = 0xff;
let b = 0xffa5bb; // 16754107

// **
let bin = 0b110101110; // 430
let octal = 0o37765; // 12373

// ***
let num = 35;
let number = 89;
console.log(num.toString(16));
console.log(num.toString(2));
console.log(number.toString(36));

// ****
(576).toString(23);

/*
  --------
  Rounding
  --------
  
  Math.floor: rounds down: 6.3 = 6 | -1.1 = -2 | 0.9 = 0 | -0.1 = -1 (*)

  Math.ceil: rounds up: -2.1 = 2 | -2.9 = 2 | -0.1 = -0 | -0.9 = -0 | 1.1 = 2 (*)

  Math.round: rounds to the nearest integer
  -1.1 = -1 | -1.5 = -1 | -1.6 = -2 | -0.1 = 0 | -0.5 = -0 | -0.6 = 1 |
  1.1 = 1 | 1.5 = 2 (*)

  Math.trunc: removes anything after the decimal point without rounding
  1.5 = 1 | 2.9 = 2 | -1.3 = -1 (*)

  If we want to round a floating point nr 3.4567 to 2 digits after the 
  floating point, we can:
  1. Multiply and divide: multiply by 100, call the rounding function, and
  then divide it back(**)
  2. We can use .toFixed(n), which rounds the number to n digits after the 
  point and returns it as a string representation. (***) It round the last
  digit after the point. And we need to convert it into a number if this 
  is the case, as it is a string. If we will convert a number with 3 digits
  after the point to one with 5 after the point, then we should pay attention
  that there would be zeros in the string. (****)
*/

// *

Math.trunc(1.9); // 1
Math.ceil(1.5); // 2
Math.floor(5.4); // 5

// **
let numA = 3.4567;
let rounded = Math.round(numA * 100) / 100; // 3.46

// ***
let numB = 4.895876;
let numC = 4.75873;
let roundB = numB.toFixed(3); // 4.896
let roundC = numC.toFixed(3); // 4.759

// ****
let numV = 34.876;
let roundV = numV.toFixed(5); // 4.759

console.log(roundV); // 34.87600
console.log(typeof roundV); // string
let toNr = +roundV; // typeof number

/* 
  ----------------------
  Imprecise calculations
  ----------------------

  A number is represented by 64-bit format, 52 - store digits, 11 - store 
  position of the decimal point and 1 is for the sign.

  If a number overflows 64 bits, it becomes a special numeric value Infinity.(*)

  In the example (**), we can see a strange thing. Well this happens because
  in binary systems, where our numbers are actually stored in sequences of
  0 and 1, those numbers are actually unending fractions. In decimal number
  system 0.1 looks so simple, but in reality they are very long  numbers. 
  
  In decimal number systems, 1/10 which is 0.1 are easily representable, 
  while 1/3 is not, it becomes an endless fraction. So division by powers
  10 is guaranteed to work while by 3 is not. Similar situation for binary
  systems, division by 2 works perfectly, while by 1/10 becomes an endless
  binary fraction. 
  
  There is just no way to store exactly 0.1 or 0.2 as there is no way to 
  exactly store 1/3 as a decimal fraction. 

  We can see the impression by opening more digits after the zero. (***)
  
  The most reliable method to work around the precision loose problem,
  it to use the method toFixed(n); (****)
*/

// *

console.log(3e350); // Infinity

// **
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

// ***
console.log((10 / 3).toFixed(100));
// 0.3333333333333333148296162562473909929394721984...
console.log((1.3).toFixed(100));
// 1.3000000000000000444089209850062616169452667236328125

// ****
let sum = 0.1 + 0.2;
console.log(sum.toFixed(3)); // 0.300

/* 
  -------------------------
  Tests: isFinite and isNaN
  -------------------------

  isNaN takes the argument, converts it and checks if it is NaN. We cannot
  use === NaN, because NaN is not equal to anything, nor to itself.(*)

  isFinite converts the argument to a number, and returns true if it is a 
  regular number, not NaN/Infinity/-Inifity

  Sometimes isFinite is used to validade whether a string is a regular 
  number. (***)
*/

// *
let string = "some text";
console.log(isNaN(string)); // true
console.log(isNaN(NaN)); // true
console.log(NaN === NaN); // false

// **
console.log(isFinite("748")); // true -> string converted to nr
console.log(isFinite("abc")); // false -> NaN
console.log(isFinite(NaN)); // false till line $
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity)); // $
console.log(isFinite(989034589035489083)); // true

// ***
// let numberA = +prompt("enter a nr", "nr...");
// console.log(isFinite(numberA));

/* 
  --------------------------------
  Number.isNaN and Number.isFinite
  --------------------------------

  Those 2 are more strict versions of isNaN and isFinite. They do not 
  autocovert their argument into a number, but check if it belongs to.

  Number.isNaN(value) returns true if the argument belongs to number and
  it is NaN. (*)

  Number.isFinite(value) returns true if the argument belongs to the 
  number type and it is not NaN/Infinite/-Infinity(**)

*/

// *
console.log(Number.isNaN(NaN)); // true
console.log(typeof NaN); // number
console.log(isNaN(NaN)); // true

console.log(Number.isNaN("str" / 2)); // true
console.log(typeof ("str" / 2)); // number
console.log(isNaN("str" / 2)); // true

console.log(Number.isNaN("str")); // false
console.log(typeof "str"); // string
console.log(isNaN("str")); // true

// **

console.log(Number.isFinite(123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(2 / 0)); // false (weird result(infinity) by the way!)

console.log(Number.isFinite("123")); // false
console.log(isFinite("123")); // true

/* 
  --------------------------
  Comparisons with Object.is
  --------------------------
  
  Object.is() compares two values for strict equality, but it has an interesting
  feature, it result in true when compare to NaN values(*), and it differentiate
  0 and -0, which is technically correct.(**)

*/

// *
console.log(Object.is(NaN, NaN)); // true

// **
console.log(Object.is(0, -0)); // false

/*
  -----------------------
  parseInt and parseFloat
  -----------------------

  Those two functions are very handy when we need to extract the number from
  a string that has other characters beside the number itself, like '100px' in
  css and maybe '12$'. So with the + or Number(), we cannot do that.(*) As we
  can see we get NaN. They read a number from a string untill they can't, in 
  case of an error, the gathered number is returned. (**)

  By unsing the second argument of parseInt(str, radix), we can specify the base
  of the numeral system in the first argument, so we can parse strings of 
  hex, binary, etc. (***)

*/

// *
Number("23px"); // NaN
+"23px"; // NaN

// **
console.log(parseInt("1923px")); // 1923
console.log(typeof parseInt("1923px")); // number
console.log(parseInt("19.23px")); // 19 (returns integer)

console.log(parseFloat("19.2.3px")); // 19.2 (the second point stops the readingk)

console.log(parseFloat("a123")); // NaN (the first digit stops reading)

// ***
console.log(parseInt("0xfc", 16)); // 252
console.log(parseInt("101110101010111", 2)); // 23895

/* 
  --------------------
  Other math functions
  --------------------

  JavaScript has a small library called Math with functions and constants. (*)
  There are more function to see in the object Math. 
*/

console.log(Math);
console.log(Math.random()); // returns a random nr from 0 to 1(not including 1)
console.log(Math.max(1, 2, 5, 3, 2, 0, 7, 3)); // max nr in the list
console.log(Math.min(1, 2, 5, 3, 2, 0, 7, 3)); // min nr in the list
console.log(Math.pow(3, 8)); // raises n to given power
