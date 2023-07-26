"use strict";
/* 
  ------------------------------
  Constructor and operator 'new'
  ------------------------------

  {...} syntax allows us to create one object, but when we need to create
  many similar objects, like users, cards, etc, we can use constructor and
  operator 'new'.

  --------------------
  Constructor Function
  --------------------

  Technically, constructor functions are regular functions, with 2 conventions
  though: (*)
  1. They are named with capital letter first.
  2. They should be executed with only 'new' operator. 

  When a function is executed with new: (**)
  1. A new object is created and assigned to this.
  2. The function body executes, usually it modifies 'this', adds new properties
  to it.
  3. The value of this is returned. 

  The code in (**) is exactly the same as doing: (***), but using constructors
  is so much faster and easier. This is the main purpose of constructors -
  Implement reusable object creation code: (#)

  Any function, except arrow functions(cause they don't have 'this'), can be
  used as a constructor. (##)

  If we have a complex object with a lot of code inside, we can wrap it into 
  an immediately called constructor function. This constructor can't be 
  called again, it is not saved anywhere, just created and called, we cannot
  reuse it. (##)

  The capital letter first, is a common agreement that the function is run with
  new operator. We can do the same without capitall letter, but it is not
  recommended at all. (###) 

  JavaScript provides constructor function for many built-in language objects
*/

// *

function Animal(category, isPredator) {
  this.category = category;
  this.isPredator = isPredator;
}

// **
let lion = new Animal("cats", true);

console.log(lion);

// ***
let tiger = {
  category: "cats",
  isPredator: true,
};

// #
let eagle = new Animal("birds", true);
let opposum = new Animal("large rats", "false");
let duck = new Animal("birds", "false");

// ##
let user = new (function () {
  (this.name = "John"), (this.surname = "Doe");
})();

// ###

function tree(category, specie) {
  (this.category = category), (this.specie = specie);
}

let willow = new tree("deciduous", "willow");
console.log(willow);

/* 
  ---------------------------------
  Constructor mode test: new.target
  ---------------------------------

  Inside the function, we can check if it was called with 'new' operator 
  or not, by using new.target . It is undefined for regular calls and
  equal to the function if called with new. (*)

  As an example that is used in libraries for example, is to check if 
  the function was called with 'new' operator, and if is not, then 
  return an object called with new: (**) This is usually implemented 
  for a faster code writing, but in our case is better to stick to 
  the language in order to understand what is happening really. 
  So in this example (**), is like it was:
  let mamaliga = new Dish('mamaliga', 'Moldova');

*/

// *
function Cars(make, model) {
  console.log(new.target);
}

let rangeRover = new Cars("Range Rover", "Land Rover"); // function source code
let volvo = Cars("Volvo", "S60"); // undefined

// **
function Dish(mainProduct, location) {
  if (!new.target) {
    return new Dish(mainProduct, location);
  }

  this.mainProduct = mainProduct;
  this.location = location;
}

let mamaliga = Dish("mamaliga", "Moldova");
console.log(mamaliga);

/* 
  ------------------------
  Return from constructors
  ------------------------

  Usually constructors don't have the return statement, they just write
  all necessary stuff into 'this'.

  But if it has a return: if the return is called with an object, then the
  object is returned instead of this, if the return is called with a 
  primitive, then it is ignored. (*)

  One more thing: we can omit parentheses, but it is not considered a good
  style.

*/

// *

function Currency(state, symbol) {
  this.state = state;
  this.symbol = symbol;

  return "money";
}
let dollar = new Currency("USA", "$");

console.log(dollar); // returns the constructor object

function Currency1(state, symbol) {
  this.state = state;
  this.symbol = symbol;

  return {
    status: "Hacked Object - Surprise, Sursprise",
  };
}
let euro = new Currency1("Ireland", "€");

console.log(euro);

/* 
  ----------------------
  Methods in constructor 
  ----------------------

  Using constructor functions give us a lot of flexibility, we can use
  parameters to define how to construct the object. Beside properties,
  we can also define methods as well. (*)

  To create more complex objects, there is a more advanced syntax called
  classes, which we'll cover later. 
*/
function Currency2(state, symbol) {
  this.state = state;
  this.symbol = symbol;
  this.name = "pound sterling";

  this.logCurrency = function () {
    console.log(`The currency of ${this.state} is ${this.name} ${this.symbol}`);
  };
}
let poundSterling = new Currency2("United Kingdom", "£");

poundSterling.logCurrency();
