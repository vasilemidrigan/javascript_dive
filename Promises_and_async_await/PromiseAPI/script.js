/* 
  Promise API
  -----------

  We have 6 static methods in the Promise class.

  Promise.all
  -----------
  
  When we need to execute many promises in parallel, like downloading 
  several URLs, and wait until all of them are ready.

  It takes an iterable, usually an array of promises and returns a new
  promise. 

  It resolves when all listed promises are resolved and the array of their
  result becomes its result. (*)

  An illustration of how to fetch an array of urls(**)
  
  If any of the promises rejects, Promise.all rejects with that error. 
  
  Where is convenient we can pass ready values to Promise.all, they will
  be return as is. (***)
*/

// *

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then((result) => console.log(result));

// **
let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

let requests = urls.map((url) => fetch(url));

Promise.all(requests).then((responses) =>
  responses.forEach((response) =>
    console.log(`${response.url}: ${response.status}`)
  )
);

// ***

Promise.all([
  new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  }),
  34,
  56,
  "ready values here",
]).then((result) => console.log(result));
// [1, 34, 56, 'ready values here']

/* 
  Promise.allSettled
  ------------------

  It similar with Promise.all, the big though is that it doesn't reject
  at all, even if there is all promises rejected, it returns all settled
  promises. 

  Promise.race
  ------------

  It takes the the array of promises like Promise.all, and returns the 
  first settled promise, and gets its result or error. 

  Promise.any
  -----------

  Similar to Promise.race, but it waits for the first fulfilled promise, 
  if all are rejected, then it returns AggregateError, which is a special 
  error object that stores all promise errors in its errors property. 

  Promise.resolve/reject
  ----------------------

  As async/await makes these two methods somewhat obsolete, they are rarely
  needed in modern code. 

  Promise.resolve(value) creates a resolved promise with the result value.(*)
  It is used when a function is expected to return a promise. 

  Promise.reject creates a rejected promise with error. In practice this 
  method is almost never used. 
*/

// *

let value = new Promise((resolve) => resolve(1));
let promise = new Promise((resolve) => resolve(value));
