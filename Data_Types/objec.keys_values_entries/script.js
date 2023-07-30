/* 
  Object.keys(), values, entries
  
  These methods are supported for: Map, Set, Array. (*) It returns an
  iterator.

  The syntax for plain objects is a little bit different (**) It returns
  a real array. It ignores syumbols as for..in loop. 
  

*/

// *
let map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// **

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(obj);

/*
  Transforming objects

  Objects lack many methods that exists for arrays.

  If we want to apply them, then we can convert the object to array, 
  perform the methods, and convert back to the object.(*)
*/

// *
let counters = {
  counter1: 1,
  counter2: 2,
  counter3: 3,
};

let tripleCounters = Object.fromEntries(
  Object.entries(counters).map((counter) => [counter[0], counter[1] * 2])
);

console.log(tripleCounters);
