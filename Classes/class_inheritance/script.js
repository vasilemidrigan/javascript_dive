/* 
  Class Inheritance
  -----------------

  Class inheritance is a way for one class to extend another class, creating
  functionality on top of the existing. 

  The 'extends' keyword
  ---------------------
  
  Creating class that extends (inherit) another class. (*) Internally,
  extend keyword just works with prototype mechanics. It sets 
  Rabbit.prototype.[[Prototype]] to Animal.prototype, so if a method is
  not found in Rabbit.prototype, it takes it from Animal.prototype.

  We can use any expression after extends keyword, it can be for example,
  a function that returns a class.
*/

// *

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`This ${this.name}, runs with ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`This ${this.name}, stands still`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.hide();
rabbit.run("200km/h");

/* 
  Override a method
  -----------------

  If we specify our own method inside a class that inherits from another,
  then it will execute the method from the class, JS will not search for 
  the same method up in the chain.(*)
*/

// *

class AnimalX {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`This ${this.name}, runs with ${this.speed}`);
  }
}

class RabbitX extends AnimalX {
  run(speed) {
    this.speed = speed;
    console.log(`Run speed: ${this.speed}`);
  }
}

let blackRabbit = new RabbitX("Black Rabbit");

blackRabbit.run("150km/h"); // Run speed: 150km/h

/* 
  'super' keyword
  ---------------

  Usually though, we don't want to totally replace the parent method, but 
  instead modify it or maybe build something on top of it(*)
  
  Classes provide 'super' keyword for these situations:
  - super.method(...) to call parent method
  - super(...) to call parent constructor(inside our constructor only)

  Arrow function do not have super, it takes it from the outer function.(**) 
*/

// *
class AnimalY {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`This ${this.name}, runs with ${this.speed}`);
  }
  stop() {
    this.speed = 0;
    console.log(`This ${this.name}, stands still`);
  }
}

class RabbitY extends AnimalY {
  run(speed) {
    this.speed = speed;
    console.log(`Run speed: ${this.speed}`);
  }
  hide() {
    console.log(`${this.name} hided!`);
  }
  stop() {
    super.stop();
    this.hide();
  }
  // ** Arrow function takes super from the outer function, from scare()
  //    with a regular function it will give a error
  scare() {
    (() => {
      super.run("500km/h");
    })();
  }
}

let redRabbit = new RabbitY("Red Rabbit");

redRabbit.stop(); // Red Rabbit hided!
redRabbit.scare();

/* 
  Overriding constructor 
  ----------------------

  If a class extends another, and it has no constructor, then an empty one
  is generated with all the arguments from the parent constructor.(*)

  Write our own constructor(**)

  !!! Constructors in inherited classes, must call super(...), and do it 
  before using this.

  In JavaScript a constructor of a derived class (a class that inherits from
  another parent class), has a special internal property 
  [[ConstructorKind]]:"derived" This label affects its behavior with new:
  - when a regular function is executed with new, it creates an empty object
  and assigns it to this.
  - In case of a derived constructor it doesn't do this, it expects the 
  parent constructor to do this. 

  So a derived constructor must call super in order to execute its parent 
  base constructor, otherwise the object for this won't be created and
  we'll get an error. 

  We can call super(..) only once, we do that on top, before the 'this'.(***)

*/

// *

class State {
  constructor(name, economy) {
    this.name = name;
    this.economy = economy;
  }
}

class Moldova extends State {
  logState() {
    console.log(this.name);
  }
}

let moldova = new Moldova("Republica Moldova", "poor");

console.log(moldova);

// **

class State1 {
  constructor(name, economy) {
    this.name = name;
    this.economy = economy;
  }
}

class Moldova1 extends State1 {
  constructor(name, economy, continent) {
    super(name); // ***
    this.economy = economy;
    this.continent = continent;
  }
}

let md = new Moldova1("Republica Moldova", "weak", "Eastern Europe");

console.log(md);
