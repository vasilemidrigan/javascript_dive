/* 
  Private and protected properties and methods
  --------------------------------------------

  One of the most important principles in OOP, is delimiting the internal 
  interface from the external one, aka ENCAPSULATION. 

  Like with cars for example, we don't need to know how it works underneath
  the hood, we just need to know how to drive and perform basic maintenance, 
  and that's it. 

  So with programming is the same, we need to separate and hide what shouldn't
  be touched by users.

  Internal Interface - methods and properties that are accessible from other 
  methods of the class, but not from the outside. 

  External Interface - methods and properties accessible from the outside. 

  In JS, there are two types of object fields(properties and methods):
  Public - accessible from anywhere.
  Private - accessible only from inside the class. 

  Protecting 'waterAmount'
  ------------------------

  Protected properties are usually prefixed with an underscore _ .

  ! Properties and methods, by a well-known convention between developers, 
    should not be accessed from the outside.  

  Say we want to protect our water amount and set some limitations, so 
  the value will not be a negative one(*)

  If we need a read-only property for example, a property that we set at
  creation, and then we just don't need to touch anymore, so we can create
  only a getter for it, so we'll not be able to set a value, just get it. 
  Let's create power  read-only.(**)

  We can use setWaterAmount() instead of set waterAmount() syntax, is up to
  us which one we'll use. The function syntax though is more flexible, it
  accepts more arguments, which does not the setter, it accepts only one 
  argument. 

  Protected fields are inheritable, for example class DeltaMachine extends
  CofeeMachine, so DeltaMachine will access _waterAmount without any 
  problems. 
*/

// *

class CoffeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  get power() {
    console.log(`Power is ${this._power}`);
    return this._power;
  }

  constructor(power) {
    this._power = power;
    console.log(`Created a coffee machine, power ${power}`);
  }
}

let coffeMachine = new CoffeMachine(100);

coffeMachine.waterAmount = -200; // _waterAmouint = 0;
coffeMachine.power; // Power is 100

console.log(coffeMachine);

/* 
  Private "#waterLimit"
  ---------------------

  Privates start with # and are accessible only inside the class. (*)

  We can both private and public fields at the same time. (**)
  
  In a derived class, we don't have direct access to private properties, 
  that's a big issue sometimes, that's why usually is better to use
  protected option instead. (***)

  Also we can't use `${this['#name']}`, it just doesn't work.  
*/

// *

class CoffeMachine1 {
  #waterAmount = 0;
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
    return value;
  }

  set waterAmount(value) {
    this.#waterAmount = this.#fixWaterAmount(value);
  }
  get waterAmount() {
    return this.#waterAmount;
  }
  get power() {
    console.log(`Power is ${this._power}`);
    return this._power;
  }

  constructor(power) {
    this._power = power;
    console.log(`Created a coffee machine, power ${power}`);
  }
}

let delta = new CoffeMachine1(200);

// ERROR accessing private fields
// delta.#waterAmount;
// delta.#fixWaterAmount(2454);

delta.waterAmount = 225; // #waterAmount=200

console.log(delta);

// (***)

// class camelCoffe extends CoffeMachine1 {
//   showWaterAmount() {
//     console.log(this.#waterAmount); // ERROR: not accessible outside
//   }                                 // the class CoffeMachine1 as it
// }                                   // is private.
