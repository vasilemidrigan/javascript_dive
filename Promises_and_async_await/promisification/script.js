/* 
  Promisification
  ---------------

  ... is the conversion of a function that accepts a callback into a function
  that returns a promise. 

  As many functions and libraries are callback-based, such transformations
  are pretty common in real-life. Promises though, are more convenient, so
  it makes sense to promisify them.

  So we have a function expression, that returns a promise, and inside the
  promise we actually have the function itself that we need to execute.:(*)
*/

// *

let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};
