/* 
  WeakMap and WeakSet
  
  We have an object, we put it inside of an array, then we set the variable
  name of the obj to null(therefore delete the reference), the object though, 
  it is still accessible in the array, as it has another reference to it from
  the array. (*)

  The same applies to Maps. (**)

  Limitations of WeakMaps and WeakSets is the inability to get all current 
  content and iterate over it. 

  The main job of those two though, is to be an additional storage of data
  for objects which are stored/managed at another places. 
*/

// *

let obj = {
  a: 1,
};

let arr = [obj, "string"];

obj = null;

console.log(obj);
console.log(arr);

// **

let obj1 = {
  a: 1,
};

let map = new Map();
map.set(obj1, "text");

obj1 = null;

console.log(obj1); // null
console.log(arr); // accessible

/* 
  WeakMap

  With WeakMaps, the principles above doesn't work. 

  The keys of a WeakMap must be objects, not primitive values. (*)

  If we'll use an object which doesn't have any other references to it, it will
  be deleted now or later(JS engine decides that). (**)

  WeakMap doesn't support iteration and methods keys(), values(), entries(), so 
  there is no way to get all keys or values from it. 

  It has only the following methods (***)
*/

let wMap = new WeakMap();
let person = { nikname: "spider" };

wMap.set({ a: 1 }, "string"); // it will be deleted
wMap.set(person, true);

person = null; // it will delete the object from the WeakMap as well

console.log(wMap); // No properties

/* 
  Where do we need such data structure? 

  The main area of application is ADDITIONAL DATA STORAGE.

  which is the visitor, and the visits value, so we need the visits as 
  long as the user john is active for example, if he leaves, we no longer
  need this data, so as the john object is no longer reachable, it will
  get deleted from the weakMak, which is perfect solution in this case, 
  by the way, with maps we have to delete the data manualy, as the map
  will keep the reference to object.

  CACHING

  Another example is caching, so we can use weakMaps for caching the 
  result of a function on an object for example. When the same function
  exectutes the same object, it takes the results from the cache weakMap,
  as there is no longer need in that object, it gets deleted, so it also
  gets deleted from the weakMap, which is pretty convenient. 
*/

/* 
  WeakSet

  We can only add objects, not primitives.

  The object exists in weakSet while it is reachable from somewhere else.

  It supports add, has, delete methods. 

  WeakSet rather serves for yes/no fact, than arbitrary data. 

*/
