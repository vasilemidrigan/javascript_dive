/* 
  Promise Chaining
  ----------------
  ... is the ideia of passing the result through the chain of .then 
  handlers. (*)

  Every .then() returns a new promise
*/

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return (result += 1);
  })
  .then(function (result) {
    console.log(result);
    return (result += 1);
  })
  .then(function (result) {
    console.log(result);
    return (nr = result += 1);
  });

let nr = 0;

setTimeout(() => console.log(nr), 2000); // 4

/* 
  Returning Promises
  ------------------

  A handler in .then(handler) may create and return a new promise, in 
  this case, further handlers wait until it settles, and then get its
  result. 

  Returning promises allows us to build chains of asynchronous actions. 
*/

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result + 1), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return (result += 1);
  })
  .then(function (result) {
    console.log(result);
    return (nr = result += 1);
  });

/* 
  Thenables
  ---------

  A handler may return not exactly a promise, but a so-called 'thenable' 
  object, that has a method .then, and it will be treated the same way
  as a promise. 

  The ideea is that 3rd-party libraries, may implement promise-compatible
  objets of their own, they can have an extended set of methods and also 
  be compatible with native promises, because they implement .then() (*)

  This feature allows us to integrate custom objects with promise chains
  without having to inherit from Promise.
*/

// *

class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve, reject) {
    console.log(resolve);

    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result);
  })
  .then((result) => console.log(result));
