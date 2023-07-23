/*
  --------------------
  Loops: while and for
  --------------------

  Loops are a way to reapeat code multiple times.

  A single execution is called an iteration. 
*/

/* 
  ----------------
  The 'while' loop
  ----------------
  
  while(condition) {
    // loop body
  }

  While the codition is true the loop executes over and over again. (*)

  Any expression or variable can be a loop condition, not just comparisons, 
  while loop evaluates the condition and converts it to a boolean. In the
  example (**) we can write in condition while(j != 0), or we can simply
  put it in this way while(j), so while j is true which basically means
  while j is not equal to 0 - the loops iterates. 

  For a single line body, curly braces are not required. (***)
*/

// *
let i = 0;
while (i <= 5) {
  console.log(`n is ${i}`);
  i++;
}

// **
let j = 3;
while (j) {
  console.log(`j is ${j}`);
  j--;
}

// ***
let g = 3;
while (g) console.log(g--);

/*
  ---------------------
  The 'do...while' loop
  ---------------------
  
  do {
    loop body
  } while(condition)

  Usually this loop is used if we want to execute the loop at least once,
  regardless the codition. It will run once, and then check the condition, 
  if it is true it iterates further, otherwise it stop, but it iterates at 
  least once. (*)
*/

// *
let v;
do {
  console.log(`v is ${v}`);
  v--;
} while (v);

/* 
  --------------
  The 'for' loop
  --------------

  The most commonly used loop.

  for(begin; condition; step) {
    loop body
  }
  begin - executes once upon entering the loop
  codition - checked before every iteration
  body - runs every time the codition is truthy
  step - executes after the body on each iteration 

  Generaly what is happening is: 
  Run begin
  if condition -> run body and run step
  if condition -> run body and run step
  if condition -> run body and run step
  ...
 
  The variable i declared inside the loop is called an inline variable, 
  it is not visible outside the loop. (*)

  We can skip any part of the loop, we can skip the begin (**) if we 
  don't need to do anything at the start, for example if we have a 
  global variable that we'll use.

  We can also remove the step part, and our loop becomes identical to 
  the while loop. (***)
  
  Or we can create an infinite loop. (****)

  Or we can skip the condition, and write it inside the loop in order
  to prevent the infinite iterations. (#)

*/

// *
for (let i = 0; i < 3; ++i) {
  console.log(i);
}

// **
let e = 3;
for (; e; --e) {
  console.log(e);
}

// ***
let u = 3;
for (; u; ) {
  console.log(--u);
}

// ****
for (;;) {
  let nr = prompt("Enter nr: ", "number...");
  if (+nr > 0) {
    break;
  }
}

// #
for (let p = 0; ; ++p) {
  console.log(p);
  if (p >= 5) {
    break;
  }
}

/* 
  -----------------
  Breaking the loop
  -----------------

  We can force the loop the exit when we need by using the break keyword. (*)

  The combination of an infinite loop and break is great for situations when 
  we need to check the condition during the loop iteration, not on start or 
  in the end. 
  
*/

// *
let diff = 100;
while (true) {
  let subtract = +prompt("How much to subtract?", "nr...");
  if (!subtract) break;
  diff -= subtract;
}

console.log(diff);

/* 
  ------------------------------
  Continue to the next iteration
  ------------------------------

  If we need to skip this iteration and go to the next imediatelly, we can use
  continue keyword. (*) In this example we don't show even numbers, only odds 
  ones. 

  Using continue directive, we decrease nesting levels. Here in the example 
  we are using an if statement instead of continue. Which in general 
  isn't better for readability, especially if inside the if statement
  we have more lines of code. (**)

*/

// *
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}

// **
for (let i = 0; i < 11; i++) {
  if (i % 2) {
    console.log(i);
  }
}
