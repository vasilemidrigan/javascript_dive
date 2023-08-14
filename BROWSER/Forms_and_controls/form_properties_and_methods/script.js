/* 
  Form properties and methods
  ---------------------------

  Navigation: form and elements
  -----------------------------

  Document forms are members of special collection document.forms
  
  The collection is named and ordered. (*)

  When we have a form, any element is in form.elements (**)

  Multiple elements with the same name is typical for radio btns and checkboxes. 
  So in that case form.elements[name] is a collection
*/

// *

let forms = document.forms;
let form = forms[0];

// **

let element = form.elements[0];

console.log(forms);
console.log(form);
console.log(element);
console.log(element);

/* 
  Fieldset as subforms
  --------------------
  
  A form can have many fieldsets, and we can access the elements inside those
  fieldsets by form or by fieldset itself(***)
*/

// ***
let defaultForm = document.forms[1];
let fieldset = defaultForm.elements["default-fieldset"];

console.log(defaultForm.elements);
console.log(fieldset.elements);

/* 
  shorter notation: form.name instead of form.elements[index/name], is also 
  possible, however if we will change the name, it will be still available under
  the old name as well. (****)
*/
let strangeForm = document.forms[2];

console.log(strangeForm.elements[0] === strangeForm.one); // true

console.log(strangeForm.elements[0]);
console.log(strangeForm.one);

strangeForm.one.name = "first";

console.log(strangeForm.first); // accessible
console.log(strangeForm.one); // still accessible
console.log(strangeForm.elements.one); // undefined

/* 
  backreference: element.form
  ---------------------------

  A form reference all elements, and any element references the form. (#)
*/

// #

let first = strangeForm.first;

console.log(first.form); // reference the form

/* 
  Form elements
  -------------

  Controls:

  input and textarea
  ------------------
  
  Access the value is input.value (string) or input.checked (boolean) for 
  radio btns and checkboxes

  ! Do not set textarea.innerHTML, instead use textarea.value. 

  select and option
  -----------------
  
  It has 3 important properties(###)

  We can add multiple selected values (####)
*/

// ##

first.value = "1st";

// ###
let select = document.getElementById("select");

console.log(select.options); // the collection of option elements
console.log(select.value); // the value of currently selected
console.log(select.selectedIndex); // the index of the currently selected

// here, all three lines do the same
select.options[1].selected = true;
select.selectedIndex = 1;
select.value = "mango";

// ####

let selects = document.getElementById("selects");

/* 
  new Option
  ----------

  We can create an option with the syntax($)

  Or unselected option($$)

  Properties of option element are:
  option.selected: is the option selected
  option.index: its index among other options in the <select> parent element
  option.text: the text content of the option
*/

// $

let option = new Option("fruits", "fruits", true, true);
let unselectedOption = new Option("legumes", "legumes");
