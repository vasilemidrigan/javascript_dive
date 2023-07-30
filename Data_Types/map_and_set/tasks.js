/* 
  Let arr be an array.
  
  Create a function unique(arr) that should return an array with unique 
  items of arr.
  
  function unique(arr) {
  }

  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  alert( unique(values) ); // Hare, Krishna, :-O

*/

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(values)); // ['Hare', 'Krishna', ':-O']

/* 
  Write a function aclean(arr) that returns an array cleaned from anagrams.

  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

  alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

  From every anagram group should remain only one word, no matter which one.
*/
