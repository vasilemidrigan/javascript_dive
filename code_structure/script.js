/*
  --------------
  Code Structure
  --------------
  
  ----------
  Statements are syntax constructs and commands that perform actions. 
  ----------
  
  ----------
  Semicolons may be ommited when a line break exists, but not always.
  ----------
  
  In two lines below, we have an error. 
  console.log('hi
  there');
  
  In other cases, the error will be fixed, like in the lines below, if
  we save the document, the code bellow will be inserted in one line only. 
  console.log(4 + 1
    / 2); 
 
  --------
  Comments   
  -------- 

  Comments are removed by minifiers before publishing to a production 
  server, so using comments is not a problem at all, though comments
  should be written wiselly and in accordance with the team. 

*/

// a statement
console.log("opossum");

/* 
here if we delete the semicolons after the console.log, then those 2 
lines will be treated as one only expression. 
*/

console.log("little bears");
[(1, 2)].forEach((el) => console.log(el));
