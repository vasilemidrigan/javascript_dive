/* 
  ----------
  Ninja Code
  ----------

  Avoid short code when it makes reabadility harder. Don't use subtle 
  features of the language if it makes the code pretty hard to read. 
  Shorter code is not always better.(*)

  Avoid one letter variables. What is the meaning of the variable? A 
  variable name should provide meaning.(**)

  Avoid abbreviations use. It is confusing to understand what this
  combination of letter was supposed to be.(***)

  Don't use abstract names. Be more precise.(****)

  Avoid using similar variable names like date and data. (#)

  If we have 2 function that check something, avoid to use different
  verbs like checkLogin and validateEmail. If both functions have the
  same purpose, don't use confusing verbs. A good approach would be:
  checkLogin and checkEmail. (##)

  Or another case: two functions with important differences - use the 
  same prefix. Don't do that. Use the different prefixex if functions
  are different. Instead of printPage(page) and printText(text), use
  printPage(page) and logText(text) for example; (##)
  
  Do not reuse variables, do not reassign them without a good reason.
  Create new variable when there is a need. Do not make it hard to 
  understand what is the value of the variable in this certain step. 
  
  Do not use underscores for fun, there are certain cases when to use
  them.

  Avoid magnificent variable names like: ultraBox, niceLogin, 
  sharpEmail. 
  
  When possible, avoid shadow a global variable with a local one. Do
  not use the same names for variables.

  Do not implement unnecessary side-effects in a function that is 
  supposed to do one thing and only one. If we have the function
  validatePassword, this function is supposed to only validate the
  password, it is not supposed to show the error. 

  If the function checkLogin is supposed to return a true/false, avoid
  return something else, by the function name, is clear, it should re-
  turn a boolean. 

  One function - one action. 
*/

// *
let i;
i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0;

// **
let a = 1;
let b = 3;

// ***
let lst; // list
let clr; // color
let hdr; // header

// ****
let obj;
let value;
let item;
let info;

// #
let date;
let data;

// ##
let isRaining = true;
let number = 4;
function checkWeather(bool) {
  if (bool) return true;
  return false;
}
// the prefix check is reasonable in this case, as we already have
// one function above with this prefix returning a boolean;
function checkNumber(num) {
  if (typeof num == "number") return true;
  return false;
}

checkWeather(isRaining); // true
checkNumber(number); // true
