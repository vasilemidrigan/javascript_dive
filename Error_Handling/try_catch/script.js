/* 
  Error Handling: try...catch

  try...catch allow us to catch the error that occur in the code, and do
  something reasonable with that. 

  So, an error will not kill the script, instead we can handle it. (*)

  So here catch runs, because we have an undeclared variable.(**)

  try...catch works with runtime errors, if there is an error in parse
  time when the code is read, then it will not work if the code is 
  syntactically wrong.(***)
*/

// *

try {
  console.log("This code will run");
} catch {
  console.log("This code will not run, as there are no errors!");
}

// **

try {
  console.log("This code will run");
  sky;
} catch {
  console.log("Error catched!");
}

// ***

// syntactic ERROR

// try {
//   }}}}}
//   console.log("This code will run");
//   sky;
// } catch {
//   console.log("Error catched!");
// }

/* 
   try...catch works synchronously
   -------------------------------
   
   If inside our try...catch we have a scheduled code that have a function,
   and the function has an error, it won't catch it, because the function
   is executed later as it is scheduled, the engine would left already the
   try...catch construct. (*)

   To catch that error in the function, try...catch must be inside that 
   function(**)
*/

// *

// try {
//   setTimeout(function () {
//     sky;
//   }, 1000);
// } catch {
//   console.log("error is catched");
// }

// **

setTimeout(function () {
  try {
    sky;
  } catch {
    console.log("error caught!");
  }
}, 1000);

/* 
  Error object 
  ------------

  When an error occurs, JS generates an error object which is passed to 
  catch. (*)

  The Error Object has two main properties: 
  - name: the error name
  - message: details about the error

  there are other non-standart available in most environments. 
  for example stack(sequence of nested calls till the error) Nice for 
  debugging. 
*/

try {
  sky;
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

/* 
  Throwing our own error
  ----------------------
  Technically we can use any data type for throwing errors, but is recommended
  to use objects, with names and messages, being more informative and somewhat
  compatible with built-in errors.

  JS has many built-in constructors for standart errors: Error, SyntaxError, 
  ReferenceError, TypeError, etc. We can use them to create objects as well.(*)
  Here the name of the error is exactly the name of the constructor, and the
  message is taken from the argument. (*)

  If the code executes correctly but there is something we don't like, we 
  can create our own errors. (**) For example if the user doesn't have name, 
  we want to throw an error. 
*/

// *

let error = new Error("Error message(details about the error)");

console.log(error);
console.log(error.constructor.prototype);

// **

let json = '{"age": 30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name provided");
  }

  console.log(user.name);
} catch (err) {
  console.log("JSON ERROR: " + err.message);
}

/* 
  Rethrowing
  ----------

  One important rule: catch should only process errors that it knows and 
  'rethrow' all others. 

  In the catch we analyze the error we got, if we don't know the error, we
  throw error. (*) So the error that is thrown in the catch block in else
  statement, is thrown, so it can be handled by another outer try...catch, 
  or it kills the script.(**)

  With instanceof we can check the type of the Error:(*)
*/

// *

let json1 = '{ "name": "Leonardo" }';
function readData() {
  try {
    let user = JSON.parse(json1);

    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name provided");
    }

    fakeFunction();
  } catch (err) {
    if (err instanceof SyntaxError) {
      console.error("JSON ERROR: " + err.message);
    } else {
      throw err; // it throws the error here
    }
  }
}

// **

// catch the error from outside
try {
  readData();
} catch (err) {
  console.log("External catch got: " + err);
}

/* 
  try...catch...finally
  ---------------------

  If finally exists, it runs in all cases, after try if no errors, or after
  catch if errors. (*)

  finally clause is used to perform some final actions in any case of the 
  outcome.

  if there is a return before finally, then finally executes and then the
  return is executed.(**)

  try...finally without catch is also usefull, we can use it when we aren't 
  interested in the errors that may occur, we just want to make sure that
  the processes we start are finalized. 
*/

// *

try {
  console.log("Code executed"); // 1
} catch {
  console.log("Error catched");
} finally {
  console.log("Final work done!"); // 2
}

try {
  console.log("Code executed");
  fakeFunction();
} catch {
  console.log("Error catched"); // 1
} finally {
  console.log("Final work done!"); // 2
}

// **

function foo() {
  try {
    console.log("In the try block execution!");
    return 1;
  } catch {
    console.log("Error catched"); // 1
  } finally {
    console.log("Final runs before return statement!"); // 2
  }
}

foo();

/* 
  Global catch
  ------------

  Environments usually provide a global catch that will run in case of 
  uncaught error. For browsers it si window.error.

  The role of global handler is to send the error message to developers. 
*/

console.log(window.onerror);
