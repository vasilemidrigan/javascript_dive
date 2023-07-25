/*
  -------------------------
  Polyfills and Transpilers
  ------------------------- 

  JS evolves constantly, new proposals if they worth, becomes part of the 
  specification.
  
  In order to be able to write a new code to an older engine that doesn't 
  yet understand it, we need Transpilers and Polyfills.

  -----------
  Transpilers
  -----------

  A transpiler is a piece of software that translates source code to 
  another source code. It reads and understands modern code, and rewrite
  it using the older syntax, so it will work in older outdated engines. 

  For example: the nullish coalescing operator: before running a transpi-
  ler, this was the code: (*), and after running the transpiler, the code
  looks like this: (**)

  Babel is one of the most used transpilers. 

  Webpack runs transpiler on every code change, so it is very easy to 
  integrate into the development process. 

  ---------
  Polyfills
  ---------

  A script that updates or adds new functions is called a 'polyfill'. It
  fills in the gap and add missing implementations. For example we can
  miss Math.trunc(), so there is no need to transpile anything, we just 
  need to declare the missing function. 
*/

// *
let height = height ?? 100;

// **
let height1 = height1 !== undefined && height1 !== null ? height1 : 100;
