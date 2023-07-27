/* 
  Create a script that prompts the visitor to enter two numbers and 
  then shows their sum.
*/
// let nr1 = +prompt("Enter a number", "nr");
// let nr2 = +prompt("Enter a number", "nr");

// console.log(nr1 + nr2);
// ------------------------------------------------------------------
/* 
  According to the documentation Math.round and toFixed both round to 
  the nearest number: 0..4 lead down while 5..9 lead up.

  For instance:

  alert( 1.35.toFixed(1) ); // 1.4
  In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

  alert( 6.35.toFixed(1) ); // 6.3
  How to round 6.35 the right way? 
*/

console.log((1.35).toFixed(1)); // 1.4
console.log((1.35).toFixed(100));
// 1.350000000000000088817841970012523233890533447265625
console.log((6.35).toFixed(1)); // 6.3
console.log((6.35).toFixed(100));
// 6.3499999999999996447286321199499070644378662109375

// How to solve the problem:
let nrA = Math.round(1.35 * 10) / 10;
let nrB = Math.round(6.35 * 10) / 10; // 6.35 -> 63.5 -> 64(rounded) -> 6.4
console.log(nrA.toFixed(1));
console.log(nrB.toFixed(1));
// ------------------------------------------------------------------
/* 
  Create a function readNumber which prompts for a number until the 
  visitor enters a valid numeric value.

  The resulting value must be returned as a number.

  The visitor can also stop the process by entering an empty line or 
  pressing “CANCEL”. In that case, the function should return null.
*/
// do..while can be also a good implementation here
function readNumber() {
  let value;
  while (!isFinite(value)) {
    value = prompt("Enter a valid numeric value: ");
    if (value == null || value == "") return null;
  }
  return +value;
}

/* 
  The built-in function Math.random() creates a random value from 0 to 1 
  (not including 1).

  Write the function random(min, max) to generate a random floating-point 
  number from min to max (not including max).

  To solve 
*/
