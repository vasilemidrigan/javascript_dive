"use strict";
/* 
  Modules, introduction
  ---------------------

  As our application grows, we want to split our code into multiple files, 
  so called 'modules'. 

  A module contain a class, or a library of functions for a specific 
  purpose. 

  In the beggining there wasn't need to split code, as scripts were 
  essentialy small, but eventually scripts became more and more 
  complex, so the community invented a variety of ways to organize
  code into modules, special libraries to load modules on demand. 

  Some of them are AMD, CommonJS, UMD, etc. 

  In 2015 appeared the language-level module system, which eveloved
  gradually. 

  What is a module? 
  -----------------

  A module is just a file, one script - one module. 

  Modules can load each other, use special directives like export and 
  import to interchange functionality, call functions of one module
  from another one. 

  export - label variables and functions that should be accessible from
            outside of the current module. 
  import - import functionality from other modules. 
 
  Here(*) we export function sayHi(), and import it into another module.

  A module file should have type="module" attribute in order for browser 
  to know that the file is a module, as these types of files have special
  features, like importing, exporting variables and functions, use strict
  active by default, etc.
*/

// *

import { hi } from "./module.js";
import { user } from "./module.js"; // **
import "./alert.js"; // *

hi();

console.log(user);

/* 
  Core module features
  --------------------

  Modules always work in strict mode by default

  Each module has its own top-level scope, so top-level variables and 
  functions from one module aren't seen into another. For this to
  happen we have export and import directives. 
  
  A module code is evaluated only first time when imported. If a module
  code brings side-effects, like showing a message, it will run only once.
  See the example above on imports (*)

  Top-level module code shoud be used for initialization, creation of 
  module-specific internal data structures, if we need something callable
  multiple times, we need to export it as a function. 

  A module is executed only once, exports are generated and then shared
  between importers, so if we exported an object, if we'll make a change, 
  all other modules will see the change. (above **)
  
  import.meta
  -----------

  contains information about the current module. (***)

  top level this is undefined, as we have use-strict mode activated

  module scripts are deffered
  ---------------------------
  - downloading external module script, doesn't block html processing, they 
  load in parallel with other resources. 
  - modules scripts wait until html doc is ready and then run 
  - first scripts in the html doc runs first

  ! regular scripts though, run immediatelly, before the rest of the page is 
  processed. 

  modules always see the fully loaded html page, including elements below them.

  Async works on inline scripts
  -----------------------------

  For a functionality that doesn't depend on anything, like ads, document
  level event listeners, counters, etc, we ca use inline async scripts, it
  doesn't wait for anything, it performs the instructions and run when ready.

  <script async type="module"> code for executing async operations </script>
  
  External scripts
  ----------------

  If an external script is fetched from another origin, it will require 
  CORS headers, in other words, the remote server must supply a header
  Access-Control-Allow-Origin allowing the fetch, for security reasons. 

  No bare modules allowed
  -----------------------

  import must have either relative or absolute path, modules without 
  specified path are not allowed. 

  Build tools
  -----------

  In real-life, modules are rarely used in their raw form, usually we 
  bundle them together with a special tool such as Webpack and deploy 
  to the production server. 

  One of benefits ot using bundlers, it gives more control over how modules
  are resolved, allowing bare modules, and much more features, like css/html
  modules, etc.  
*/

// ***
console.log(import.meta);
