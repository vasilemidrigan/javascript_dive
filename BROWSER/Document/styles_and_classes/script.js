/* 
  Styles and classes
  ------------------
  
  Generally, there are two ways to style an element:
  1. create a class in css and add it
  2. write styles directly into style attribute of the html tag. 

  JS can modify both, classes and style properties. 

  We should always use classes, and the latter only if classes can't 
  handle it. 

  style attribute is acceptable if there are complex calculations involved,
  so we need to write them with JavaScript dynamically, like for example 
  coordinations of the element. 

  className and classList
  -----------------------

  Because 'class' was a reserved word in ancient times, we didn't had at 
  the time elem.class property. So it was introduces 'className' corresponding
  to the 'class' attribute. (*)

  We can manipulate with our class list(**)  

  classList is iterable, so we can iterate with for..of (**)
*/

// *

let block = document.querySelector(".block");

console.log(block.className); // block

// **

block.classList.add("div"); // add class
block.classList.remove("div"); // removes class
block.classList.toggle("div"); // add if doesn't exist and vice versa
block.classList.contains("div"); // check if class exists, returns (boolean)

// **

for (let className of block.classList) {
  console.log(className);
}

/* 
  Element style
  -------------

  elem.style is an object that corresponds to what is written in the style
  attribute. 

  We can use expressions to set styles(*)

  Dash means uppercase: z-index => elem.style.zIndex
*/

// *

document.body.style.backgroundColor = prompt(
  "What color to paint the screen?",
  "purple"
);

/* 
  Resetting the style property
  ----------------------------

  To reset the style property, we can just reseting it to an empty string.(*)

  Also there is a special method (**) The argument is hyphenated
  if there is a multi-word, just like in CSS.
*/

// *

document.body.style.border = "10px dashed black";

document.body.style.border = "";
document.body.style.zIndex = 2;

document.body.style.removeProperty("background-color");

console.log(document.body.style);

/* 
  style.cssText
  -------------

  Fully rewrites styles, it overwrites all previous added styles. If we
  need to iniatially set new styles, we can use it, but if there are old
  styles, we will overwrite all. (*)

  The same we can accomplish with setAttribute() (**)
*/

// *

block.style.cssText = `
border: 10px solid purple;
width: 100px;
height: 100px;
margin: 25px auto;
`;

// **

block.setAttribute(
  "style",
  "border-radius: 5px; border: 1px solid purple; width: 50px; height: 50px; margin: 50px auto;"
);

console.log(block.style);

/* 
  Computed styles
  ---------------

  Modifying a style is easy, but how to read it? 

  We can't read anything that comes from elem.style(*) 

  There are two concepts in CSS: 
  1. A computed style value is the value after all CSS rules and CSS inheritance
  is applied. It can look like height: 1em, font-size: 125%;
  2 .A resolved style the one finally applied to the element. Values like
  1em and 125% are relative. The browser takes the computed value and makes
  all units fixed and absolute, for ex. height: 20px, font-size: 16px;

  So nowadays getComputedStyle returns resolved value, not computed as it was
  a long time ago, because it is more convenient. 

  When requiring a property name, we should use the entire name, otherwise we
  can get wrong return, i.e. borderTopWith, paddingTop, etc. (**)

  :visited links styles are hidden, for security reasons, we can't see them.
*/

// *

block.style.width; // nothing happens here
console.log(block.style.width); // 50px (string)

// **

let computedStyle = getComputedStyle(block);

console.log(computedStyle.marginTop); // 50px (string)
