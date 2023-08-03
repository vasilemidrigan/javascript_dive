/* 
  Property getters and setters

  Objects have two kind of properties:
   - Data properties
   - Accessor properties

  They are functions on getting and setting values. 
  
  A getter is when we read from the object, and a setter is when we assign
  something. 

  An accessor property looks like a regular one when call(*), it doesn't look
  like a regular method call. The getter runs behind the scenes. 

  We can assign the fullname by implementing a setter(**)
  
  Accessor descriptors are a little different from data properties descriptors. 
  instead of value and writable we have get and set. (***)

*/

let person = {
  name: "Leonardo",
  surname: "Midrigan",
  // *
  get fullName() {
    console.log(this.name + " " + this.surname);
  },
  // **
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

person.fullName; // Leonardo Midrigan
person.fullName = "Leo Mid.";

let descriptor = Object.getOwnPropertyDescriptor(person, "fullName");

console.log(descriptor);
// {enumerable: true, configurable: true, get: ƒ, set: ƒ}

/* 
  Smarter getters/setters

  Getters and setters can be used as wrappers over real properties, in order
  to gain more control over operations with them. (*)

  Technically we can access the property from outside, but by convention, the
  property with prepended underscore shouldn't be accessed directly from outside. 
*/

let soldier = {
  _name: "John",
  get age() {
    return this._age;
  },
  set age(value) {
    if (value < 18) {
      console.log("Cannot be younger than 18!");
      return;
    } else {
      this._age = value;
    }
  },
};

soldier.age = 19;

console.log(soldier);
