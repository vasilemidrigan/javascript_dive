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
  it to use the method toFixed(n); (****) Though we can't totaly remove
  the imprecision. 
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
