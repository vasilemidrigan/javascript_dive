/* 
  -----------------------------
  Object references and copying
  -----------------------------
  
  A variable assigned to an object stores not the object itself, but its 
  address in memory, in other words a reference to it. 

  When an object variable is copied, the reference is copied, the object
  itself is not duplicated. (*)
   
  Two objects that point to the same address in memory are strictly 
  equal. (**)

  When comparing objects, they are compared by their address in memory, 
  so two objects declared separatelly, but having identicall properties,
  are not equal, since this is not the metric of comparison. (***)

  Very rarely used, objects can be converted to primitives.
*/

// *
let color = {
  r: "red",
  g: "green",
  b: "blue",
};

let palette = color;
palette.b = "semi-blue";

console.log(color);
console.log(palette);

// **
let obj = {};
let objA = obj;
console.log(obj == objA); // true
console.log(obj === objA); // true

// ***
let objB = {};
let objC = {};
console.log(objB == objC); // false
console.log(objB === objC); // false

/* 
  -------------------
  Cloning and merging
  -------------------

  Copying an object creates another reference to the same object.

  When we need to duplicate an object, we can create a new object, 
  replicate the structure of the existing one, by iterating over
  its properties and copying them on the primitive level. So we 
  obtain two objects that points to different addresses in 
  memory. (*)
*/

// *
let school = {
  location: "San Diego",
  size: "medium",
  popularity: "high",
};

let clone = {};

for (let key in school) {
  clone[key] = school[key];
}
clone.isOpen = true;

console.log(clone); // different objects
console.log(school);

/* 
  -------------
  Object.assign
  -------------

  We can use Object.assign(dest, ...sources), for clonning, copying 
  from one ore more objects into the destination object. (*)

  If there is a property with the same name, it gets overwritten. (**)

  We can perform object clonning as well. (***)

  We can also clone an object by using spred syntax, but that't later. 
*/

// *
let person = {
  name: "baby",
  canCry: true, // **
};
let permissions = {
  canRead: true,
};
let persmissions2 = {
  canWrite: true,
  canCry: false, // **
};

Object.assign(person, permissions, persmissions2);

console.log(person);

// ***
let cloneA = Object.assign({}, person);

console.log(cloneA);

/* 
  --------------
  Nested Cloning
  --------------

  Object can have another objects as properties. So copying like in the 
  examples above, would lead to have references to the same objects. 
  So in this example, changing name property doesn't affect the original
  object, as those are different, but when changing property age from
  data nested object, it affects both objects, because this nested object
  is copied as a reference by Object.assign, so in order to replicate 
  nested objects we need another approach.(*)

  ---------------
  structuredClone
  ---------------

  A new solution for replicating nested objects, is called 'deep cloning',
  or 'structured clonning'. 'structuredClone' method implements deep
  clonning. ()

  It can clone most data types like objects, arrays, primitive values.

  It also supports circular references(when an object references to itself,
  directly or via a chain or references). 

  If an object has a function property, structuredClone fails, in those 
  cases we need a combination of clonning methods, write custom code, or
  use _.cloneDeep(obj) from lodash library.

*/

let diver = {
  name: "Anatol",
  location: "Antonesti",
  data: {
    age: 53,
    mustache: true,
    skin: "moreno",
  },
};

let anatol = Object.assign({}, diver);
anatol.name = "Anatolie";
anatol.data.age += 1;

console.log(diver);
console.log(anatol);
