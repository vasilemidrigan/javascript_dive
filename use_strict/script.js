/*
  ----------
  use strict
  ----------

  For a long time, JavaScript evolved without compatibility issues, because
  new features where added, but older ones didn't changed, so from one side
  this was pretty convenient as the code didn't break, but from another side, 
  creators of JS where stuck to their mistakes or imperfect decisions from 
  the past. 

  In 2009, with ES5, this changed, as there where added new features and mo-
  dified some of existing ones. In order to keep the old code to run, those
  new implementations are off by default, and to enable them, we need to 
  explicitly use a special directive: "use strict";

  Using use strict, we're using the modern way of working with JavaScript.

  We can only use strict mode in a certain portion of code, for example
  in a function, we can insert the instruction at the top of the function and
  it will work only for that specific function.
  
  To enable strict mode for the whole file, place it at the top of the file, otherwise, it will not work. 

  Usually, browser developer tools, works without strict mode, so we should
  declare it when working there.

  Classes and modules enables strict mode automatically, so we don't have
  to explicitly declare it when working with those features. 

*/

// a class is automatically in strict mode
class Person {
  constructor(name) {
    this.name = name;
  }
  hi() {
    greet = "Hey buddy";
    console.log(greet);
  }
}

let person = new Person("Jovanni"); // Error: greet is no defined
person.hi();

// a function without strict mode
function y() {
  z = 10; // do not explicitly declare a variable
}
y(); // No errors

// a function which has strict mode
function x() {
  "use strict";
  y = 10;
}
x(); // Error: y is not defined
