/* 
  ----------------
  Type Conversions
  ----------------
    
  Usually, operators and functions, automatically convert the values to 
  the right type. For example alert converts to string, Math converts
  to number, etc. 

  There are cases when we need to explicitly convert a data type to another.
*/

/* 
  -----------------
  String conversion
  -----------------
  
  String(value) converts the value to string.
*/

let nr = 45;
let toStr = String(nr);
console.log(toStr); // '45'
console.log(typeof toStr); // string

/* 
  ------------------
  Numeric conversion
  ------------------
    
  The conversion happens automatically in mathematical functions and 
  expressions. (*)

  ! If we have to strings and a plus operator, then we concatenate the
  strings, we are not performing mathematical operation(**)

  If the result of a conversion is not a valid number, then we get
  the NaN. (***)
  
*/

let sum = "1" / "56"; // *

let n = "867";
let toNr = Number(n);

console.log(typeof sum); // number
console.log(typeof toNr); // number

let notMathConversion = "3" + "5"; // '35' **

console.log(Number("4i")); // NaN ***
console.log(Number("a")); // NaN ***

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("   8   ")); // 8
console.log(Number("   8n   ")); // NaN
console.log(Number("  hi  8 ")); // NaN

/* 
  ------------------
  Boolean Conversion
  ------------------
  
  0, "", null, undefined, NaN, are all false on conversion, other values
  are true.
*/

console.log(Boolean(0)); // false till line (*)
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // *
console.log(Boolean(1)); // true till the end
console.log(Boolean("text"));
console.log(Boolean(" "));
console.log(Boolean(-1));
