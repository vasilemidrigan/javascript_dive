/* 
  Bubbling and capturing
  ----------------------

  Why in the example (* index.html), clicking on code tag, triggers the 
  event assigned to the div? 

  Bubbling
  --------

  The bubbling principle: When an event happens on an element, it first runs
  the handlers on it, then on its parent, then on all the way up on other 
  ancestors. 

  See the example:(** index.html) So what we see here is called 'bubbling', 
  it triggers the event on the target and then all the way up (if one or 
  more of the ancestor have the same event handler assigned)

  Almost all events bubble, one of those exceptions is focus and some others. 

  event.target
  ------------

  The most deeply element that caused the event is called a target element, 
  accessible as event.target. (**** index.html script.js)

  this - is the current element, the one that has a currently running handler
  on it. (**** index.html script.js)

  As we can see in the example (*** index.html), if a parent has an event
  handler assigned to it, if we click on a nested element inside that parent,
  the event will be triggered on it. 

*/

// ****

function logThisAndTarget(event) {
  console.log(`this: ${event.currentTarget}`);
  console.log(`target: ${event.target}`);
}

/* 
  Stop bubbling
  -------------

  A bubbling event goes from the target element straight up untill <html>, 
  then to document and even window calling all handlers on the path. 

  But any handler may decide that the event has been fully processed and 
  stop the bubbling. 

  The method is event.stopPropagation() (# index.html) 

  If an element has multiple listeners on the same event, if one of those 
  listeners has stopPropagation(), the rest of listeners will run as well.

  If we need to stop immediatelly those others listeners on the same element, 
  we can call stopImmediatePropagation() (## index.html script.js) Which
  will stop propagation immediatelly, so the next listener (in our case
  logActivity) will not run, that's because it is assigned after our
  listener wich stops the propagation immediatelly (see the order on lines %)

  Don't stop bubbling without a need! 
  -----------------------------------
  Bubbling is convenient, don't stop it without an obvious and thoroughly 
  thought decision. 
  
  stopPropagation() may cause hidden caveats. 
  
  Usually there's no real need to prevent bubbling. 

  A task that seemingly requiers to stop bubbling, can be solved by other means.
  For example, using custom events, also we can write our data into the event
  object in one handler and read it in another one, so we can pass to handlers
  on parents information about the processing bellow. 
*/

// ##

function logMessage() {
  console.log("1st of 3 listeners");
}

function logClicked(e) {
  console.log("2nd of 3 listeners");
  e.stopImmediatePropagation();
}

function logActivity() {
  console.log("3rd of 3 listeners");
}

let inner = document.getElementById("inner");

inner.addEventListener("click", logMessage); // % 1 RUNS
inner.addEventListener("click", logClicked); // % 2 RUNS
inner.addEventListener("click", logActivity); // % 3 DOESN'T RUN

/* 
  Capturing
  ---------

  Capturing phase is rarely used. 

  If we click a <div> which is right below the <body> :
  1. Capturing phase : The event first goes through the ancestors chain down
  to the element
  2. Target phase : It reaches the target and triggers there
  3. Bubbling phase : It goes up calling handlers on its way through the element
  ancestors

  To catch an event in the capturing phase, we need to set the handler 'capture'
  option to true.

  capture: 
  - true: the handler is set on capturing phase, the target phase will run twice,
  at the end of the capturing phase, and at the start of the bubbling phase.
  - false: the handler is set on bubbling phase
  
  See the example (### index.html script.js) with the capturing fase active and
  also the bubbling phase active. 

  To remove the handler, removeEventListener needs the same phase. 
  ----------------------------------------------------------------
  
  Listeners on the same element with the same phase, run in the order we 
  created them.

  If we'll call event.stopPropagation() during the capturing phase, we will
  actual stop the bubbling phase as well, not only the further capturing. 

*/

// ###

function logEvent(e) {
  console.log(e.currentTarget);
}

let header = document.getElementById("header");
let center = document.getElementById("center");

center.addEventListener("click", logEvent); // alias of {capture: true}
center.addEventListener("click", logEvent, true);

header.addEventListener("click", logEvent);
header.addEventListener("click", logEvent, { capture: true });

document.body.addEventListener("click", logEvent);
document.body.addEventListener("click", logEvent, { capture: true });

document.addEventListener("click", logEvent);
document.addEventListener("click", logEvent, { capture: true });

window.addEventListener("click", logEvent);
window.addEventListener("click", logEvent, { capture: true });
