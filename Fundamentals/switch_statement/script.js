/* 
  ----------------------
  The 'switch' statement
  ----------------------

  A switch statement is very convenient when comparing a value with 
  multiple variants.

  It has one or more case blocks and an optional default. 

  The condition value of switch condition is checked for strict 
  equality to the first case, if it is false then to second, and 
  so on until it results in true. If equality is found, then it 
  executes the code from the case until the first encountered 
  break, if no case matches, then it executes the default block
  if it exists: (*)

  If there is no break, then the execution continues to the next
  case without any checking. (**)

  We can use any expression as arguments for switch and case. (***)

  We can also group cases. Note that, switch checks for strict 
  equality, so in this example, our code is exevuted because 
  case false pass the check, not case 0, as 0 is not a boolean type, 
  which is the case of switch condition. (****)

  A case when the default block is executed, as none of the cases
  passes the check. (#)
*/

// *
let name = "Leonardo";

switch (name) {
  case "Leonardo":
    console.log("His beautiful name starts with L!");
    break;
  case "John":
    console.log("His name is starting with J!");
    break;
  case "Damon":
    console.log("His name is starting with D!");
    break;
}

// **
let nr = 1;
switch (nr) {
  case 1:
    console.log("The nr is 1");
  case 5:
    console.log("The nr is 5");
  case 75:
    console.log("The nr is 75");
    break;
}

// ***
let n;
switch (!!n) {
  case true:
    console.log("it is true");
    break;
  case false:
    console.log("it is false");
    break;
  case undefined:
    console.log("it is undefined");
    break;
}

// ****
let v;
switch (!!v) {
  case true:
    console.log("it is true");
    break;
  case false:
  case 0:
    console.log("it is false!");
    break;
  case undefined:
    console.log("it is undefined");
    break;
}

// #
let nickname = "whiteWitch";
switch (nickname) {
  case "lameWitch":
    console.log("Carefull!! There's the lame witch comming!!!");
    break;
  case "uglyWitch":
    console.log("Hey!! There's an ugly witch!!!");
    break;
  default:
    console.log(
      "Auuuuu!! There's a witch on the horizon, I can't see her clearly!!!"
    );
}
