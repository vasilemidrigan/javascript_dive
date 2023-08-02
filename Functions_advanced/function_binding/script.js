"use strict";
/* 
  Function binding

  Losing 'this'

  When we pass an objects method to setTimeout, it looses 'this', because it
  is called from outside the object. (*)

  One solution is to use a WRAPPER, it works because it takes 'this' from 
  outer lexical environment. (**)

  There is a minus though with this approach (***) If before setTimeout 
  triggers user, the user changes its value, then we call the wrong object. 
*/

// *

let obj = {
  name: "leo",
  hi() {
    console.log(`hi ${this.name}`);
  },
};

setTimeout(obj.hi, 1000); // hi

// **

setTimeout(function () {
  obj.hi(); // hi leo
}, 1500);

setTimeout(() => obj.hi(), 1500); // hi leo

// ***
let obj1 = {
  hi() {
    console.log("Another user here!");
  },
};

setTimeout(() => obj1.hi(), 2000);

obj1 = {
  hi() {
    console.log("Another user here!");
  },
};

/* 
  bind
  ----

  We bind a 'this' to a function. We stick 'this' to a function. (*)

  Arguments are passed as is(**)

  binding an object method // ***
  ------------------------

  We can also use bindAll for binding all methods from the object. 
*/

// *
let user = {
  name: "Leonardo",
};

function greet() {
  console.log(`Hi ${this.name}, how are you?!`);
}

let greetLeo = greet.bind(user);

greetLeo();

// **
let userA = {
  name: "Leonardo",
};

function greetA(mood) {
  console.log(`Hi ${this.name}, how are you?! Are you ${mood}?`);
}

let greetLeoA = greetA.bind(userA);

greetLeoA("happy");

// ***

let person = {
  name: "Leonardo",
  hi(mood) {
    console.log(`hi ${this.name}! Are you ${mood}`);
  },
};

let sayHi = person.hi.bind(person);

sayHi("happy"); // works

setTimeout(sayHi("happy"), 1000); // works

// doesn't matter that the object changes, sayHi is binded to the old object.
person = {
  hi() {
    console.log("another person");
  },
};

/* 
  Partial Functions

  We can bind this, but we can bind arguments too. 

  A partial function is an independent function with a readable name, 
  that has predefined arguments, is a less universal variant of a generic
  function. (*) We set null for this, as we don't need it here but is re-
  quired to specify, and the first argument. 
*/

// *

// generic function
function multiply(a, b) {
  return a * b;
}

// partial function
let double = multiply.bind(null, 2);
let triple = multiply.bind(null, 3);

double(3); // 6
triple(3); // 9
