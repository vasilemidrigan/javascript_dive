/* 
  Attributes and properties
  -------------------------

  When the browser loads the page, it parses HTML and generates DOM objects 
  from it. 

  For elements nodes, most standart HTML attributes become properties of 
  DOM objects. 

  In this example we have a div with id="block", so we can access the 
  property: div.id = 'block' (*)

  But attribute-property mapping is not one-to-one. 

  DOM properties
  --------------

  We can add properties to DOM objects, as they are regular JS objects.

  Adding property to body(**)

  Adding methods (***) The value of this in this case is document.body
  
  So DOM properties behaves just like those of regular JavaScript objects. 

  Generaly it is recommended to use DOM properties, and refer to attributes 
  only when DOM properties do not suits us
*/

// *

let elements = document.body.childNodes;

let block = elements[1];

console.log(block.id); // block

// **

document.body.information = {
  name: "Leonardo",
  surname: "Midrigan",
};

console.log(document.body.information);

// ***

document.body.logTagName = function () {
  console.log(this.tagName);
};

document.body.logTagName(); // BODY

/* 
  HTML attributes
  ---------------

  All standard HTML attributes have a respective DOM property created when
  the browser parses the HTML on loading page stage.(*)

  Standart attributes and properties for one element can be unknown for another.

  If the attribute is not standard, we can't get them in the same way as above, 
  but we have another solution(**) These methods operates exactly with what is
  written in HTML. 

  We can see all attributes, with elem.attributes, which is a collection of 
  objects that belongs to a built-in Attr class with name and value properties,
  also it is iterable.
  (***)

  HTML attributes are case-insensitive, and their values are always strings. 
  (****)
*/

// *
let input = document.getElementById("input");

console.log(input.id);
console.log(input.type);
console.log(input.placeholder);

// **
let p = document.getElementById("p");

console.dir(p);
console.log(p.id); // p (accessible as it is a standard attribute)
console.log(p.isReady); // undefined (as it is not a standard attribute)

// checking for existence
console.log(p.hasAttribute("isReady")); // true
// getting the value
console.log(p.getAttribute("isReady")); // true (the value)
// setting the value
console.log(p.setAttribute("isReady", false));
console.log(p.getAttribute("isReady")); // false
// remove the attribute
console.log(p.removeAttribute("isReady"));
console.log(p.hasAttribute("isReady")); // false

// ***
let pa = document.getElementById("pa");

console.log(pa.attributes);

// ****

console.log(pa.getAttribute("AcTiVe")); // 1
console.log(typeof pa.getAttribute("AcTiVe")); // string

/* 
  Property attribute synchronization
  ----------------------------------

  When a standart attribute is changes, the corresponding property is auto-
  updated, and (with some exceptions) vice-versa. (*)

  But there exceptions, i.e. input.value synchronizes only from attribute 
  > property, but not back. (**) That feature can be useful in a situation
  when the user changes the value, and after, when we want to recover, we
  have the origin value from HTML, it's in the attribute. 
*/

// *

let foo = document.getElementById("foo");

foo.setAttribute("id", "foo_pa");
console.log(foo.id); // foo_pa

foo.id = "foo";
console.log(foo.getAttribute("id")); // foo

// **
let inputOne = document.getElementById("input_one");

input.setAttribute("value", "lorem");
console.log(input.value); // lorem

input.value = "ipsum";
console.log(input.getAttribute("value")); // lorem

/* 
  DOM properties are typed
  ------------------------

  DOM properties are not always strings, there are booleans, objects, etc. 

  input.checked is a boolean.

  style attribute is a string, but style property is an object. (*)

  Most properties though are strings. 

  Rarely, DOM properties can differ from the attribute, for example href 
  property has always full URL, so if we need the vlaue of href or any 
  other attribute as it is in HTML, we can do that with getAttribute. 
*/

// *

console.log(document.body.style); // CSSStyleDeclaration

/* 
  Non-standard attribute, dataset
  -------------------------------
  
  Non-standard attributes sometimes are used to mark html elements, or to 
  pass custom data from HTML to JS, or to styles elements. 

  Using an attribute can be prefereable to having classes, because it is
  more convenient to manage with div.setAttribute('order-state', 'canceled') i.e.

  The problem though is that if we use non-standard attributes, later on, 
  the standard can introduce it, which will cause some problems. 

  To avoid such conflicts, we can use data-* attributes. 

  All attributes starting with 'data-' are reserved for programmers use, they
  are available in the dataset property.(*) Multiword attributes become 
  camel-cased(**)

  So using data-* is a valid and safe way to pass custom data. 

  We can read and also modify data attributes, and CSS updates the view 
  accordingly. 
*/

// *

console.log(block.dataset); // {goal: 'write letters', inputType: 'typing'}

// **
console.log(block.dataset.inputType); // typing
