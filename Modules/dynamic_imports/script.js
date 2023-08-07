/* 
  Dynamic Imports
  ---------------

  Simple export and imports are called static, the syntax is simple and strict.

  We cannot dynamically generaty any parameters of import, or 
  conditionally do something. 

  The import() expression
  -----------------------

  The import(module) expression loads the module and returns a promise that
  resolves into a module object that contains all its exports, and can be
  called from any place in the code. (*)

  Dynamic imports works in regular scripts as well, they don't require type
  module. 

  import() is not a function
*/

// *
let modulePath = prompt("Which module to load");

import(modulePath).then((obj) => console.log(obj.num)); // 100
