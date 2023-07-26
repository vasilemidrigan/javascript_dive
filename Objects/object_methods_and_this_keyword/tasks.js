"use strict";

/* 
  Create an object calculator with three methods:

  read() prompts for two values and saves them as object properties 
  with names a and b respectively.
  sum() returns the sum of saved values.
  mul() multiplies saved values and returns the result. 
*/

let calculator = {
  read() {
    this.a = +prompt('Enter value "a": ', "value...");
    this.b = +prompt('Enter value "b": ', "value...");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
let sum = calculator.sum();
let prod = calculator.mul();

/* 
  There’s a ladder object that allows to go up and down: (*)
  
  How do we do in order to be able to chain our method like on
  the line (**), so we will not be forced to do like in the block
  (***)

  // ***
  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  ladder.down();
  ladder.showStep(); // 0

  What we need to do is to return this object in all our
  methods, so by calling a method, we can chain another
  because the previous method return this object. (#)
*/

// *
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // #
  },
  down() {
    this.step--;
    return this; // #
  },
  showStep: function () {
    console.log(this.step);
    return this; // #
  },
};

ladder.up().up().down().showStep().down().showStep(); // **
