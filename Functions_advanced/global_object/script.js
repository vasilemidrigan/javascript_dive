/* 
  Global Object

  Global Object provides variables and methods that are available anywhere. 
  They are built-in the language and the environment. 

  We can access global object with window in browser or globalThis anywhere. (*)
  
  Generally we should avoid creating global variables. 

  We can create a function and a variable globally accessible. (**)
*/

// *
console.log(window);
console.log(globalThis);

// **
window.name = "Leo";

window.hi = function () {
  console.log("hi");
};

console.log(window.name); // Leo
window.hi(); // hi

/* 
  Using polyfills

  The global object is used for support the modern language features. 

  We can check if a feature exists in the language by testing the 
  global object. Let say we want to know if there is Promise (*) 
*/

console.log(window.Promise);
