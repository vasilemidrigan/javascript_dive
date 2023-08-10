/* 
  Event Delegation
  ----------------

  Capturing and bubbling allow us to implement one of the most powerful
  event handling patterns called event delegation.

  The ideea is that if we have a lot of elements handled in a similar way, 
  then instead of assigning a handler to each of them, we put a single
  handler on their common ancestor. 

  In the handler we get event.target to see where the event actually happened 
  and handle it. 

  So in this example (* index.html script.js) we have a table and insted of
  assigning to each td element a handler we will assign the listener to their
  common ancestor which is table. There is though a little problem, the <b>
  inside the <td>, so we need to improve the code (**) So now with the improved
  version, it will work as it is supposed, even if we click on another element. 
*/

// *

let table = document.getElementById("table");
let selectedTd;

function highlight(td) {
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }

  selectedTd = td;
  selectedTd.classList.add("highlight");
}

// the initial version of the handler, untill we realized that we have
// to deal with another elements that can be clicked inside our <td> elements

// table.onclick = function (event) {
//   let target = event.target;

//   if (target.tagName != "TD") return;

//   highlight(target);
// };

// **

table.onclick = function (event) {
  let td = event.target.closest("td");
  console.log(td);

  if (!td) return;

  if (!table.contains(td)) return;

  highlight(td);
};

/* 
  Delegation example
  ------------------
  
  There are other uses for event delegation: Let say we have a menu with
  3 buttons, save, load and search and we also have an object with methods
  save, load and search. How to match them?

  First what comes to mind is to assign a separate handler to each button, 
  but there is a more elegant solution. 

  We can add a handler for the whole menu and data-action attributes for 
  buttons that has the method call(*** index.html script.js) , so we 
  don't need to write the code to assign a handler to each button, just
  make a method and put it into markup, and the html structure is flexible, 
  we can add/remove buttons at any time. 
*/

// ***

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    console.log("saving");
  }

  load() {
    console.log("loading");
  }

  search() {
    console.log("searching");
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

let menu = document.getElementById("menu");

let menuFunctions = new Menu(menu);

console.log(menuFunctions);

/* 
  The 'behaviour' pattern
  -----------------------

  We can also use event delegation to add 'behaviours' to elements declaratively,
  with special attributes and classes. 

  The pattern has two parts:
  1. We add a custom attribute to an element that describes its behavior.
  2. A document-wide handler tracks events, and if an event happens on an
  attributes element - performs action.

  Let's add a behavior to some elements, the clicked text will be struckthrough.
  (# index.html script.js), so in this way we extended html, now we have an
  attribute that describes a behavior.

  NOTE! When we assign an event handler to the document object, we should 
  always do that with addEventListener, because if we'll do that by assigning
  to the DOM property, we will overwrite old ones. 
*/

// #
document.addEventListener("click", function (event) {
  if (event.target.dataset.cross != undefined) {
    event.target.classList.toggle("crossed");
  }
});
