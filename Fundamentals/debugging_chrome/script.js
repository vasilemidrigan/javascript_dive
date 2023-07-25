/*
  -------------------
  Debugging in Chrome
  -------------------

  Debugging is the proces of finding and fixing errors within a script. 

  All modern browsers have debugging tools - a special UI in developer
  tools that makes debugging easier, and allows to trace the execution
  of our code step by step. 

  In chrome, our debugger is located in the Sources tab, which consist
  from 3 parts: File Navigator, Code Editor and JS Debugging. 

  A breakpoint - is a point of code where debugger will automatically
  stop during the execution of code. 

  We can create conditional breakpoints, it will stop only if the 
  condition is meet, that's very handy during debugging. 

  We can also pause the code by using 'debugger' command inside our 
  JS code. It will work only if the dev tools is open, otherwise, 
  the browser will ignore it. So we can reason that such instructions
  are developed only for debugging purposes. (*)
  
  In our debugger, Watch section shows current values for any expressions, 
  we can input an expression, and it will show its value. 

  Call Stack section, shows nested calls chain.

  Scope - shows current variables, local function variables, and global ones.
  Here we can see the 'this' object as well.
*/

function hello() {
  console.log("hello");
}

debugger; // *

hello();

let x = 10;

console.log(x);

/*
  ---------------------
  Tracing the execution
  ---------------------

  Resume - resumes the execution untill the next breakpoint, if there is no 
  any, then it executes the hole code. 

  Step - Run the next statement. It runs through each statement one by one. 
  It ignores async function calls.

  Step over - run the next command, but don't go into a function. If we are
  not interested in what is happening in the function internals, we can skip
  them and it will pause immediatelly after the function call. 

  Step into - it is similar to step, but behaves differently in async 
  function calls. It goes into async function calls.

  Step out - continue the execution till the end of the current function.

  enable/disable automatic pause in case of an error - this is very handy
  when for example our script dies, and we cannot understand where, so we
  enable this feature and see where the error is thrown, the debugger will
  stop there. 

  Continue to here - a great option when we want to continue the execution
  from a specific line. (Right click on the line and select it)

  Another famous tool in debugging is console.log(), we can log pretty
  much all we need in order to find the error. 
*/
