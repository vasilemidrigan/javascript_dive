/* 
  Introduction: callbacks
  -----------------------
  
  In JS, we have functions that allow to schedule asynchronous actions, 
  in other words, actions initiated now and finished later, like setTimeout
  or setInterval, or loading scripts, modules, etc.  
  
  To use the results from a asynchronous function, we need to know when those
  are ready, otherwise, we'll get an error, because we are trying to access
  something that is not yet ready, not yet loaded, etc. 

  In order to execute or asynchronous script, we provide a callback as a 
  second argument, and it executes imediatelly after the script is loaded.

  This is called 'callback-based' style of asynchronous programming, a 
  function that does something asynchronously, should provide a callback 
  that runs when the asynchronous operation is complete. 

*/

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript("tests/test.js", (script) => {
  console.log("Variable foo is ", foo);
});

/* 
  Callback in callback
  --------------------
  
  When dealing with asynchronous code, often we need to run one piece of code
  after another. 

  A solution would be to put the second piece of code into our current callback(*)

  And if there is a third operation, we can do it one more time(**), but 
  pretty quickly the code becomes weird, imagine we have 5-10 or even more
  sequential operations, there is a solution though, will see it soon. 
*/

// *

function loadFoo(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadFoo("tests/test_1.js", () => {
  console.log("Variable bar is ", bar);

  loadFoo("tests/test_2.js", () => console.log("foo_bar is ", foo_bar));
});

// **

function loadFooBar(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadFooBar("tests/test_3.js", () => {
  console.log("Variable fa is ", fa);

  loadFooBar("tests/test_4.js", () => {
    console.log("Variable moo ", moo);

    loadFooBar("tests/test_5.js", () => {
      console.log("Variable moo_bar is ", moo_bar);
    });
  });
});

/* 
  Handling Errors
  ---------------

  If on loading script fails, we can handle those errors. 

  Here we track loading errors,(*) and (**) Here our callback has two 
  arguments, first one for error, and another for script, or more than one. 
  So a single callback is used for passing errors and handle results. 

  Here (*) script is succesfully handled, and here (**) we get an error, 
  because there no such file.
*/

// *

function loadData(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Error loading script!"));

  document.head.append(script);
}

loadData("tests/test_6.js", function (err, script) {
  if (err) {
    throw err;
  } else {
    console.log(script, "LOADED");
    console.log("Variable muu is ", muu);
  }
});

/* 
  Pyramid of Doom
  ---------------

  Pyramid of doom or callback hell, is called when we nested asynchronous
  functions one into another. The examples above are viable for two nested
  functions, if there is more, then the code pretty fast becomes weird, and
  dificult to manage. So it is pretty much not recommended to use this 
  approach. 

  So, to avoid this hell, we can alleviate the problem by making every
  action a standalone function(*) This solution though, is not perfect, 
  it is hard to eye jump, especially if you don't know the code. There
  is a better solution, which is Promises. 
*/

// *

function loadScrpt(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Error loading script!"));

  document.head.append(script);
}

loadScrpt("tests_1/test_1.js", step1);

function step1(error, script) {
  if (error) {
    throw error;
  } else {
    console.log(script, "LOADED");
    loadScrpt("tests_1/test_2.js", step2);
  }
}

function step2(error, script) {
  if (error) {
    throw error;
  } else {
    console.log(script, "LOADED");
    loadScrpt("tests_1/test_3.js", step3);
  }
}

function step3(error, script) {
  if (error) {
    throw error;
  } else {
    console.log(script, "LOADED");
  }
}
