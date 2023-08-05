/* 
  Custom errors, and extending errors
  -----------------------------------

  When we develop something, we may need error classes that reflect our
  own specific needs like: HttpError, DbError or NotFoundError for searches, 
  etc. Our errors should support basic syntax, but at the same time, we 
  may want to integrate something like statusCode into HttpError, or any
  other properties we need for our specific case. 

  As our application grows, we may form an error hierarchy, HttpTimeoutErr
  inherit from HttpError, etc. 

  Extending Error
  ---------------

  We can extend an error object from another built-in for example, and
  costumize it for our needs. 

  Note that in the catch block, we throw the error we don't know how to 
  handle.  
*/

let jsonFile = '{"name": "Leonardo"}';

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function readJSON(json) {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError("ValidationError: no name provided");
  }
  if (!user.age) {
    throw new ValidationError("ValidationError: no age provided");
  }

  return user;
}

try {
  readJSON(jsonFile);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message);
  } else if (err instanceof SyntaxError) {
    console.log("JSON syntax error: " + err.message);
  } else {
    throw err;
  }
}

/* 
  Further Inheritance
  -------------------

  We can make our errors even more precise, for absent properties for example.(*)

  If we don't want specify name for example on every custom error class, we can
  avoid that by making our 'basic error'(**)
*/

// *

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

function readJSON1(json) {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  return user;
}

try {
  readJSON1(jsonFile);
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message);
    console.log(err.name);
    console.log(err.property);
  } else if (err instanceof SyntaxError) {
    console.log("JSON syntax error: " + err.message);
  } else {
    throw err;
  }
}

// **

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class ValidateError extends MyError {}

class PropRequiredError extends ValidateError {
  constructor(property) {
    super("No property: " + property);
    this.property = property;
  }
}

console.log(new PropRequiredError("stack").name);

/* 
  Wrapping Exceptions
  -------------------

  Right now in our try...catch above, we are testing for SyntaxErrors and
  ValidationErrors, but as the program may grow, the complexity grows, so 
  does the errors in the code, there can appear new kinds of errors.

  The technique wrapping exceptions is: 
  1. Make a new class ReadError that represents a generic 'data reading' error
  2. The function readUser will catch the errors that occur inside, such as 
     ValidationError and SyntaxError, and generate a ReadError instead. 
  3. The ReadError will keep its reference to the original error in its 
     cause property. 
  
  Then the code will check ReadError only, not for every kind of data reading
  errors, and if we need more details we can check its cause property. 
*/
