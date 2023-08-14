/* 
    Resource Loading: onload and onerror
    ------------------------------------
    
    Let's say we need to load a third-party script and call a function. 

    So we can dynamically run the script, but how we know when to call
    the function?

    For this purposes we can use modules, but they are not widely adopted 
    by third-party libraries.

    script.onload
    -------------

    We can use load event, which triggers after the script is loaded.(*)

    script.onerror
    --------------

    We can use it to run when the loading fails. 

    These two events work on other resources as well, for any that has an
    external src. 
*/

// *

let script = document.createElement("script");

script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js";
document.head.append(script);

script.onload = function () {
  console.log(_.VERSION);
};
