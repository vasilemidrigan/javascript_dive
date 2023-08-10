/* 
  Browser default actions
  -----------------------

  Many events automatically lead to certain actions performed by the browser.
  For example: 
  - a click on a link: initiates navigation to its URL
  - a click on a form submit button: initiates its submission to the server
  - pressing a mouse button over a text and moving it - selects the text

  Sometimes we don't want the browser action to interfere when we handle an 
  event, we want to run our own actions. 

  Preventing browser actions
  --------------------------

  There are two ways to restrict the browser to interfere:
  1. The method event.preventDefault() (* index.html)
  2. If the handler is assigned using on<event> , not by addEventListener, 
  then returning false will also work. (** index.html)

  For example, here we have a handler that have some functionaliy when we 
  click the link and on the end prevents default browser action,
  (*** index.html script.js) if we don't return false at the end, then 
  our browser will behave by default when clicking a link, it will go to 
  the URL. 

  Follow-up events
  ----------------

  Certain events flow one into another, so if we prevent the first, there will
  be no second.

  In this example we prevent mousedown, so the focus event can't be triggered
  as ther is no click roughly speaking. (**** index.html) As we can see, there
  is no focus after we click on the input. 
*/

// ***

let smile = document.getElementById("smile");

smile.onclick = function (event) {
  if (event.target.nodeName != "A") return;

  let href = event.target.getAttribute("href");

  console.log(href);

  return false;
};

/* 
  The passive handler option
  --------------------------

  The optional passive: true option of addEventListener, signals the browser 
  that the handler is not going to call preventDefault(). But why?

  As an example we'll take touchmove event that makes scrolling when touching 
  the screen and moving the finger across the screen. 

  When the user touches the screen, the browser should process all handlers, and
  if preventDefault() is not called, then it proceeds with scrolling. 

  So the option passive: true initially tells the browser that the handler
  will not call preventDefault() so without any dellay, it can immediately
  scroll, providing an instant experience.

  event.defaultPrevented
  ----------------------

  As we already know, stopPropagation() is not really wise to use, as we block
  the access to our events for other cases when we need to track the clicks for
  example, so instead of using this method, we can use the property 
  defaultPrevented. 

  Let say we have two nested elements, each of which should be showing its
  own context menu. So we need to stop propagation from the nested element
  to the outer one, so it will not bubble. 

  How do we do that? In the outer elements handler, we can make a check, 
  whether  the event has its property defaultPrevented set to true, if so
  then it means the event was handled, so we don't handle our event further, 
  we just return. (# index.html script.js)

*/

// #
let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

inner.oncontextmenu = function (e) {
  e.preventDefault();

  console.log("context menu of the inner element!");
};

outer.oncontextmenu = function (e) {
  if (e.defaultPrevented) return;

  e.preventDefault();
  console.log("context menu of the outer element!");
};

document.oncontextmenu = function (e) {
  if (e.defaultPrevented) return;

  e.preventDefault();
  console.log("context menu of the document object!");
};

/* 
  Stay semantic, don't abuse
  --------------------------

  We should generally keep the semantic meaning of HTML elements, for instance
  <a> should perform navigation and not replace it when there is no need with
  a button or with even worse a <div> . We should keep HTML accessiblity in 
  account.   
*/
