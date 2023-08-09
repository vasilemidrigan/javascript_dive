/* 
  Introduction to browser events
  ------------------------------

  An event is a signal that something has happened, all DOM nodes generates
  such signals, but events are not limited to DOM.

  There are a lot of events related to mouse, keyboard, document, css, forms,
  etc.

  Event handlers
  --------------
  
  To react on events we can assign a handler - a function that runs in case of
  an event. 

  There are several ways to run a handler.

  HTML attribute
  --------------

  A handler can be set in HTML with an attribute named on<event> 
  (* index.html)

  Writing event handlers inside an HTML attribute is not a better way, because
  we can't write a lot there, and of course we better separate the function
  from html, so we can write our event handle inside our JS code. (** index.html
  and current file)
  
  HTML attribute names as we know aren't case sensitive, but it is recommended to 
  write them all lower case. 

  DOM property
  ------------
  
  We can assign a handler using a DOM property on<event>. (*** index.html and
  current file)
  
  If the handler is assigned using HTML attribute, then the browser reads it and
  creates a new function from the attribute content and writes it into the DOM
  property.

  So using HTML attribute or using DOM property direct assigning, both of them
  works the same. 

  We can't assign more than one event handler, for example more than one onclick 
  event. By writing another, it will just overwrite the previous one. 
*/

// **

function log() {
  console.log("clicked");
}

// ***
let btn = document.getElementById("btn");

btn.onclick = log;

/* 
  Accessing the element 'this'
  ----------------------------

  The value of 'this' inside the handler is the element. The one which has the
  handler on it. (**** index.html)

  Possible mistakes
  -----------------
  
  Here are some subtleties:

  - When assigning a handler to a DOM property, we assign it without parentheses,
  otherwise we are assignin what the function returns, we are assigning only 
  the handler name. 
  - In HTML attributes though, we pass paretheses, because when the browser reads
  the attribute, it creates a handler function with body from the attribute 
  content, so it calls it when necessary not imediatelly. (*)

  Don't use setAttributes with handlers, as the function we will pass will become
  a string. 

  DOM properties are case-sensitive.
*/

// *

// the handler function that creates the browser
// with the content of our function inside it.

// button.onclick = function () {
//   sayThanks(); // <-- the attribute content goes here
// };

/* 
  addEventListener
  ----------------

  The problem though with all the options above, is that we can't assign multiple
  handlers to one event. 

  Let say that depending on some variables, we want the event to run differently,
  so we will need two event handlers, but if we will try to write them, we'll
  get an overwrite. 

  addEventListener was developed because of this reason, as well as removeEvent
  Listener. 

  elem.addEventListener(event, handler, [options])
  
  So we have the event, the handler function and an additional optional object
  with properties. 

  To remove the handler use elem.removeEventListener(event, handler, [options])

  To remove the handler we need to pass the same function, so passing an 
  anonynous function with the same code for example will not work because
  those are two different function objects, event if the same code, doesn't 
  matter. 

  Note: If we don't store the function in a variable, then we can't remove it.

  Multiple calls to addEventListener allow to add multiple handlers(# index.html
  and current file)

  There are events that can be assign only with addEventListener, we can't 
  assign them via DOM property, for example DOMContentLoad. 
*/

// #

function logMessage() {
  console.log("there is a message...");
}

function logText() {
  console.log("there is a text...");
}

let btnTwo = document.getElementById("btn_two");

btnTwo.onclick = () => console.log("qwerty...");
btnTwo.addEventListener("click", logMessage);
btnTwo.addEventListener("click", logText);

/* 
  Event Object
  ------------

  When an event happens, the browser creates an event object, puts details into 
  it and passes it as an argument to the handler. 

  Here we get pointer coordinates from the event object(## index.html and current
  file)

  Some properties of event object: 
  event.type : pretty obvious
  event.currentTarget : it is the same as 'this', so it is the element that 
  handled the event, unless the handler is an arrow function, or 'this' is 
  bound to something else. 

  There are more properties, many of them depend on event type. 

  Event object is also available in HTML handlers when passing to an attribute. 

  No matter how we assign the handler, it gets an event object as the first
  argument. 
*/

// ##

let btnThree = document.getElementById("btn_three");

btnThree.onclick = function (event) {
  console.log(event.type + " at " + event.currentTarget);
  console.log("Coordinates: " + event.clientX + ":" + event.clientY);
};

/* 
  Object handlers
  ---------------

  We can assign an object as an event handler using addEventListener, so 
  when the event occurs, its handleEvent method is called. (### index.html
  and current file)

  We can also use objects of a custom class ($) Note that we have to 
  explicitly pass the event that we need as the first argument to 
  addEventListener, otherwise it will not work.
*/

// ###

let obj = {
  handleEvent(event) {
    console.log(event.type + " at " + event.currentTarget);
  },
};

let btnFour = document.getElementById("btn_four");

btnFour.addEventListener("click", obj);

// $

class Menu {
  handleEvent(event) {
    switch (event.type) {
      case "mousedown":
        console.log("Mouse pressed");
        break;
      case "mouseup":
        console.log("... and released!");
        break;
    }
  }
}

let menu = new Menu();

let btnFive = document.getElementById("btn_five");

btnFive.addEventListener("click", menu); // doesn't work
btnFive.addEventListener("mousedown", menu);
btnFive.addEventListener("mouseup", menu);

/* 
  handleEvent() method, does not have to do all the job by itself, we can 
  provide other event-specific methods as well: ($$)

  This is an interesting feature that gives us more flexibility. 
*/

// $$

class Menu1 {
  handleEvent(event) {
    console.log(event);
    let method = "on" + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }

  onMousedown() {
    console.log("mouse pressed");
  }

  onMouseup() {
    console.log("mouse released");
  }
}

let menu_one = new Menu1();

let btnSix = document.getElementById("btn_six");

btnSix.addEventListener("mousedown", menu_one);
btnSix.addEventListener("mouseup", menu_one);
