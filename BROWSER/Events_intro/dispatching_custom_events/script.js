/* 
  Dispatching custom events
  -------------------------

  We can not only assign handler, but also generate events from JS. 

  Custom events can be used to create 'graphical components'.

  We can generate not only completely new events, but also built-in ones, 
  such as click, mousedown, etc. 

  Event constructor
  -----------------

  Built-in event classes form a hierarchy, similar to DOM element classes,
  so the root is Event class. 

  Syntax: 
  
  let event = new Event(type[, options]);

  type - event type, like 'click' or our own
  
  options:
  bubbles: true/false (does the event bubbles)
  cancelable: true/false (if true, then the default action can be prevented)
 
  dispatchEvent
  -------------

  After the event object is created, we should run it on an element using the
  call: elem.dispatch(event)

  In this example we are creating an event with the type click:
  (* index.html script.js)
  
  event.IsTrusted
  ---------------
  We can see when we have a user real event, or a script-generated one, by
  accessing the property event.isTrusted(true for user actions)

  Bubbling example
  ----------------
  
  We can create a bubbling event and catch on document, all we need is to set
  bubbles: true (** index.html script.js)
  
  For custom events, we should use addEventListener, as on<event> only works
  with built-in events. 

  And we also should provide {bubbles: true} , otherwise it will not bubble
  up.

  With custom events, we also have like with built-in ones, capture and 
  bubble phases. 
*/

// *

let elem = document.getElementById("elem");

let event = new Event("click");
elem.dispatchEvent(event);

// **
document.addEventListener("hello", function (event) {
  console.log("Hello from " + event.target.tagName);
});

let eventA = new Event("hello", { bubbles: true });

elem.dispatchEvent(eventA);

/* 
  MouseEvent, KeyboardEvent and others
  ------------------------------------

  Here is a shortlist of classes for UI Events:
  UIEvent
  FocusEvent
  MouseEvent
  WheelEvent
  KeyboardEvent
  ...

  We should use them instead of new Event if we want to create such events, 
  for example new MouseEvent('click'), which allows to specify standard 
  properties for the constructor(***) Note that generic Event doesn't allow
  to set clientX for example. 
*/

let miceEvent = new MouseEvent("click", {
  bubble: true,
  cancelable: true,
  clientX: 100,
  clientY: 100,
});

/* 
  Custom events
  -------------

  For our own, completely new events like 'hello', we should use 
  new CustomEvent. Technically it is the same as Event, with one exception.

  In the second argument, which is an object, we can pass our custom information
  that we want to pass to the event. (**** index.html script.js)

  prevent default actions of custom events
  ----------------------------------------

  We can prevent the default action of our custom events, in other words, the
  functionality that we set for that particular event, we can prevent it just
  like we prevent default browser behavior. 

  We can do that with the same event.preventDefault() (# index.html script.js)
*/

// ****

let btn = document.getElementById("btn");

btn.addEventListener("kindest", function (event) {
  console.log(event.detail.name);
});

btn.dispatchEvent(
  new CustomEvent("kindest", {
    detail: { name: "Leonardo" },
  })
);

// #

let btn2 = document.getElementById("btn2");

function logMessage() {
  let event = new CustomEvent("logMessage", {
    cancelable: true,
  });

  if (!btn2.dispatchEvent(event)) {
    console.log("The action was prevented by a handler");
  } else {
    console.log("");
  }
}
