/* 
  Focusing: focus and blur
  ------------------------

  An element receives the focus when a user click on it, or uses the Tab key, 
  or it is set by default to have the focus on the element in a certain situation.

  Focusing an element generally means: "Prepare to accept the data here"
  Losing focus from an element generally means: "The data has been entered"

  There are some peculiarities with focus events.

  Events focus/blur
  -----------------

  Events: 
  - focus: called on focusing
  - blur: called when losing the focus
  
  In practice, HTML allows to do many validations using required, pattern, and
  so on, or we can use JavaScript for more flexibility.  
*/

// *
let input = document.getElementById("input");

input.onblur = function () {
  if (!input.value.includes("@")) {
    input.classList.add("invalid");
    error.innerHTML = "Please enter a correct email.";
  }
};

input.onfocus = function () {
  if (this.classList.contains("invalid")) {
    this.classList.remove("invalid");
    error.innerHTML = "";
  }
};

/* 
  Methods focus/blur
  ------------------
  
  We can use input.focus() and input.blur() to call them when we need.

  A focus loss can occur for many reasons, so we have to be carefull when 
  dealing with them.  

  Allowing focusing on any element: tabindex
  ------------------------------------------

  By default, many elements do not support focusing. 

  Elements like inputs, buttons, select, a, the support with focus/blur
  is guaranteed, but there are other which do not support them, like 
  divs, spans, table, etc. 

  By using HTML attribute tabindex we can fix that, so we can have focus 
  by providing it. 

  tabindex="0" puts the element among those without tabindex, which means
  they will be selected after those elements with tabindex greather or equal
  to one. 

  tabindex="-1" allows only programmatic focusing, by using elem.focus(), Tab
  key doesn't work here. 

  the property tabIndex works too for the same purpose. 

  Delegation: focusin/focusout
  ----------------------------

  Events focus and blur do not bubble, so we can't use onfocus on form for
  example.

  There're though two solutions:
  1. focus/blur propagate down on the capturing phase, so we can use it there.
  2. there're focusin/focusout, exactly the same as focus/blur, yet they bubble.
*/

// **

let credentials = document.getElementById("credentials");

credentials.addEventListener(
  "focus",
  function () {
    credentials.classList.add("focused");
  },
  true
);

credentials.addEventListener(
  "blur",
  function () {
    credentials.classList.remove("focused");
  },
  true
);
