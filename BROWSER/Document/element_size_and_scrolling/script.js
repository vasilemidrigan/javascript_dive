/* 
  Element size and scrolling
  --------------------------

  There are many JS properties that allow us to read info about element 
  width, height, and other geometry features. 
*/

let box = document.getElementById("box");

box.style.cssText = `
  width: 300px;
  height: 200px;
  border: 25px solid purple;
  padding: 20px;
  overflow: auto;
`;

/* 
  offsetParent, offsetLeft/Top
  ----------------------------

  The offsetParent is the nearest ancestor that the browser uses for calculating
  coordinates during render. The nearest ancestor is: (*)
  1. CSS positioned (absolute, relative, fixed or sticky) or
  2. td, th or table, or
  3. body

  offsetParent is null when: (**)
  1. the element is display: none or it is not in the document
  2. for body and html
  3. for elements with position: fixed
    
  offsetLeft/offsetTop provides x/y coordinates relative to offsetParent 
  upper-left corner (***)
*/

// *

let innerBlock = document.getElementById("inner-block");

console.log(innerBlock.offsetParent); // div#block (as it is positioned absolute)

// **
let block2 = document.getElementById("block-2");

console.log(block2.offsetParent); // null (as it has display: none)

// ***

console.log(innerBlock.offsetLeft); // 35 (which means 35px)
console.log(innerBlock.offsetTop); // 10 (which means 35px)

/* 
  offsetWidth/Height
  ------------------

  Those two properties are the full size including borders both for width
  and for height.

  So for offsetWidth we have: content-width + paddings + borders (*) 

  Geometry properties are zero/null for elements that are not displayed. 
  If the element or any of its ancestor has display: none, or is not in
  the document, then all geometry properties are zero. 

  When we create an element and it is not yet inserted in the document it
  has these values: (**)

  So we can create a function that checks if it has an offsetParent (***)
*/

// *

console.log(block.offsetWidth); // 52
console.log(block.offsetHeight); // 52

// **
let foo = document.createElement("p");

console.log(foo.offsetParent); // null
console.log(foo.offsetWidth); // 0
console.log(foo.offsetHeight); // 0

// ***

function hasOffsetParent(elem) {
  return !!elem.offsetParent;
}

console.log(hasOffsetParent(block2)); // false
console.log(hasOffsetParent(block)); // true

/* 
  clientTop/Left
  --------------

  They are left and right borders witdth, but more precisely they are
  coordinates of the inner side to the outer side. We can see why
  when the document is right to left, like Arabic for example, and we
  have the scrollbar nested in the clientLeft size. (*) 
*/

// *

console.log(block.clientLeft); // 1 (1px)
console.log(block.clientTop); // 1

/* 
  clientWidth/Height
  ------------------

  Those two properties are the space between borders, excluding scrollbars. (*)
*/

// *

console.log(block.clientWidth); // 50
console.log(block.clientHeight); // 50

/* 
  scrollWidth/Height
  ------------------

  Like clientWidth/Height, but also include scrolled out (hidden) parts(*)
  If there is no horizontal scroll, then it is equal to 0;
*/

// *

console.log(box.scrollHeight); // 373
console.log(box.scrollWidth); // 62

/* 
  scrollLeft/scrollTop
  --------------------

  They are width and height of the hidden, scrolled out part of the element,
  in other words is how much is scolled up. (*)

  Those two properties can be modified, and the browser will scroll the element.
  (**)
*/

// *

console.log(box.scrollLeft);

setInterval(() => console.log(box.scrollTop), 1000);

// **

box.scrollTop = 35;

/* 
  Don't take width/height from CSS
  --------------------------------

  Taking widths and heights from css to perform calculations is a bad idea, as
  width and height depend on box-sizing property in CSS, and those two properties
  can be auto for an inline element for example, so this is pretty bad. Instead
  we must use precise geometry properties instead for JS calculations. 

  There are also issues with scrolbar, depending on the browser it will behave
  differently, so geometry properties takes this into account too. 
*/
