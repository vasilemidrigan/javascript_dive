/* 
  Export and Import
  -----------------

  We can label any declaration as exported by placing export before it, be
  it a variable, function or class.(*)

  Or we can put export separatelly on bottom of the file or on top.(**)

  We can import all stuff, if there is a lot, with: 
  import * as data from './file.js'
  But there is a caveat, explicit listing gives shorter names, so instead 
  say object.hi() we can have hi(), also explicit list gives better code
  structure, readability and refactoring, etc. (***)
  
  We can import under different names using 'as' like in the example (***), 
  but we can also export by different names with the same 'as'.(****)

  export default
  --------------

  export default allow to export on thing per file. To import it, we don't 
  need curly braces. We also can export it without any name, as it is only
  one default per file. (#)

  To export a function separatly from its definition we can use default as
  well. (##) see module_2.js and current file

  That's how we can import default along with named ones(###) see module_3.js

  If importing everything with * as an object, then the default property is
  exactly the default export($) see module_4.js

  There are some moments against default exports: 
  - Named exports force us to use the exact right name to import
  - Default names can be named differently by team members on import, and
  that is not so good. 
  - So as a rule, default names should always correspond to file names, like
  import User from 'user.js'.
  - Some teams prefer to use named exports even if there is only one thing 
  to export. 
  - That makes re-export a little bit easier
*/

// *

export let arr = [1, 23, 4];

export const CURRENT_YEAR = 2023;

export class User {
  constructor(name) {
    this.name = name;
  }
}

// **
let hi = "hi";
let nr = 1;

export { hi, nr };

// ***

import * as data from "./module.js";

console.log(data.obj);
console.log(data.x);
console.log(data.string);

// ****
import { str } from "./module.js";

console.log(str);

// #
import person from "./module.js";

console.log(person);

// ##
import num from "./module_2.js";

console.log(num);

// ###
import { default as friend, fellow } from "./module_3.js";

console.log(friend);
console.log(fellow);

// $
import * as randomData from "./module_4.js";

console.log(randomData.default);

/* 
  Re-export
  ---------

  
*/
