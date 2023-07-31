/* 
  Function object, NFE

  The functions type is object. 

  A function is a callable object. So we can treat a function as an object
  as well, add, remove properties, pass by reference, etc. 

  The 'name' property

  We can get the functions name by using the property 'name'. (*)

  Object methods have names too(**)
*/

// *

function hi() {
  console.log("hi");
}

console.log(hi.name); // hi

// **

let obj = {
  sayHi() {
    console.log("hi");
  },
};

console.log(obj.sayHi.name); // sayHi

/* 
  The 'length' property
  
  It returns the number of function parameters.(*) Rest parameters
  are not counted. (*)
    
  With this property we can perform so called polymorphism actions, treating
  arguments depending on their type of length. (**)
*/

// *

function noName(param1, param2, param3) {
  return param1;
}

console.log(noName.length); // 3

// **

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

ask(
  "Question?",
  () => console.log("you said yes"),
  (result) => console.log(result)
);

/* 
  Custom properties

  We can also add properties of our own, like counter, to count how 
  much times the function is called. (*)

  Note though, that a property assigned to a function is not a local 
  variable inside the function, so a let counter and counter functions
  property are unrelated. (*)
*/

// *

function run() {
  let counter = 2;
  run.counter++;
}

run.counter = 0;

run();
run();
run();

console.log(run.counter); // 3

// **

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

console.log(counter()); //
console.log(counter()); //
console.log(counter()); //

/* 
  Named Function Expression - NFE

  It allows the function to reference itself internaly. (*) We can use
  the variable name as well, but the problem is that if it changes it
  can result in errors, for instance, take a look (**)
  
  It is not visible outside of the function. (***)

  Functions Declarations though, doesn't have this feature. So sometimes
  that can be the reason to use func expression instead of func declaration. 
  This is one advantage that func declarations doesn't have. 
*/

// *

let adio = function bye(phrase) {
  if (phrase) {
    console.log(phrase);
  } else {
    bye("I need to go!"); // function call itself
  }
};

adio();

// **

let adio1 = function bye(phrase) {
  if (phrase) {
    console.log(phrase);
  } else {
    adio1("I need to go!"); // results in an error
  }
};

let sayBye = adio1;
adio1 = null;

// sayBye(); // ERROR: adio1 is not a function

// ***

let adio2 = function bye(phrase) {
  if (phrase) {
    console.log(phrase);
  } else {
    bye("I need to go!");
  }
};

// console.log(bye); // bye is not defined
