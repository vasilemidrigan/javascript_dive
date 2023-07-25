/* 
  Task 1:

  Write an if condition to check that age is between 14 and 90 inclusively.
  “Inclusively” means that age can reach the edges 14 or 90.
*/
let age = 12;

if (age >= 14 && age <= 90)
  console.log("the age is between 14 and 90 inclusivelly");

/* 
  Task 2 

  Write an if condition to check that age is NOT between 14 and 90 inclusively.
  Create two variants: the first one using NOT !, the second one – without it.
*/

if (age <= 14 || age >= 90) console.log("Age is not in the range.");

if (!(age >= 14 && age <= 90)) console.log("Age is not in the range");

/* 
  Task 3
  Write the code which asks for a login with prompt.

  If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

  The password is checked as follows:

  If it equals “TheMaster”, then show “Welcome!”,
  Another string – show “Wrong password”,
  For an empty string or cancelled input, show “Canceled”  
*/

let login = prompt("Enter login: ", "login ...");
if (login == "Admin") {
  let password = prompt("Enter password: ", "password ...");
  if (password == undefined) {
    alert("Canceled");
  } else if (password != "TheMaster") {
    alert("Wrong password!");
  } else {
    alert("Welcome");
  }
} else if (login == undefined) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
