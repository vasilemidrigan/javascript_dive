"use strict";

/* 
  Arrow Functions
  ---------------

  Arrow functions have no 'this', it is taken from the outside. 

  Arrow functions can't be called with new, as they do not have this. 
  
  There are a lot of situations when we create a function and pass it
  somewhere, but we don't want to leave the current context. 

  Arrow Function have no 'this'
      -----------------------------

  'This' is accessed from the outside. For example, in the example below, 
  if, we run foreach with arrow function it will work because it takes
  the this from outside, if we'll run foreach with a regular function it
  will not work as foreach has this=undefined. (*)
 
*/

// *

// don't work
let user = {
  name: "Leonardo",
  friends: ["Eleonora", "Pedro", "Gabriela"],
  sayHi() {
    this.friends.forEach(function () {
      console.log(this);
    });
    console.log(this);
  },
};

user.sayHi();

// works
let user1 = {
  name: "Leonardo",
  friends: ["Eleonora", "Pedro", "Gabriela"],
  sayHi() {
    this.friends.forEach(() => {
      console.log(this);
    });
    console.log(this);
  },
};

user1.sayHi();

// *
