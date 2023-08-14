/* 
    script async and defer
    ----------------------

    The problem with a default script, is that it blocks the HTML parsing, when
    it reaches the script, it will execute the code in the script and only after
    that it will continue to parse HTML, and the code from the script doesn't 
    see the HTML below it. 

    So we can put script on the last line of the body, so it will see all the
    HTML, but this solution is not perfect however, the browser can notice
    the script and run it berfore parsing HTML. 

    defer
    -----

    So we can use defer attribute for script, so the browser will not wait 
    for the script, so it will parse HTML, and the script loads in the 
    background, and it executes when the DOM is ready, before DOMContentLoaded. 

    A script with defer attr. never block the page. 

    defer attr is only for external scripts, it is ignored if it has no src. 

    And it runs relative to the order, so if there are 3 defer scripts, no
    matter the order when they are ready, they will run according to their
    order in the code, one after another. That is pretty handy when we have
    for example a script that depends on another, so it will run after the
    dependency is executed. 

    async
    -----

    It is also non-blocking script, but with important differences:
    - it means that the script is completely independent
    - other scripts don't wait for it and vice versa
    - DOMContentLoaded and async script don't wait for each other
    - it executes in the background and runs when ready
    
    Dynamic scripts
    ---------------

    We can add dynamically scripts to the page, and they behave exactly as
    async by default. First load first run. (*)

    This can be changed by script.async=false, so it will execute in document
    order. 
*/

let script = document.createElement("script");
script.src = "./test.js";
document.body.append(script);
