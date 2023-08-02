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

  Using a decorator is pretty useful, we can reuse the function with many
  other ones, and we do not increase the complexity of another functions. 

  Decorator can be seen as a feature or aspect that can be added to a function.
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

/* 
  Using func.call for context
  
  The problem here is that we pass the call to the original method,(!)
  but without the context of 'this'. In order to fix the problem we 
  have explicitly set 'this' object.
*/

let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log("called with " + x);
    return x * this.someMethod();
  },
};

function cachingDecorator1(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    console.log(cache);
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

worker.slow(5);

worker.slow = cachingDecorator1(worker.slow);

worker.slow(6);

/* 
  Going multi-argument
    
  Caching multi-argument function results into a map.
  There are many solutions out there, like a 3rd party lib
  which has a map-like data struct. that allows multi-keys, 
  using nested maps, cache.set(min) will map to (max, result), 
  or join two values into one 'min, max'
*/
let worker1 = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  },
};

function cachingDecorator2(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      console.log(cache);
      return cache.get(key);
    }

    let result = func.call(this, ...arguments);

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + "," + args[1];
}

worker1.slow = cachingDecorator2(worker1.slow, hash);

console.log(worker1.slow(3, 5));
console.log("Again " + worker1.slow(3, 5));

/* 
  func.apply
  ----------

  The difference between the func.call(this, ...arguments) and the 
  func.apply(this, arguments), is that the func.apply takes an array
  like object of arguments instead of list of arguments.

  
  Call forwarding is when we pass all arguments along with the context to 
  another function, it is indistinguishable from the call of the original
  function. 
  
  let wrapper = function() {
  return func.apply(this, arguments);
  };

  Borrowing a method 
  ------------------
  
  Method borrowing is a way for an an object to use the methods of another 
  object, without redefining the same method. 

  We can improve the hash function from above, to accept more than two
  arguments. 

  We can't use join() because arguments is an iterable array-like object, 
  is not an array. 

  
*/
let workerX = {
  slow(...nrs) {
    console.log(`Called with ${nrs}`);

    return [...nrs];
  },
};

function cachingDecoratorX(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments);

    cache.set(key, result);
    return result;
  };
}

function hashX(args) {
  return [].join.call(args);
}

workerX.slow = cachingDecoratorX(workerX.slow, hashX);

console.log(workerX.slow(3, 5, 5));
console.log("Again " + workerX.slow(3, 5, 8));
