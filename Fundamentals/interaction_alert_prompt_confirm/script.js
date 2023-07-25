/* 
  -----------------------------------
  Interaction: alert, prompt, confirm
  -----------------------------------
  
  The mini-window, is called modal window. Visitor can't interact with
  the rest of the page untill they have dealt with the window.

  A modal window pauses the script execution.

*/

/* 
  -----
  alert
  -----
  
  It shows a message and waits for the user to press OK.
*/
alert("I am here until you will press OK");

console.log("Will run after we handle the alert above!");
/* 
  ------
  prompt 
  ------

  Prompt accepts two arguments, the text to show to the visitor, and
  the initial value of the input field

  The second argument is optional, if we don't specify it, then it is
  an empty string

  If we press cancel or esc key, the returned value from the prompt is null,
  if we press ok without changing something, then the value is
  the value of the second argument, which can be specified, or 
  can be an empty string by default. 

*/

let name = prompt("Enter you name...", "name");
console.log(name);

/* 
  -------
  confirm
  -------

  A modal window with two buttons, ok and cancel(true or false)
*/

let isAdult = confirm("Do you have 18?");
console.log(isAdult);
