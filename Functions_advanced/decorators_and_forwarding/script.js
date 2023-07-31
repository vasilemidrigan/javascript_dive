"use strict";
/* 
  Decorators and forwarding, call/apply

  Functions in JavaScript are very flexible. 

  We can forward calls between them and decorate them. What all this means?

  Transparent caching

  In a situation when we have a CPU-havy function, with a stable result, 
  for the same x it always returns the same result, we would want to 
  cachee the result in order to avoid spending extra-time on recalculations. 
  
  Decorator 
  A decorator function is a function that takes another function and alters
  its behaviour.   
*/

// *

function slowFunc(x) {
  // heavy CPU-intensive job
  console.log(`called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      console.log(cache);
      return cache.get(x);
    }

    console.log(cache);
    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

let slow = cachingDecorator(slowFunc);

console.log(slow(1));
console.log(slow(1));

console.log(slow(2));
console.log(slow(2));
