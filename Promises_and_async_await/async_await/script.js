/* 
  Async/await
  -----------

  This is a more comfortable way of wotking with promises. 

  Async functions
  ---------------

  async keyword before function keyword, means the function always
  return a promise. We can return a simple value, or explicitly return 
  a promise, the result is the same. (*)
*/

async function foo() {
  return 1;
}

foo().then((result) => console.log(result));

/* 
  Await
  -----

  The keyword await, makes JS wait until that promise settles, and 
  returns its result. (*)

  It works only inside async functions. (*)

  It is a more elegant syntax of getting promise results than .then(), 
  and easier to write.   

  Modern browsers allow top-level await in modules. If we are not 
  using modules, there is a universal recipe: wrapping into an 
  anonymous async function.(**)

  await works with Thenables too. 

  Async class methods
  -------------------
  ... to declare one, simply prepend it with async keyword. The meaning
  is the same, to return a promise and enables await. 
*/

// *

async function foo() {
  let promise = Promise.resolve(1);

  let result = await promise;

  return result;
}

// **
(async () => {
  let response = Promise.resolve(1);
  let user = await response;
  return user;
})();

/* 
  Error Handling
  --------------

  We can catch errors with try...catch the same way as a regular throw:(*)

  Or we can append the catch to the function. (**)
*/

// *

async function bar() {
  try {
    let response = await fetch("https://nosuchurl");
  } catch (err) {
    console.log(err);
  }
}

bar();

// **
bar().catch((err) => console.log(err));
