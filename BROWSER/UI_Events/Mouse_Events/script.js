/* 
  Mouse Events
  ------------
  
  A user action, may trigger multiple events, for example when clicking a
  mouse button, we have mousedown, then mouseup and then click event. 

  We can work with the mouse cursor coordinates (*)

  Preventing selecting text, copying text, etc, by using mouse events.  
*/

// *

let area = document.getElementById("area");

area.addEventListener("mousemove", function (e) {
  this.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
});
