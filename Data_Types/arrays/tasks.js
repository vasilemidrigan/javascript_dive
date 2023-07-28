/* 
  Create an array styles with items “Jazz” and “Blues”.
  Append “Rock-n-Roll” to the end.
  Replace the value in the middle with “Classics”. Your code for finding 
  the middle value should work for any arrays with odd length.
  Strip off the first value of the array and show it.
  Prepend Rap and Reggae to the array.
*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.trunc(styles.length / 2)] = "Classics";
let firstValue = styles.shift();
styles.unshift("Rap", "Reggae");

console.log(styles);
console.log(firstValue);

/* 
  this in arrays
*/

let arrayS = ["a", "b"];
arrayS.push(function () {
  console.log(this);
});

arrayS[2](); // ['a', 'b', ƒ]

console.log(arrayS); // ['a', 'b', ƒ]

/* 
  Write the function sumInput() that:

  Asks the user for values using prompt and stores the values in the array.
  Finishes asking when the user enters a non-numeric value, an empty string, 
  or presses “Cancel”.
  Calculates and returns the sum of array items.
  P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
  let arr = [];
  let sum = 0;

  while (true) {
    let value = prompt("Enter a nr");
    if (!isFinite(value) || value == "" || value === null) {
      break;
    }
    arr.push(+value);
  }

  for (let value in arr) {
    sum += arr[value];
  }

  return sum;
}
