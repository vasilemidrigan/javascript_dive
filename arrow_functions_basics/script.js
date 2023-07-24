/* 
  ---------------
  Arrow Functions
  ---------------

  Arrow Functions has a very simple and concise syntax, and often 
  better option than function expressions.

  let func = (arg1, arg2, ..., argN) => expression;

  It is a shorter version of function expression. (*)

  If there is only one argument, we can omit parentheses. (**) In 
  this case my code formatter doesn't allow me to do that. 
  
  If there is no argument, parentheses are required. (***)

  Arrow functions are very handy in cases when we need a single 
  line actions. There is just less code to write. (#)

  The syntax for a multiline arrow function is pretty familiar. (##)
*/

// *
let pow = (a, b) => a ** b; // Arrow Function

// let pow = function (a, b) {     Function Expression
//   return a + b;
// };

// **
let returnNR = (n) => n;

// ***
let hi = () => "hi";

// #
let name = "Leonardo";
function hiYou(message) {
  message();
}
hiYou(
  name == "Leonardo"
    ? () => console.log("Hi Leo")
    : () => console.log("Hi Stranger")
);

// ##
let sayHi = () => {
  let name = "John";
  console.log(`Hello ${name}`);
};
