/* 
  ------------
  Coding Style
  ------------

  Our code must be as clean and easy to read as possible. 

  That is actually the art of programming - take a complex task, and write
  in a way that is both correct and human-readable. 
  
  Lines should not be very long. 

  Leave a line between logical blocks.  (*)

  When writing if conditions, split them, avoid long lines. (**)

  When writing single line if statements (***)

  Split long lines (****)

  Avoid nesting levels, less of them is better for readability. For 
  ex. we can use continue directive instead of implementing another
  nesting. (#)

  Another example with if statements, is to avoid else when possible. (##)

  If we write helper function, and the code uses them, there are 3 ways
  to organize them: declare the functions above, when it is first used, or
  code first and then functions. Usually the last option is preffered. You 
  go through the code, if you understand it, it is ok, if not scroll down
  and see the function you don't understand.

  There are many style guides, it depends on the team, on which one they
  stop. Google JavaScript Style Guide, Airbnb JavaScript Style Guid, 
  Idiomatic.JS, etc. 

  Linters are tools that automatically check the style of your code and
  make improving suggestions.  
*/

// *
let x = 1;
let y = 2;
let z = 3;
let w = 4;

if (x > 1) {
  console.log("V");
}

// **
if (
  x == y ||
  x == z ||
  x == w ||
  y == false ||
  "the sky is blue" == true ||
  "another stupid comparison" == true
) {
  console.log(
    "a dumb illustration how to split a long line into \
   more readable code"
  );
}

// ***
if (true) console.log("is true"); // or even better bellow

if (true) {
  console.log("is true");
}

// ****
let string = `ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.`;

// #
for (let i = 0; i < 3; i++) {
  if (i == 2) {
    continue;
  }
}

for (let i = 0; i < 3; i++) {
  if (i == 2) continue;
}

// ##
let i = 3;

function isTwo() {
  if (i == 2) {
    console.log("i is 2");
    return;
  } else {
    console.log("is is not 2");
    return;
  }
}

function isTwo1() {
  if (i == 2) {
    console.log("i is 2");
    return;
  }
  console.log("is is not 2");
  return;
}
