/* 
  -------
  Strings
  -------
  
  The internal format for strings is always UTF-16, it is not tied to the
  page encoding. 

  We can use backticks to wrap an expression in a string.(*)Another bene-
  fit of backtiks is to span multiple lines(**)With single or double quotes
  we'll get an error if we'll try to span multilines. 

  Backticks also allows to specify a 'template function'. The syntax is:
  function`string`. The function is called automatically, receives the string
  and the expression inside and process them. This is a rarely used feature.

  For single and double quotes we can use \n newline character  and we'll 
  get the same result as with `` multiline span. 

  There are some special charachters like: \n, \r, \', \"", \` , \t, 
  \b, \f, \v

  \ (The backslash) is also called an escape character. To show it into 
  a string we need to double it \\ 

  With escape quotes we insert quotes into the same quoted-string. 

  In order to avoid escape quotes, we can use different quotes than the
  wrappers one. 
*/

// *
console.log(`${true ? "This is an expression" : "We're fooled!"}`);

// **
let longString = `
this is 
a very
very long string.
`;

/* 
  -------------
  String length
  -------------

  length is a property that has the length of the string, it is not a function.(*)
*/

// *
let str = "lorem ipsum";
console.log(str.length); // 11

/* 
  --------------------
  Accessing characters
  --------------------

  To access a character, we can use [position] or str.at(pos). (*) Square
  brackets return undefined for negative integers. (**)
 
  We can iterate over each character using for..of(***)



*/

// *
let str1 = "hello";

// the first character
console.log(str1[0]); // h
console.log(str1.at(0)); // h
// the last character
console.log(str1.at(-1)); // o
console.log(str1.at(-2)); // l (the last but one character)
console.log(str1[str1.length - 1]); // o

// **
console.log(str1[-1]); // undefined

// ***
for (let char of str1) {
  console.log(char); // h e l l o
}

/* 
  ---------------------
  Strings are immutable
  ---------------------

  In JavaScript, string can't be changed, it is imposible to change a character.(*)
  
  However, we can replace the string. (**)


*/

// *

let str2 = "text";
str[0] = "n";
console.log(str2); // text (nothing changed)

// **

let str3 = "abc";
str3 = "A" + str3[1] + str3[2];
console.log(str3); // Abc

/* 
  ---------------
  Change the case
  ---------------

  toLowerCase() and toUpperCase() chages the case(*), or if we want a specific
  character to change the case(**)
*/

// *
console.log("leonardo".toUpperCase()); // LEONARDO
console.log("PROFIRA".toLowerCase()); // profira

// **
console.log("leonardo"[2].toUpperCase()); // O

/* 
  -------------------------
  Searching for a substring
  -------------------------

  str.indexOf(substr, pos), looks for substring in str, starting from the 
  given position 'pos', and returns the position where the match was found, 
  otherwise it returns -1 (*)
  
  We can find all occurencies of the substring by using loops.(**) Or we 
  can implement a shorter algorithm. (***)

  str.lastIndexOf(substr, position) will search for last index, in reverse
  order. (****)

  There is though a slight inconvenience with indexOf in an if statement(#)
  It doesn't work, because positio indexOf returns 0 and 0 in an if state-
  ment is false. So to solve the problem we can do next check:(##)
*/

// *
let phrase = "The dragon is comming!";
console.log(phrase.indexOf("T")); // 0
console.log(phrase.indexOf("dragon")); // 4
console.log(phrase.indexOf("re")); // -1
console.log(phrase.indexOf("The", 3)); // -1 ('The' starts at the position 0)

// **
let text = `He raced to the grocery store. He went inside but realized he 
forgot his wallet. He raced back home to grab it. Once he found it, he 
raced to the car again and drove back to the grocery store.`;

let target = "He";
let pos = 0;
while (true) {
  let foundPos = text.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1;
}
// Found at 0
// Found at 31
// Found at 82

// ***
let strV = "As sly as a fox, as strong as an ox";
let targetV = "as";

let pos1 = -1;
while ((pos1 = str.indexOf(target, pos1 + 1)) != -1) {
  alert(pos1);
}

// ****
console.log(strV.lastIndexOf("as")); // 27

// #

let textA = "some text";
if (textA.indexOf("some")) {
  console.log("Found!"); // doesn't work
}

// ##

let textB = "some text";
if (textB.indexOf("some") !== -1) {
  console.log("Found!"); // doesn't work
}

/* 
  ------------------------------
  includes, startsWith, endsWith
  ------------------------------
    
  If we need the match only and not the position, we can use 
  str.includes(substr, pos), which returns true/false. (*)

  str.startsWith() and str.endsWith() are self-descriptive:(**)
*/

// *
let textC = "some text";
console.log(textC.includes("ex")); // true
console.log(textC.includes("zm")); // false
console.log(textC.includes("e", 5)); // true

// **
console.log(textC.startsWith("some")); // true
console.log(textC.startsWith("ome")); // false

console.log(textC.endsWith("text")); // false
console.log(textC.endsWith("ex")); // false

/* 
  -------------------
  Getting a substring
  -------------------

  There are 3 methods to get a substring: substring, substr and slice.

  str.slice(start [, end]) - returns a part of the string from start to,
  but not including end. (*) We can get the hole string, a part from the
  start, or from the end, a single character, etc. 



*/

// *
let stringA = "lorem";
console.log(stringA.slice(0)); // lorem   (0, 1, 2, 3, 4)
console.log(stringA.slice(0, 3)); // lor  (0, 1, 2)
console.log(stringA.slice(-3)); // rem             (3, 4)
console.log(stringA.slice(-4, -1)); // rem   (1, 2, 3)
console.log(stringA.slice(2)); // lore          (2, 3, 4)
console.log(stringA.slice(-1)); // m                  (4)
console.log(stringA.slice(2, 3)); // m          (3)
