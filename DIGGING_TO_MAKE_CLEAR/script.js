/* 
  -------------------------
  Statements VS Expressions
  -------------------------
 
  -----------
  Expressions
  -----------
  An expression is a bit of JavaScript code that produces a value. (*)

  Expression can contain sub-expressions, such as integers, arithmetic 
  operations, boolean operations, etc. 
 
  Expressions can't exist on their own, they are always part of a state-
  ment. 

  There are two kinds of expressions: those that perform an assignment,
  and those that evaluate to a value. 
  x = 10; is an expression that performs an assignment
  10 + 5; this expression simply evaluates to 15
  
  There are 5 primary categories of expressions:
  arithmetic: uses arithmetic operator like + - * / %
  string: uses string operators and evaluates to a character string
  logical: uses boolean operators and evaluates to boolean values
  primary expressions: consist of basic keywords and expressions, 
  like this keyword for ex.
  left-hand side expressions: left-hand side values which are the
  destination for the assignment operator


  ----------
  Statements
  ----------
  A statement typically ends with a semi-colon. For if, while and functions,
  semi-colon aren't necessary. 

  A JavaScript program is a sequence of statements, each statement is an
  instruction for the computer to do something, to perform an action. (***)

  Statements are like slots for expressions. We can put any expression
  into those slotes. (****)
  
  A trick with console.log() is that we can see if something is an 
  expression or a statement, if we put the code inside the console.log,
  if it runs, then it is an expression, otherwise is a statement. This 
  trick works because all function arguments must be expressions. Expre-
  ssions produce a value, and that value is passed to the function, sta-
  tements don't produce values so they can't be passed to functions. 

 
*/

// *
1; // produces  1
("some text"); // produces a string
5 * 4; // produces 20
true == false; // produces a boolean false
true ? 1 : 3; // produces a nr 1

// **
3 / 2 + 1 - 2;

// ***
let name = "Rooney";

if (true) {
  // more statements here
}

// ****
let nr = 1; // 1 is an expression
let hi = "Hi";
let bool = true;
