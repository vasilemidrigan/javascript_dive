/* 
    Moving the mouse, mouseover/out, mouseenter/leave
    -------------------------------------------------

    Events mouseover/mouseout, relatedTarget
    ----------------------------------------
  
    mouseover: (*)
    - target: the element over which the cursor currently is 
    - relatedTarget: the elements from which the mouse came

    mouseout: (vice versa)

    skipping elements
    -----------------

    If we move the cursor fast enough, there are elements that will be skipped.
    For example, if we have two elements, it can be triggered only, but if there
    is mouseover, 100% we'll get mouseout, if entering an element is catched, 
    there will be registered the catch as well.

    That's a performance thing, we should keep this in mind when dealing with
    such cases. 
  
    Events mouseenter/leave
    -----------------------
    
    It is like mouseover, mouseout, but with some differences: transitions from
    and to descendants are not counted, and do not bubble. 

    Event delegation
    ----------------

    If we have a table, and we need event delegation, we can't use mouseenter/
    leave, as they don't bubble, so we can't process evetns on <table>, as we 
    will only see events triggered when enter and leaving table as a whole, not
    a particular <td>. 

    So for this purpose we can use mouseover/out.
  


*/

// *

let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

outer.addEventListener("mouseover", function (e) {
  console.log(e.target);
  console.log(e.relatedTarget);
});

// **

let parent = document.getElementById("parent");
let child = document.getElementById("child");

let boxA = document.getElementById("box_a");
let boxB = document.getElementById("box_b");

let boxes = [boxA, boxB, parent, child];

boxes.forEach((elem) => {
  elem.addEventListener("mouseover", function (e) {
    console.log("mouseover: ", e.target);
  });
  elem.addEventListener("mouseout", function (e) {
    console.log("mouseout: ", e.target);
  });
});

// ***

let table = document.getElementById("table");

let currentElem = null;

table.onmouseover = function (e) {
  if (currentElem) return;

  let target = e.target.closest("td");
  console.log(target);

  if (!target) return;

  if (!table.contains(target)) return;

  currentElem = target;
  onEnter(currentElem);
};

table.onmouseout = function (e) {
  if (!currentElem) return;

  let relatedTarget = e.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;

    relatedTarget = relatedTarget.parentNode;
  }

  onLeave(currentElem);
  currentElem = null;
};

function onEnter(elem) {
  elem.style.background = "white";

  console.log(currentElem.tagName);
}

function onLeave(elem) {
  elem.style.background = "";

  console.log(elem.tagName);
}
