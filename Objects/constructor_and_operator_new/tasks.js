/* 
  Is it possible to create functions A and B so that new A() == new B()?

  function A() { ... }
  function B() { ... }

  let a = new A();
  let b = new B();

  alert( a == b ); // true

  TO FINISH!!!
  ------------ 
*/

/* 
  Create a constructor function Calculator that creates objects with 3 methods:

  read() prompts for two values and saves them as object properties with names 
  a and b respectively.
  sum() returns the sum of these properties.
  mul() returns the multiplication product of these properties.
*/

function CalculatorA() {
  this.read = function () {
    this.a = +prompt("value a");
    this.b = +prompt("value b");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calc = new CalculatorA();
calc.read();
console.log(`calc sum is `, calc.sum());
console.log(`calc product is `, calc.mul());

/* 
  Create a constructor function Accumulator(startingValue).

  Object that it creates should:

  Store the “current value” in the property value. The starting value is 
  set to the argument of the constructor startingValue.
  The read() method should use prompt to read a new number and add it to value.
  In other words, the value property is the sum of all user-entered values 
  with the initial value startingValue.

  Here’s the demo of the code:

  let accumulator = new Accumulator(1); // initial value 1

  accumulator.read(); // adds the user-entered value
  accumulator.read(); // adds the user-entered value

  alert(accumulator.value); // shows the sum of these values
*/

function Accumulator(startValue) {
  this.value = startValue;

  this.read = function () {
    return (this.value += +prompt("Value?"));
  };
}

let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value);
