/* 
  -----------
  Comparisons
  -----------
  
  A comparison returns a boolean value (*)

  Characters from a string are compared in accordance to Unicode order. 
  
  The logic of comparing two strings is that it iterates over first 
  character, compares them, if they are equal, then move to the next
  one, if they aren't equal, then the string with the current character
  that is greather is the greather string actually, even if the length
  of the actual string is smaller than the other one. **

  ! It is not recommended to compare variables with comparisons if
  one of them may be undefined or null, unless we are really sure
  about what we are doing. 
*/

let bool = 4 < 2; // false

console.log("%" > "$"); // true
console.log("A" < "C"); // true
console.log("a" > "b"); // false

let string = "data";
let string1 = "data1";
let string2 = "db";

console.log(string > string1); // false
console.log(string2 > string1); // true **

/* 
  -----------------------------
  Comparison of different types
  -----------------------------

  When comparing values of different types, JavaScript converts them 
  to numbers.
*/

let boo = true;
let bo = false;

let foo = "2";
let bar = 1;

console.log(boo > bo); // true 1 > 0
console.log(boo > foo); // false  1 > 2
console.log(bar < bo); // false 1 < 0
console.log(foo == 2); // true

// funny case
let a = 0; // false
let b = "0"; // true
console.log(a == b); // true (because 0 == 0)

/* 
  ---------------
  Strict equality
  ---------------
  
  The problem with '==' equality check is that it cannot differentiate
  0 from false or '' from false (*)

  For this problem we have strict equality '===' or triple equality, it
  check equality without type conversion, so if the operands aren't equal,
  the expression returns false. (**)

  There's also strict non-equality and simple non-equality checks (***) 

  Strict equality usually is better to use in order to leave less room 
  for errors.
*/

console.log(0 == ""); // * all 3 are true
console.log(0 == false);
console.log(false == "");

console.log(0 === ""); // ** all 4 are false
console.log(0 === false);
console.log(false === "");
console.log(4 === "4");

console.log(4 != "4"); // *** false (because 4 == 4)
console.log(4 !== "4"); // *** true (because number != string)

/* 
  ----------------------------------
  Comparison with null and undefined
  ----------------------------------

  null is not strict equal to undefined (*)

  null and undefined are equal to each other (**)

  When comparing by using < > <= =>, null becomes 0 and
  undefined becomes NaN (***)

  When comparing null, even if it is strange, we have to take
  in account how JS perform comparison using null: equality 
  check and comparisons works differently, comparisons converts
  null to a number, specifically to 0, equality on the other
  hand equal null with undefined, and don't equal anything else (****)

  Comparing undefined to other values than itself and null, will 
  give false, because undefined is only equal to itself and null, 
  it is not strict equal to anything else other than itself, and
  when using comparisons, undefined is converted to NaN, so NaN
  on the other hand is not equal to anything else (#)
*/

console.log(null === undefined); // * false
console.log(null == undefined); // ** true

console.log(null > 0); // **** false (because 0 == 0)
console.log(null == 0); // **** false (because null == undefined only)
console.log(null === 0); // **** false (because they are different types)
console.log(null >= 0); // **** true (because 0 >= 0)

console.log(undefined > 0); // # all false untill line $
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined == 0);
console.log(undefined === 0); // # $
console.log(undefined === undefined); // true
console.log(NaN === NaN); // # false
console.log(NaN == NaN); // # false
