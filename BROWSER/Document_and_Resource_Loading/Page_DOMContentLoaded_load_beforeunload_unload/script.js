/* 
  Page: DOMContentLoaded, load, beforeunload, unload 
  --------------------------------------------------

  The lifecycle of an HTML page has three important events:
  1. DOMContentLoaded - The browser fully loaded HTML, the DOM tree is built, 
  but external pictures <img> and stylesheets may not yet have loaded. 
  2. load - HTML, DOM, and external resources like images and stylesheets are
  loaded. 
  3. beforeunload/unload - the user leaves the page. 

  So, each event may be useful:

  DOMContentLoaded: DOM is ready, so we can work with nodes, initialize 
  interface, etc. 

  load: external resources are loaded, so styles are applied, so we can
  for example access image size, work with styles, etc. 

  beforeunload: the user is leaving, so we can ask if the user saved changes, 
  or if they really want to leave, etc.

  unload: the user almost left, there are some other operations we can perform, 
  like sending statistics, etc. 

  DOMContentLoaded
  ----------------

  The event happens on document object. 

  So in the example we can see that DOMContentLoaded runs before the image
  is loaded(*) If the image is first time loaded, so it is not in the cache,
  the image will be not yet loaded when the event runs.

  DOMContentLoaded and scripts
  ----------------------------

  When the browser parses HTML, and it comes acros a script, it will run 
  the script, and only after is done, it will continue to parse HTML. 

  So to avoid this, we can use async script, which we will cover soon, or
  we can use dynamically generated scripts with document.createElement('script').
  
  DOMContentLoaded and styles
  ---------------------------

  If there is styles <link> before a script, a script will wait untill the 
  styles are loaded, and then it will run.

  window.onload
  -------------

  The load event on window object triggers when the whole page, all styles
  are loaded. 

  window.onunload
  ---------------

  When the visitor leaves the page, we can trigger the event on window object
  and close a related popup window for example. 

  readyState
  ----------

  If we don't know whether the document is ready or not, we can use readyState, 
  to se: 
  'loading' : the document is loading
  'interactive' : the doc. was fully read
  'complete' : the doc. is fully read and all resources are loaded too. 
*

// *
let dwarfHome = document.getElementById("dwarf-home");

function imgIsReady() {
  console.log(`${dwarfHome.offsetHeight}x${dwarfHome.offsetWidth}`);
}

document.addEventListener("DOMContentLoaded", imgIsReady);
