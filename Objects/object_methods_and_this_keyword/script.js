"use strict";
/* 
  -------------------------------
  Object methods and this keyword
  -------------------------------

  Usually objects represet entities from real world, like users, 
  cards, etc.

  Actions in JavaScript are represented by functions in properties
  of an object. A function into an object is called a method. (*)

  We can use a predeclared function to assign as well. (**)

  We can use a shorthand syntax when declaring a method. In this 
  example, we have the long form(***), and in this the shorthand.(#)
  There is a little difference between those two syntaxes, but usually
  the shorthand is used, the difference is related to object in-
  heritance. 
*/

// *

let user = {
  name: "Leonardo",
};

user.smile = function () {
  console.log(" :) ");
};

user.smile();

// **

function play() {
  console.log("Lenardo is playing.");
}
user.play = play;
user.play();

// ***
let color = {
  id: "purple",
  whatColor: function () {
    return "purple";
  },
};

// #

let color1 = {
  id: "purple",
  whatColor() {
    return "purple";
  },
};

/* 
  -----------------
  'this' in methods
  -----------------

  To access the object, a method can use 'this' keyword. The value of 
  'this', is the object before dot, the one used to call the method.(*)

  Technically, we can access the object by using the outer variable(person).
  But a code in this style is unreliable. If we want a copy of this object, 
  then the method will access the wrong object, instead of doing its job,
  accessing the current object. (**)

  To avoid such confusions, we need to use this object, it will point to 
  the current object not to a specific reference(which was our variable
  fellow). (***)

  'this' has no value unitl the function is called, the value of this is 
  defined at run-time.
*/

// *

let person = {
  name: "Profira",
  hi() {
    // console.log(`Hi, I am ${person.name}`);
    console.log(`Hi, I am ${this.name}`);
  },
};

person.hi();

// **

let fellow = {
  name: "Damon",
  hi() {
    console.log(`hi ${fellow.name}`);
  },
};

fellow.hi(); // works as intended

let buddy = fellow;
fellow = null;
// buddy.hi(); ERROR

// (***)
let fellow1 = {
  name: "Damon",
  hi() {
    console.log(`hi ${this.name}`);
  },
};

fellow1.hi(); // works

let buddy1 = fellow1;

fellow1 = null;
buddy1.hi(); // works

/* 
  -------------------
  'this' is not bound
  -------------------

  The value of 'this' is evaluated during the run-time, depending
  on the context. In this example, 'this' points to different 
  objects. 'this' depends on the context it is called in. (*)
*/

let obj = {
  id: "obj",
};
let obj1 = {
  id: "obj1",
};

function logId() {
  console.log(this.id);
}

// logId(); // ERROR > because window doesn't have logId() method on it

obj.logId = logId;
obj1.logId = logId;

obj.logId(); // 'obj'
obj1.logId(); // 'obj1'

/* 
  ------------------------------
  Arrow functions have no 'this'
  ------------------------------

  Arrow functions doesn't have 'this'. If we have a this inside a such
  function, then it will take 'this' from the outer normal function. 

  That is by the way an interesting feature, because when we don't want
  to have a separate 'this', but take it from the outer context we can
  use arrow functions. So in this example we are using a function 
  declaration inside a method, so the function getName has 'this',
  and in this case 'this' points to undefined in strict mode and to 
  Window object without strict mode. So we get an error if we'll try
  that like in this example: (*) Instead, if the goal is to use the outer 
  'this', we can nest an arrow function, which will take the outer 
  'this', like here: (**)
*/

// *
let planet = {
  name: "Saturn",
  logData() {
    // function getName() {      ERROR
    //   console.log(this.name); // undefined
    // }
    let getName = () => {
      console.log(this.name); // 'Saturn'
      console.log(this); // planet object
    };
    getName();
  },
};

planet.logData();
