/* 
  Static properties and methods
  -----------------------------
  
  We can assign methods to the class as a whole.(*)

  Usually, static methods are generaly implemented so we can use
  them on any class that we need. Is a function that we probably 
  will need on some classes from the chain. So it is a "global"
  method, that we can use anywhere in the chain. 

  Or we can assign it as a property directly (**)

  Static methods works on classes, and do not work on individual objects.(***)
*/

// *

class User {
  static hi() {
    console.log("hi");
  }
}

User.hi(); // hi

// **

User.sayHi = function () {
  console.log("Hello");
};

// ***

class Journal {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createJournal() {
    return new this("Journal Nr...", new Date());
  }
}

let journal = Journal.createJournal();

console.log(journal);

/* 
  Static properties
  -----------------

  Static properties are prepended by static keyword and looks like a regular
  property.(*)

  Static properties and methods are inherited. 
*/

// *

class Journal1 {
  static publisher = "Vasile Midrigan";

  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createJournal() {
    return new this("Journal Nr...", new Date());
  }
}

let j = new Journal1("Darkness in the night", new Date());

console.log(j);
