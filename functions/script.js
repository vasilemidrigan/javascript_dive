/* 
  ---------
  Functions
  ---------

  Functions are a crucial part of a program. They allow to call the same
  code many times without repetion. 

  There are built in functions like alert() and prompt(), and we can also 
  create our own functions.

  To call the function: (**) We can call it as many times as we want, 
  and this clearly shows the purpose of a function - avoid repetition, 
  and if there is a need in updating the function, we only change it
  inside it's declaration, and that's it. 

  A viriable declared inside the function is called a local variable, 
  and it is visible only inside the function.(***)
  
  We can access an outer variale inside our function. (#)

  We can access an outer variable and change it inside our function, 
  so the original, global variable now is changed. However, this is 
  not the case when the variable is passed as an argument, in this case 
  the function takes a copy of it, so the changes doesn't affect the 
  original variable. (##)

  If there is a declared variable inside the function with the same
  name of an outer one, then the variable from inside the function
  shadows that one from outside, so the function will use the inner
  one for its operations. (###)

  Global variables are visible everywhere in the code, as long as there
  is no other variable that shadows the global one. 

  When we pass values as parameters to functions, those values are copied
  to the local variables of the function. So a variable passed as argument
  to a function is passed by value, the function gets a copy of the 
  variable, not the variable itself. So when modifying the variable
  that was passed to the function, it modifies the copy, the original, 
  outer variable remains the same. That's not the case when a value is 
  passed by reference, but this is another topic. ($)

  A parameter, is a declaration time term. Is the variable listed inside the 
  parentheses in the function declaration. 

  An argument, is a call time term, is the value that is passed to the 
  function when it is called. 

  To have clean code, it is recommended to use only local variables 
  inside functions, and not modify directly global variables. It is
  easier to understand what a function does if we have parameters
  and work with them only, than modify global variable as a side effect. 

  --------------------
  Function Declaration
  --------------------
  
  The syntax of a function declaration. We can also create functions
  without parameters. (*)

  When we declare a function, the function is saved into a variable 
  with the name of the function. So function hi() {}, creates a 
  function and saves it into a variables called hi. 

  As a rule of thumb, function declaration are preferable when 
  chosing the option between the first and function expression, 
  this is because it is accessible anywhere in the code, it is
  more readble. But if there is a special case in which function
  declaration doesn't fit, then we should look for function
  expression. 
*/

// *
function funcName(par1) {
  console.log(par1);
}

// **
funcName("leo");
funcName("vasile");
funcName("profira");

// ***
function hi(name) {
  let message = `Hey ${name}, how are you?!`;
  console.log(message);
}

hi("Leonardo");
// console.log(message); // Error: message is not defined

// #
let letter = "The ocean is full of mistery!";
function message() {
  console.log(letter);
}
message();

// ##
let letter1 = "The ocean is full of mistery!";
function message1() {
  letter1 = "The ocean is not a mistery!";
  console.log(letter1);
}
message1();
console.log(letter1);

// ###
let satellite = "moon";

function printSatellits() {
  let satellite = "Phobos";
  console.log(`One of two satellits of Mars is called ${satellite}.`);
}

printSatellits();

/*
  -------------
  Default value
  -------------

  If the function has a parameter, but it is not defined on call, then the
  argument is undefined. (*)

  We can call a function with fewer arguments that there are parameters.(**)

  In case we need default values, we can use the syntax: (***). If there
  is an argument undefined, then JavaScript will assign to the argument
  the default value.
    
  If the parameter existsm but strictly equals undefined, it will also 
  run the default value if there is one. (#)

  The default value can be a simple expression as well as a most complex
  one. Note that when we want to skip passing an argument, we should 
  explicitly pass undefined.(##)

  In older JavaScript code, we can encounter an old school way of defining
  default parameters, it is by checking them inside the body of the func-
  tion. (###)

  Or using a clever syntax with OR operator: ($), This approuch though do 
  not allow us to use values like 0, false, or an empty string, because
  OR can't differentiate them, so it is better the nullish coalescing
  operator.($$)

*/

// *
function call(whom) {
  console.log(whom);
}
call(); // undefined

// **
function talkTo(pers1, pers2) {
  console.log(pers1, pers2);
}
talkTo("Jimi"); // 'Jimi' undefined

// ***
function meetWith(folk1, folk2 = "Daniel") {
  console.log(folk1, folk2);
}
meetWith("Andrew"); // 'Andrew' 'Daniel'

// #
function runWith(folk1, folk2 = "Daniel") {
  console.log(folk1, folk2);
}
runWith("Andrew", undefined); // 'Andrew' 'Daniel'

// ##
let advice = "Would be better to come back!";
function greetAnyone() {
  return "Hello you! Sweet creature!";
}
function giveAdvice(greeting = greetAnyone(), advice) {
  console.log(`${greeting} ${advice}`);
}
giveAdvice(undefined, advice);

// ###
function checkAccess(age) {
  if (age == undefined) {
    age = 1;
  }
  console.log(`The user is ${age} year(s) old.`);
}
checkAccess();

// $
function getValue(n) {
  n = n || 10000000;
  console.log(`The value is ${n}`);
}
getValue();

// $$
function getAmount(n) {
  n = n ?? "x";
  console.log(`Amount: ${n}`);
}
getAmount(0);

/* 
  ---------------
  Returning Value
  ---------------

  A function can return a value, when the execution code reaches the 
  return keyword, the function stops. 

  There can be more than one occurence of return, for example in an 
  if statement. (*) 

  We can simply use return without any value, just to stop the function
  immediately. Anything below the return will be canceled.(**)

  An empty return and a function that doesn't return anything, both of 
  them returns undefined. (***)

  Never add a newline between the return and the new value, it will
  not work, instead, wrap the value into parentheses. (#)

*/

// *
function getDayTime(dayTime) {
  if (dayTime == "morning") {
    return "it is too early!";
  } else {
    return "it is too late!";
  }
}
let inside = getDayTime("evening");
console.log(inside);

// **
function prevent() {
  console.log("Wait! I want to say something ...");
  return;
  console.log("Oh, damn it! Is too late!");
}
prevent();

// ***
function returnNothing() {
  return;
}
function aboutNothing() {
  console.log(
    "HHmmmm... I forgot what I wanted to say, never mind, just keep walking... hm..."
  );
}
console.log(returnNothing() === undefined);
console.log(aboutNothing() === undefined);

// #
function getFormula() {
  return (
    "some" +
    "very long expression" +
    "goes here" +
    "whatever" +
    "hopefully we have parentheses for this hard situation"
  );
}

/* 
  -----------------
  Naming a function
  -----------------

  Functions are actions, so we should name them using a verb, mostly, it 
  should be brief, accurate as possible and describe what the function does.
  From the function name, we should understand what it does. 

  There is a widespread practice to start the name of the function with an
  verb that vaguely describes the action: 
  show... - show something
  calc... - calculate something
  validate... - validates something
  scan... - scan something, etc...
  
  calcSum(), validatePassword(), checkLogin(), etc. 

  One function - one action. A function should do exactly what is suggested
  by its name, no more. 

  Two independend actions deserves two independent functions, and maybe
  called by the third one. 

  For example function validatePassword, should only validate the password. 
  Printing the error message would be inappropiate. We need another function
  for this specific operation. 

  A separate function that does only one thing, is easier to test, to debug
  and it is like a great comment, it is self-described. (*)

*/

// *
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
}
function logEvenNrs(nrs) {
  nrs.forEach((nr) => {
    if (isEven(nr)) {
      console.log(`${nr} is even`);
    }
  });
}
logEvenNrs([1, 2, 3, 4, 5, 6]);
