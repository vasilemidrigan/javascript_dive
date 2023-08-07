/* 
  Browser environment, specs
  --------------------------

  A host-environment is a platform on wich JavaScript runs. 

  In addition to the language core, a host-environment, provides its
  own objects and functions. 

  Web browser control web pages, Node.js provides server side features, etc. 

  When JS runs in a web-browser, we have:
  'window' on top, and:
  - DOM (document)
  - BOM (navigator, screen, location, frames, history, XMLHttpRequest)
  - JavaScript (Object, Array, Function, etc)

  Root object window has two roles:
  1. It is a global object
  2. It represents the browser window and provides methods to control it. 

  So we can use as a global object, and the method to it:(*)

  DOM (Document Object Model) 
  ---------------------------

  It represents all page content as objects that can be modified. 

  We can create and change anything on the page using it. 

  For example changing background color (**)

  BOM (Browser Object Model)
  --------------------------

  Browser provides additional objects for working with everything except 
  the document. 

  For ex. navigator object provides info about the browser and OS, location
  object allows to read the current URL and car redirect to a new one.(***)
  
  alert/prompt/confirm are also part of the BOM, and not directly related
  to the document. 
*/

// *
console.log(window.innerHeight);

// **
document.body.style.background = "purple";

// ***
console.log(location.href);

if (confirm("go to google?")) {
  location.href = "https://google.com";
}
