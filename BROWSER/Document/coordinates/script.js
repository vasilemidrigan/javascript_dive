/* 
  Coordinates
  -----------
  
  To move elements around we should be familiar with coordinates. 

  Most JS methods deal with one or two coordinate systems:
  - Relative to the window: similar to position: fixed, calculated from
  the window top/left edge, we'll denote these coordinates as clientX and
  clientY. (*)
  - Relative to the document: similar to position: absolute in the document
  root, calculated from the document top/left edge, we'll denote them
  pageX and pageY. (**)

  Element coordinates: getBoundingClientRect()
  --------------------------------------------

  This methods returns window coordinates for a minimal 
  rectangle that encloses element as an object of built-in
  DOMRect class.(*)

  Main DOMRect properties: 
  - x/y : x/y coordinates of the rectangle origin relative to the window
  - width/height : width/height of the rectangle(can be negative)

  There are also derived properties:
  - top/bottom : y coordinate for the top/bottom rectangle coordinates
  - left/right : x coordinate for the left/right rectangle edge
  
  If we scroll and the element is above the window, then we can see that 
  there are negative coordinates. 

  Additional derived properties are for convenience. 

  Width and Height can be negative, it is useful when for example representing
  mouse selection with properly marked start and end. 

  Negative width/height means that the rectange starts from bottom right and
  grows to top-left. 

  Coordinates right/bottom are different from CSS position properties because
  all window coordinates are counted from top-left corner, in CSS though it 
  can be positioned relative to the right edge, and to the bottom as well.   
*/

// *

let square = document.getElementById("square");

console.log(square.getBoundingClientRect());
// {x: 8, y: 730, width: 52, height: 52, top: 730, …}

/* 
  elementFromPoint(x, y)
  ----------------------
    
  It returns the most nested element at window coordinates x and y.(*)
*/

let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = "purple";

/* 
  Using from 'fixed' positioning
  ------------------------------

  To position something, usually we need coordinates. 
  
  We can use our box that we want to position, set the position:fixed,
  then use right/left, and elem.getBoundingClientRect() to get
  the coordinates. So we are positioning our element by using the
  coordinates from the method above. 
  
  As the element is positioned fixed, it will remain in the same coordinates 
  relative to the window, even when scrolling. 

  Document coordinates
  --------------------

  If we want document-relative coordinates, we need position absolute.

  Coordinates start from upper-left corner of the document, not the window.

  There is no standard method to get the document coordinates, but it is 
  easy to write them:
  pageY = clientY + height of the scrolled out vertical part of the document.
  pageX = clientX + width of the scrolled out horizontal parte of the document.

  The function getCoords(elem) will take window coordinates from 
  elem.getBoundingClientRect() and add the current scroll to them(*)

  So we can use coordinates for a more precise styling, by combining 
  window and document coordinates and css positioning styles. 
*/

// *

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    rigth: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

console.log(getCoords(square));
