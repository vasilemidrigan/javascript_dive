/* 
  setTimeout and setInterval

  We can schedulle a call by using those two functions. 

  setTimeout - run once after the interval of time
  setInteval - runs repeatedly starting after the interval of time, then
  repeating continuously at that interval. 

  setTimeout

  The parameters are: function to execute, delay, the arguments for the function.

  If the first argument is a string it will try to execute it as a function(*)
  Though this approach is not recommended. 

  We can use arrow functions(**)

  Passing argument to function(***)

  Do not call the function inside setTimeout. setTimeout expects a reference
  to the function, not a function call.(****) So in the
*/

// *

setTimeout('console.log("hi")', 1000); // works

// **

setTimeout(() => console.log("arrow runs!"), 2000);

// ***
function sayHi(phrase, whom) {
  console.log(`${phrase} ${whom}`);
}

setTimeout(sayHi, 500, "Hey there!", "Cowboy");

/* 
  Canceling with clearTimeout
  
  If for some reason we changed our mind to run the setTimeout, we can
  cancel it with clearTimeout;

  By assigning our setTimeout to a variable, we get an id, a number, so
  we can use it to cancel the call. (*) 
*/

// *

let timerId = setTimeout(sayHi, 3000, "Hey!", "buddy");
let timerId1 = setTimeout(sayHi, 3000, "Hey!", "buddy");

console.log(timerId); // 4
console.log(timerId1); // 5

clearTimeout(timerId);
clearTimeout(5);

/* 
  setInterval

  The same syntax as setInterval. (*) Note that when we create a timer id, 
  the setInterval, or setTimeout as well, it runs. 

  To clear the call to setInterval we need to call clearInterval(timerId), 
  as with setTimeout above. (**)


*/

// *

timerID = setInterval(sayHi, 3500, "Hello", "John");

// **

clearInterval(timerID);

/* 
  Nested setTimeout

  We can run something regularly with setInterval, but we can do that with
  setTimeout as well. (*)

  With setTimeout we can create a more flexible next call, we can create 
  new call depending on the output of the first one. (**)

  Nested setTimeout allows to set delays between executions more precisely
  than setInterval. 
*/

// *

let timerId2 = setInterval(() => console.log("tik-tak"), 2000);

let timerId3 = setTimeout(function tick() {
  console.log("TIK-TAK");
  timerId3 = setTimeout(tick, 2000);
}, 2000);

/* 
  Zero delay setTimeout 

  If we set the delay to 0, the setTimeout will run immediately after the
  current script is executed. So in this example, setTimeout will run
  only after the console.log(), even though it is before the console.log(*)
*/

// *

setTimeout(() => console.log("I am second!"));

console.log("I am first");
