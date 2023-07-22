/* 
  ------------------------------
  Conditional branching: if, '?'
  ------------------------------
    
  if the condition in parenthesis is true, then it executes the statement (*)

  if there is more than one statement, we should wrap it into {} (**)
*/

let num = 1;
if (num == 1) console.log("num is equal to 1"); // *

if (num >= 1) {
  // **
  num++;
  console.log(num);
}

/* 
  ------------------
  Boolean Conversion
  ------------------

  If we will use a falsy value into our if condition, then it will never run

  If we will use a truthy value, then obviously it will fun

  We can also pass a pre-evaluated boolean value

  When the condition of if statement is falsy, we can use an 
  else condition as well (*)

  or even more, we can use else if for multiple conditions checking 
  like in the if statement (**)
*/

if (0) console.log("this code never runs"); // all 3 are falsy
if (false) console.log("this code never runs");
if (undefined) console.log("this code never runs");

if (1) console.log("this code will always run"); // all 3 are truthy
if (true) console.log("this code will always run");
if ("a") console.log("this code will always run");

let time = "evening";
let alarmOn = time == "evening";

if (alarmOn) console.log("Alarm is on."); // alarmOn is true

if (time == "morning") {
  console.log("Alarm is off.");
} else {
  // *
  console.log("Alarm is on.");
}

// **
if (time == "morning") {
  console.log("Alarm is off.");
} else if (time == "lunch") {
  console.log("Alarm is in sleep mode.");
} else if (time == "night") {
  console.log("Alarm is in active mode.");
} else {
  console.log("Alarm is on.");
}

/* 
  --------------------
  Conditional operator 
  --------------------

  Conditional or quesiton mark operator is the only ternary operator in JS.(*)

  let x = condition ? value1 : value2;
  If condition is true, then value1 is returned, otherwise value2 is returned. 

  When we need to assign a boolean value from an expression, usually we don't 
  need to use coditional operator (**)
  
  We can use multiple conditional operators for more complex checks (****)
  This expression is equal to the if statement (#)

  There is one more case where we can use conditional operator, but it is not
  recomended to use it, as it is not so readable as a simple if else 
  statement (##)
*/

let n = 10;

let nr = n > 10 ? 5 : 2; // * 2 (false)
let nr1 = n == 10 ? 5 : 2; // * 5 (true)

let bool;
bool = n > 10 ? true : false; // ** (instead we can simply do like on line ***)

let boo;
boo = n > 10; // *** because the expression itself returns a boolean

let age = 46;
let bar =
  age < 18 ? "minor" : age < 23 ? "adolescent" : age < 50 ? "adult" : "old";
console.log(bar);

// #
if (age < 18) {
  ("minor");
} else if (age < 23) {
  ("adolescent");
} else if (age < 50) {
  ("adult");
} else {
  ("old");
}

age == 45 ? console.log("He is 45!") : console.log("He is not 45"); // ##
