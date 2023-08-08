/* 
  Searching: getElement*, querySelector*
  --------------------------------------
  
  We can access an element by its id like a global variable(**) Only if
  we don't have a variable with the same name, as it will take the 
  precedence.

  querySelectorAll
  ----------------

  elem.querySelectorAll returns all elements inside elem matching the given 
  css selector. 

  It is a powerful tool, as we can use any css selector:
  document.querySelectorAll('ul > li:last-child');

    
  querySelector(css)
  ------------------

  Returns the first element for given CSS selector.

  matches
  -------

  elem.matches(css) return true or false if it matches or not

  closest
  -------

  Ancestors are the parent chain of an element. 
  elem.closest(css) looks from element up for the first ancestor that 
  matches the css selector

  getElementsBy*
  --------------

   elem.getElementsByTagName(tag) looks for elements with the given tag
   and returns a collection of them, if the argument is '*' then it will
   return all tags

   elem.getElementsByClasName(className) - pretty obvious
   document.getElementsByName(name) - returns elements with the given
   name attribute, document wide, and rarely used. 

   This will not work document.getElementsByTagName('input').value = 5, 
   because it will take a collection, so we either iterate over it and
   do what we need with each element, or we assign the value, but using
   an index like this: document.getElementsByTagName('input')[0].value = 5.
   
   Live collections
   ----------------

   All methods getElementsBy* return a live collection, such collection always
   reflect the current state of the document, so in cases where we see 
   different values we have to pay attention how the document changes, the
   change directly affects those collections live. 

   With the document.querySelectorAll('div') for example, which are static
   collections, it will not work this way, it will show the amount of 
   elements we had initially.
*/

// **

console.log(window["elem-content"]);
console.log(el);
