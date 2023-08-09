/* 
  Window sizes and scrolling
  --------------------------

  In order to find the width, height of the browser window, the full width
  and height of the document including scrolled out part, and other details
  we can use the root document element document.documentElement .

  Width/Height of the window (clientHeight/Width)
  ----------------------------------------------

  To get window width and height we can use clientHeight/Width(*)

  Don't use innerWidth and innerHeight, as they include scrollbars as well,
  clientHeight/Width don't include them, so we have a precise size.
*/

// *

console.log(document.documentElement.clientHeight); // 938
console.log(document.documentElement.clientWidth); // 405

/* 
  Width/Height of the document
  ----------------------------
    
  To obtain the full document height, even if it is pretty weird, we 
  have to take the maximum from these properties(*) Not a smart logic
  from ancient times. 
*/

// *

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

console.log(scrollHeight); // 938

/* 
  Get the current scroll
  ----------------------

  For document scroll, we need document.documentElement.scrollLeft which works
  in most browsers, and document.body instead of document.documentElement
  in some older browsers.(*)

  The scroll is available in properties window.pageXOffset/pageYOffset(**), and 
  these properties are read-only, and have aliases as window.scrollX/Y(***)
*/

// *

console.log(document.documentElement.scrollLeft); // 0
console.log(document.documentElement.scrollTop); // 58

// **
console.log(window.scrollX); // 0
console.log(window.scrollY); // 58.5

// ***
console.log(window.scrollX); // 0
console.log(window.scrollY); // 58.5

/* 
  Scrolling: scrollTo, scrollBy, scrollIntoView
  ---------------------------------------------

  Alternatively, there is a simpler solution: window.scrollBy(x, y) and
  window.scrollTo(pageX, pageY)

  scrollBy(x, y) scrolls the page relative to its current position. For
  instance scrollBy(0, 25) scrolls the page 25px down (see index.html)(*)

  scrollTo(pageX, pageY) scrolls the page to absolute coordinates, so that 
  top-left corner of the visible part has coordinates pageY pageX relative 
  to the documents top-left corner. (**)

  scrollIntoView(top), see index.html(***), if the argument is empty or
  true then the elements upper edge is aligned with the window top, if
  the argument is false, then the bottom edge is alligned with the 
  bottom window edge. 
*/

// *

setTimeout(() => window.scrollBy(0, 60), 3000);

// **

setTimeout(() => window.scrollTo(0, 0), 2000);

/* 
  Forbid the scrolling
  --------------------

  Sometimes we need to block the scroll, like for example to read an important
  message, etc. 

  For this purpose, we can set overflow to hidden and vice versa. The content
  is changing when switching those properties because the scrollbar occupied 
  space, and it looks a little odd, but if we want to make it look better we
  can set padding equal to the space the scrollbar occupied, by seeing 
  seeing clientWidth property before the switch. 
*/
