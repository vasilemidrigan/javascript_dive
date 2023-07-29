/* 
  Map and Set

  Map is a collection of data just like an object, though it allows keys
  of any data types, not just string and symbols. 

  Methods and properties of Map (*)
  
  Although we can acces map[key], we should avoid that, as JS will treat the
  map as an object with all corresponding further limitations. Use built in 
  methods instead like set, get, etc.

  We can chain callse: map.set(1, 4).set(true, 1) ...
*/

// *

let map = new Map();

map.set(true, "the sky is blue");
map.set(1, "index");
map.set(undefined, 0);
map.set(null, "we can store null as well");
map.set(NaN, "is a string");
map.set({ a: 1 }, true);
map.set([1, 2, 4], "is this even possible?");

console.log(map.size); // 8
map.delete();

console.log(map.get(undefined)); // 0
console.log(map.get(NaN)); // is a string
console.log(map.has(1)); // true

console.log(map);

// map.clear();  // clear the entire map
console.log(map); //  {size: 0}

/* 
  Iteration over Map

  keys(), values(), entries() - returns an iterable for keys, values, and
  entries respectivelly which is used by default in for..of (*)

  Map has a built in forEach (**)

*/

// *

// keys
for (let key of map.keys()) {
  console.log(key);
}

// values
for (let value of map.values()) {
  console.log(value);
}

// entries
for (let entry of map.entries()) {
  console.log(entry);
}

// **
map.forEach((value, key, map) => {
  console.log(`Value >  ${value} | Key > ${key} `);
});

/* 
  Object.fromEntries: Object from Map
*/
