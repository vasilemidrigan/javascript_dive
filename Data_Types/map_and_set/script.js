/* 
  Map and Set

  Map is a collection of data just like an object, though it allows keys
  of any data types, not just string and symbols. 

  Methods and properties of Map (*)
  
  Although we can acces map[key], we should avoid that, as JS will treat the
  map as an object with all corresponding further limitations. Use built in 
  methods instead like set, get, etc.

  We can chain callse: map.set(1, 4).set(true, 1) ...

  We can't change the order of a Map key/value pair, or get it by using
  the order number.
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
  Object.entries: Map from Object
  
  The method is used when we need to create a map from an object. (*)
*/

// *

let leo = {
  name: "Leonardo",
  age: 1.5,
};

let leoMap = new Map(Object.entries(leo));

console.log(leoMap); // {'name' => 'Leonardo', 'age' => 1.5}

/* 
  Object.fromEntries: Object from Map

  It does the opposite of the example above, from an array of key value pairs
  we can create an object(*), so we can apply this to maps as well, creating 
  an object from a map.(**) In the second example we see that it converts 
  keys to strings. 
  

*/

// *
let arrData = [
  ["a", 1],
  ["b", 1],
  ["c", 1],
];

let objA = Object.fromEntries(arrData);
console.log(objA); // {a: 1, b: 1, c: 1}

// **
let mapX = new Map();
let objB = {};

mapX.set(1, true);
mapX.set({ a: 1 }, undefined);

objB = Object.fromEntries(mapX);

console.log(objB); // {1: true, [object Object]: undefined}

/* 
  Set
  
  A collection, which consists from a set of values, which may occur only once.(*)
  
  That's  handy when we need to save only the same data only once, not duplicate
  it, for example user visitors. 

  new Set([iterable])

  As with maps, we can't get a value from it's order number, and we also can't 
  change it's order in the set. 
*/

// *

let arrD = [1, 2, 3];

let set = new Set(arrD);

set.add(undefined);
set.add(null);
set.add(NaN);
set.add(1); // repeats (so avoided)

set.add("text");
set.add("text"); // reapeats (so avoided)

set.add({ name: "leo" });

set.add([1, 2, 3]);
set.add([1, 2, 3]); // repeats (so avoided)

set.delete(NaN); // deleted
console.log(set.has(undefined)); // true
console.log(set.size); // 9

// set.clear() // removes everything
console.log(set);

/* 
  Iteration over Set

  Iterate over set with for..of(*)

  Iteration over set with forEach (**)

  Iterators: 
  keys() : returns an iterable object
  values() : the same as keys (reason - compat. with Map)
  entries(): returns [value, vale],  (reason - compat. with Map)
*/

// *

for (let value of set) {
  console.log(value); // works
}

// **
let arrV = [1, 2, 3];
let setA = new Set(arrV);

setA.forEach((value) => console.log(value));

console.log(setA.keys()); // SetIterator {1, 2, 3}
