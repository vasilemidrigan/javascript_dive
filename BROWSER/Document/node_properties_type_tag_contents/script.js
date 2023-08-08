/* 
  Node properties: type, tag and contents
  ---------------------------------------

  DOM node classes
  ----------------

  Different DOM nodes have different properties, an anchor tag <a> has 
  link-related properties and respectivelly an <input> node will have
  input related properties. 

  There are common properties between all of them, as all they comes from a 
  single hierarchy. 

  Each DOM node belongs to corresponding built-in class. 

  The root of the hierarchy is EventTarget, which inherits from Object, 
  and is inherited by Node, then the other DOM nodes inherit from it. 

  Event Target - is an abstract class for everything, objects of that
  class are never created, the purpose of it is that every node will
  support events. 

  Node - also an abstract class, serving as a base for other DOM nodes. 
  It provides the core tree functionality: parentNode, nextSibling, 
  childNodes, and so on, they are getters. Objects of Node class are 
  never created. 

  Document - document global object, is an entry point to the DOM. 

  CharacterData - an abstract class inherited by:
  - Text: the class corresponding to text inside elements like <p>info...</p> 
  - Comment: the class for comments, they are not show, but are members of 
  DOM.

  Element - the base class for DOM elements. It provides element-level 
  navigation like nextElementSibling, children, and searching methods like
  getElementsByTagName, querySelector, etc. 

  A browser supports not only HTML, but XML and SVG. So Element class serves 
  as a base for more specific classes like SVGElement, XMLElement, HTMLElement.

  HTMLElement is the basic class for all HTML elements. Inherited by concrete
  HTML elements like: 
  HTMLInputElement, HTMLBodyElement, etc. 
  
  There are many other tags with their own classes that may have specific 
  properties and methods, while some elemnts, such as span, secion and 
  article do not have anything specific, so they are instances of HTMLElement
  class. 
  
  To see the DOM node class name we can constructor.name(*) Or just toString
  it(**)
  
  We can also use instanceof to check the inheritance(***)

  The conclusion: DOM nodes are regular JS objects, with prototype-based
  classes for inheritance. 
*/

// *

let p = document.getElementById("paragraph");

console.log(p.constructor.name); // HTMLParagraphElement

// **

// alert(p); // [object HTMLParagraphElement]

// ***
console.log(p instanceof Element); // true;

/* 
  The 'nodeType' property
  -----------------------

  An old-fashioned way to get the type of the DOM node.(*)

  Tag: nodeName and tagName
  -------------------------

  We can read the tagName and nodeName properties of any DOM node.(**)
  The difference is a bit subtle: 
  - tagName exists only for Element nodes
  - nodeName is defined for any Node: 
    - for elements it means the same as tagname
    - for other node types (text, comments, etc) it has a string with the
      node type
  
  In other words, tagName is only supported for element nodes, as it originates
  from Element class, while nodeName can say something about other nodes types
  as well. (***)  
*/

// *

console.log(document.body.nodeType); // 1
console.log(document.body.firstChild.nodeType); // 3 (text)

// **

console.log(document.body.tagName); // BODY
console.log(document.body.nodeName); // BODY

// ***
console.log(document.body.firstChild.tagName); // undefined
console.log(document.body.firstChild.nodeName); // text

console.log(document.tagName); // undefined
console.log(document.nodeName); // document

/* 
  innerHTML: the contents
  -----------------------

  One of the most powerful weay to change the page. 

  It allows to get the HTML inside the element as a string. (*)
  innerHTML += ' ... ' fully overwrites.
  
  As the content is 'zeroed-out' and rewritten from scratch, all images
  and other resources will be reloaded. 
*/

// *
document.getElementById("block").innerHTML = "<h2>SKY</h2>";

/* 
  outerHTML: full HTML of the element
  -----------------------------------

  Is like the innerHTML and the element itself.

  Writing to outerHTML, doesn't change it, it replace it in the DOM
  completely.(* outerHTML index.html) So in this example, div is 
  removed from the DOM and instead we insert p tag with the text inside.
  In the variable block2 though, we still our div saved.   
*/

// *

let block2 = document.getElementById("block_2");

block2.outerHTML = "<p> some text ... </p>";

console.log(block2);

/* 
  nodeValue/data: text node content
  ---------------------------------
  
  innerHTML is only valid for element nodes. Ther node types, such as 
  text, comments, etc, have their counterpart: nodeValue and data. Those
  two properties are almoste the same with some minor differences. (*) 
*/

let elements = document.body.childNodes;

let comment = elements[1];
let text = comment.nextSibling;

console.log(comment.data);
console.log(text.data);

/* 
  textContent: pure text
  ----------------------

  It provides access to the text inside the element, only text, minus all 
  tags. (*)

  We can also write text safely with this property.(**) The difference 
  between textContent and innerHTML is that with textContent we get
  the text as is, literally, without formating to HTML, which is the 
  case of innerHTML.
*/

// *

let box = document.getElementById("box");
console.log(box.textContent);
// World News

//      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//      Accusantium, cupiditate!

// **
let userString = document.getElementById("user_string");

console.log(userString.firstElementChild);

userString.firstElementChild.innerHTML = "<b>user data</b>"; // formated HTML
userString.lastElementChild.textContent = "<b>user data</b>"; // the text as is

/* 
  The 'hidden' property
  ---------------------

  It specifies if the element is visible or not. (*)
*/

// *

let spyDiv = document.getElementById("spy_div");

setInterval(
  () => (spyDiv.hidden ? (spyDiv.hidden = false) : (spyDiv.hidden = true)),
  1000
);

/* 
  More properties
  ---------------

  DOM elements have more properties, depending on the class, like value
  for input, select, textarea, etc.

  href for anchor tag, and so on and so forth. 
  
  HTML attributes have the corresponding DOM property.

  We can see all the properties by using console.dir(elem), or explore
  DOM properties in developer tools in Properties tab. 
*/
