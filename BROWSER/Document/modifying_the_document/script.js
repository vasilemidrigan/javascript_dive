/* 
  Modifying the document
  ----------------------

  DOM modification is the key to creating live pages.

  Creating an element
  -------------------

  We can create DOM nodes in two ways:
  - document.createElement(tag) : creates a new element node with the 
  given tag (*)
  - document.createTextNode(text) : creates a new text node with the
  given text (**)

  Insertion methods
  -----------------

  Creating a variable that holds an element is not sufficient, we need to 
  insert it into the document. 

  To put an element into another, we use append method(***)

  There are more insertion methods(****) 

  Strings are inserted as is, like with textContent (#)

  We can also insert multiple elements in one call.(##)
*/

// *

let div = document.createElement("div");

// **

let textNode = document.createTextNode("lorem...");

// ***

document.body.append(div);

// ****

let list = document.getElementById("list");

let fruitOne = document.createElement("li");
fruitOne.textContent = "strawberry";

let fruitTwo = document.createElement("li");
fruitTwo.textContent = "avocado";

let line = document.createTextNode("--------");
let pluses = document.createTextNode("--------");

// node.append (appends at the end of the node)
list.append(fruitOne);

// node.prepend - (inserts at the beggining of the node)
list.prepend(fruitTwo);

// node.before - (inserts before the node)
list.before(line);

// node.after - (inserts after the node)
list.after(pluses);

// #

list.nextSibling.after("  <b>important message!!!</b>");

// ##

let fruitThree = document.createElement("li");
fruitThree.textContent = "banana";

let fruitFour = document.createElement("li");
fruitFour.textContent = "mango";

list.append(fruitThree, fruitFour);

/* 
  insertAdjacentHTML/Text/Element
  -------------------------------

  If we want to insert an HTML string as html, not as a string literally, 
  we can use elem.insertAdjacentHTML(where, html) (*)

  insertAdjacentText(where, text) : inserts text as is.  (**)
  
  insertAdjacentElement(where, elem) : inserts text as is.  (***)
*/

// *

let listA = document.getElementById("list_a");

listA.insertAdjacentHTML("beforebegin", "<i>Fruits list:</i>");
listA.insertAdjacentHTML("afterbegin", "------------");
listA.insertAdjacentHTML("beforeend", "------------");
listA.insertAdjacentHTML("afterend", "<b>end list.</b>");

// **

listA.insertAdjacentText("beforeend", "<p>text</p>");

// ***

listA.insertAdjacentElement("afterbegin", document.createElement("hr"));

/* 
  Node removal
  ------------

  To remove a node we can use node.remove() (*)
  
  If we want to move one element to another place, there is no need to 
  remove it. All insertion methods automatically remove the node from the 
  old place. (**)
*/

// *

let foo = document.createElement("p");

document.body.append(foo);

foo.remove();

// **

let bar = document.createElement("p");

bar.textContent = "baaar";

document.body.lastChild.after(bar); // is gone
document.body.firstChild.after(bar); // actual position

/* 
  Cloning Nodes
  -------------

  To clone DOM elements, we can make a function and put the code there, 
  or we can clone the elements and modify the text inside if we need so. 

  elem.cloneNode(true) creates a deep clone of the element with attributes
  and subelements. (*)

  elem.cloneNode(false) create a clone without child elements. (**)
*/

// *

let cloneList = list.cloneNode(true);

document.body.append(cloneList);

console.log(cloneList);

// **

let shallowList = list.cloneNode(false);

console.log(shallowList); // only ul tag, without li elements

/* 
  DocumentFragment
  ----------------

  It is a special DOM node that serves  as a wrapper to pass around lists
  of nodes. (*)

  Document.fragment() is rarely used, as we can simply use an array of nodes
  instead.(**)


*/

// *

function getListContent() {
  let fragment = new DocumentFragment();

  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

let listB = document.createElement("ul");

document.body.append(listB);

listB.append(getListContent());

// **

function createArrNodes() {
  let arr = [];

  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.append(i);
    arr.push(li);
  }

  return arr;
}

let listC = document.createElement("ul");

document.body.append(listC);

listC.append(...createArrNodes());

/* 
  Old-school insert/remove methods
  --------------------------------

  parentElem.appendChild(node) - append nodes as the last child

  parentElem.insertBefore(node, nextSibling) - inserts node before
  nextSibling into parentElem. 

  parentElem.replaceChild(node, oldChild) - pretty obvious

  parentElem.removeChild(node) - pretty obvious as well

  All these methods return the node on which we are using the method, 
  but usually it is not used. 

  document.write
  --------------

  The method comes from times when there was no DOM, no standards. 

  There is big NO with this method: The call to document.write only
  works while the page is loading. (*)

  So it is unusable after loaded stage. 

  There is an upside though: It is blazingly fast at inserting text 
  when the browser inserts text as there is no DOM modification involved, 
  it writes directly into the page text, while DOM is not yet build.
*/

// *

document.write("Hello");

// setTimeout(() => document.write("<b>some text</b>"), 1000);
// the line above erases all the content on the page, and inserts its string.
