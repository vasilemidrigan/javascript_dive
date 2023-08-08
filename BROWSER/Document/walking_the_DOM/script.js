/* 
  Walking the DOM
  ---------------

  To manipulate DOM objects, we first need to reach them.

  All operations on the DOM start with 'document', that's the main 
  entry point.
  
  This is a picture that allow to travel betweem DOM nodes(*) index.html

  On top: documentElement and body
  --------------------------------

  The topmost tree nodes are available directly as document properties:
  <html> = document.documentElement (that's the topmost document node) (**)
  <body> = document.body
  <head> = document.head

  In DOM, null means 'no such node' or "doesn't exist".

  Children: childNodes, firstChild, lastChild
  -------------------------------------------

  child nodes(children): direct children like <html> and <head>
  descendants: all elements that are nested in the given one, including
  children, their children, and so on. 

  i.e. here we are listing all child nodes(***) The script sees only until
  the script tag, if there is somthing below it, it will not show it. 

  firstChild and lastChild access respective children.

  elem.hasChildNodes() check if there are any child nodes. 

  DOM collections
  ---------------

  childNodes look like an array, but in fact it is an array-like iterable i
  object, a collection. (#)

  As it is iterable, because it has Symbol.iterator, we can loop with 
  for..of over it.

  Array methods of course aren't accessible, as it is not an array, but we
  can use Array.from(childNodes).filter if we need so. 

  DOM collections are read-only, we can't replace them by assigning for 
  example childNodes[i] = ... , to do that we need other methods. 

  Don't use for..in loop to iterate over collections, because we'll get as
  a result properties that we don't realy want to get. 

  Siblings and the parent
  -----------------------

  sibling are nodes that are children of the same parent.

  i.e. <body> is "next" or "right" sibling of <head>

  parent is available as parentNode

  nextSibling, previousSibling ...

  Element-only navigation
  -----------------------

  Navigation above refer to all nodes, like comments, text, element nodes, etc.

  If we want to work only with tags that forms the structure of the page, we
  need to include Element inside:
  firstElementChild, lastElementChild, nextElementSibling, ... , parentElement. 

  Usually parentElement and parentNode returns the same parent, with one 
  exception: document.documentElement.parentNode and -.parentElement (##)
  
  More links: tables
  ------------------

  Certain types of DOM elements provide additional properties specific to 
  their type. 

  Tables are one of such examples.

  There are a lot of properties like: table.rows, table.tBodies, tr.cells, 
  etc. Those are pretty handy to work with tables. 

  HTML Forms as well have those kind of specific properties. 
*/

// **

console.log(document.documentElement);

// ***
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}

// #
console.log(document.body.childNodes);

// ##
console.log(document.documentElement.parentElement);
console.log(document.documentElement.parentNode); //
