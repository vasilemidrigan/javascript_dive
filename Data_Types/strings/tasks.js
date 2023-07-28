/* 
  Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
*/
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("john") === "John"); // true
console.log(ucFirst() === "John"); // false

/* 
  Create a function truncate(str, maxlength) that checks the length of the 
  str and, if it exceeds maxlength – replaces the end of str with the 
  ellipsis character "…", to make its length equal to maxlength.

  The result of the function should be the truncated (if needed) string.
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength - 1) + "…";
  return str;
}

let truncStr = truncate("It is raining outside!", 15);
console.log(truncStr); // It is raining …
console.log(truncStr.length); // 15

/* 
  We have a cost in the form "$120". That is: the dollar sign goes first, 
  and then the number.

  Create a function extractCurrencyValue(str) that would extract the 
  numeric value from such string and return it.
*/

function extractCurrencyValue(str) {
  return +str.slice(1);
}

let extractedValue = extractCurrencyValue("$345");
console.log(extractedValue);
