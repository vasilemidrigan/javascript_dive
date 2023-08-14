/* 
  Events: change, input, cut, copy, paste
  ---------------------------------------

  Events that cover data updates.

  Event: change
  -------------

  For text fields, it triggers when it loses focus, for select, checkboxes and
  radio btns, it triggers when the selection is changed. 

  Event: input
  ------------

  Triggers every time the value is modified by the user.(*)

  We can't preventDefault() behavior of input as the event occurs after
  the value is already modified. 
*/

// *

let input = document.getElementById("input");
let onInput = document.getElementById("on-input");

input.oninput = function () {
  onInput.textContent = input.value;
};

/* 
  Events: cut, copy, paste
  ------------------------

  These events provide access to data that is cut/copied/pasted. (**)

  We can use event.preventDefault()
  
  Here (**) we're reading the data through ClipboardEvent class.
*/

let text = document.getElementById("text");

text.oncopy = function (e) {
  console.log(e.type, document.getSelection());
};

text.oncut = function (e) {
  console.log(e.type, document.getSelection());
};

text.onpaste = function (e) {
  console.log(e.type, e.clipboardData.getData("text/plain"));
};
