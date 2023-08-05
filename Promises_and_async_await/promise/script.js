/* 
  Promise
  -------

  A promise is a special JS object, that links producing code with 
  consuming code. 
  
  Executor
  --------
  An executor is the function which is passed to new Promise(*)
 
  Producing code
  --------------
  The producing code should eventually produce the result for the
  consuming code. 

  resolve and reject
  ------------------
  ... are callbacks provided by JS. 
  resolve(value) - if the job is finished successfully with result value
  reject(error) - if an has occurred, error is the error object

  The promise object returned by new Promise constructor, has these internal
  properties:
  - state: initially 'pending' and then either 'fulfilled' or 'rejected', 
  depending on the result.
  - result: initially 'undefined', then changes to value if resolve(value) is 
  called or 'error' if reject(error) is called.  

  Here we have a succesfull job finished, with 'fulfilled promise'(**)

  And the rejected one(***)

  A promise that is either resolved or rejected is called 'settled' as
  opposed to initially 'pending' promise. 
*/

// *

let promise = new Promise(function (resolve, reject) {
  // executor code
});

// **

let promiseA = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(promiseA);
  }, 500);

  setTimeout(() => resolve("done"), 3000);

  setTimeout(() => {
    console.log(promiseA);
  }, 3500);
});

// ***
let promiseB = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(promiseB);
  }, 500);

  setTimeout(() => reject(new Error("Whoops!!!!")), 3000);

  setTimeout(() => {
    console.log(promiseB);
  }, 3500);
});

/* 
  There is only one call to resolve or reject, any state is finall.

  resolve and reject expect only one argument or none.

  It is recommended to use Error objects when the promise is rejected,
  or objects that inherit from Error. 

  We can call resolve or reject immediatelly, without waiting for the 
  result, that usually happens when we start to do the job and see 
  that everything is completed and cached. 

  state and result are internal properties, we can't access them directly.
  Instead we can use /then/catch/finally for that kind of tasks.

  Consumers: then, catch
  ----------------------

  Consuming functions, which consumes the producing code, can be registered, 
  subscribed using methods .then and .catch

  then
  ----
  
  the syntax is(*), first argument is for resolved case and the second for
  rejected case. 

  succesfull example(**)

  rejected example(***)

  If we are only interested in successful completion, then we can provide
  only one argument, which is for result. 
*/

// *

promiseB.then(
  function (result) {
    /*do something with the result*/
  },
  function (err) {
    /*do something with the error*/
  }
);

// **

let promiseC = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

promiseC.then(
  (result) => console.log(result),
  (err) => console.log(err)
);

// ***

let promiseD = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("ERROR!!!")), 1000);
});

promiseC.then(
  (result) => console.log(result),
  (err) => console.log(err)
);

/* 
  catch
  -----

  If we are interested only in errors, we can provide null for first 
  argument and the second one we can use for error handling.

  Or, we can use catch(err), which is exactly the same. (*)
*/

// *

// .catch(err) is the same as .then(null, err)
let promiseE = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("ERROR!!!")), 1000);
});

promiseC.catch((err) => console.log(err));

/* 
  Cleanup: finally
  ----------------

  finally clause with promises is pretty much the same principle it have
  with try...catch. 

  It runs either the settled promise is fullfiled or rejected.(*)

  The ideea is to cleanup/finalize after the previous operations are
  complete, like stopping indicators, closing no longer needed connections,
  etc. Like a party finisher, no matter how the party went, we still need to 
  cleanup after it.

  A finally handler doesn't get any argument, and doesn't return anything. If
  it returns something, then it is ignored. 

  If finally throws an error, the execution goes to the nearest handler. 
*/

// *

let promiseF = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Data loaded!"), 1000);
});

promiseF
  .finally(() => console.log("performing cleanup tasks"))
  .then(
    (resolve) => console.log(resolve),
    (err) => console.log(err)
  );

/* 
    Promise alternative to callback: loadScript

    This is the loadScript function that we can rewrite with promises.(*)

    Here we have alternative with promise.(**)
*/

// *

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// **

function loadScrpt(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promiseG = loadScrpt("test.js");
promiseG.then(
  (script) => console.log(`${script.src} is loaded!`),
  (error) => console.log(`Error: ${error.message}`)
);
