/* 
  ------------------
  Garbage collection
  ------------------

  Creating primitives, objects, functions, all that takes memory,
  memory manipulation in JavaScript is performed automatically 
  without our implication.

  ------------
  Reachability
  ------------

  Reachability is the main concept of memory in JavaScript. 

  Values that are reachable somehow are called reachable, and they
  are stored in memory.  

  In JavaScript, there is a background process called GARBAGE 
  COLLECTOR,  that monitors all objects and removes those that 
  have become unreachable. 

  Inherently reachable values, that cannot be deleted by obvious
  reasons (these values are called roots): 
  - The currently executing function, its local variables and 
  parameters.
  - Other functions on the current chain of nessted calls, their
  local variables and parameters. 
  - Global variables
  - And other internal ones
  
  Any other value is considered reachable if it is accessible 
  from root by a reference or by a chain of references. 

  If there is a object in a globar variable, and that object has a property 
  referencing to another object, that object is considered reachable,
  and those that it references are also reachable. 

  By creating an object 'fellow', we are creating a global variable 
  'fellow' that references the object {name: 'Jimi'}. So we have
  the global object, that uses the 'fellow' variable name to reference
  to the object {name: 'Jimi'}. By removing the reference, we loose
  the connection to our object {name: 'Jimi'}, so the garbage collector
  will junk it and free the memory. (*)

  If we have two references or more, then overwriting one reference
  doesn't remove the object from memory, as the garbage collector 
  see that the object has another reference, so it is still reachable,
  only if we remove all references, only then the garbage collector 
  will throw the object from the memory. (**)
*/

// *

let fellow = {
  name: "Jimi",
};

console.log(fellow); // fellow references to {name: 'Jimi}

fellow = null;

console.log(fellow); // fellow doesn't reference to {name: 'Jimi'}

// **
let animal = {
  name: "opposum",
};

let littleAnimal = animal;
animal = null;

console.log(littleAnimal);

/* 
  -------------------
  Interlinked objects
  -------------------
  
  If an object doesn't have an incoming reference, then it is deleted 
  from memory, outgoing references doesn't matter. 

  Now in this example we have the GLOBAL OBJECT, that has a reference
  called 'refObjects', that points to the obj {objA: {…}, objB: {…}},
  and this Object has references to objA and to objB, and lastly,
  objA and ObjB points to each other. (*)

  Now let's make garbage colletor to remove ObjA from memory. In order
  to do that, we have to remove all incoming references to the ObjA, 
  the outgoing references from ObjA doesn't matter. So, first of all, 
  let's remove the reference from the Object to ObjA. (**) And we still
  can access it by using the reference from ObjA.ref.Now, if we want
  to completelly delete the ObjA, we delete the reference from ObjA.ref
  as well, and now ObjB is unreachable, so it is deleted. (***)
*/

// *
function references(objA, objB) {
  objA.ref = objB;
  objB.ref = objA;

  return {
    objA,
    objB,
  };
}

let refObjects = references(
  {
    id: "A",
  },
  {
    id: "B",
  }
);

console.log(refObjects);
/* 
objA: {id: 'A', ref: {…}}
objB: {id: 'B', ref: {…}}
[[Prototype]]: Object
-------------------------
*/

// **
refObjects.objA = null;
console.log(refObjects);
/* 
// {objA: null, objB: {…}}

objB: id: "B", ref: {id: 'A', ref: {…}}
-------------------------
*/

// ***
refObjects.objB.ref = null;
/* 
objA : null
objB: {id: 'B', ref: null}
*/

/* 
  ------------------
  Unreachable Island
  ------------------
  
  There is a term - Unreachable Island. That is when a hole group of 
  interlinked objects becomes unreachable, therefore deleted from 
  memory. In the example above, if we make refObjects = null, then
  Object {ObjA, ObjB} it is completely deleted, event though they 
  are interlinked(if we cancel null assignments from the examples
  above). Anyway, the ideea is that no matter how many references
  are there between objects, if we delete one crucial reference,
  it deletes completely the bottom chain that is related to this
  reference. (*)
*/

// *

refObjects = null; // null (no reference to ObjA and ObjB)
console.log(refObjects);

/* 
  -------------------
  Internal Algorithms
  -------------------

  The basic garbage collection algorithm is called 'mark-and-sweep'.

  The garbage collector takes roots, and marks them, then it goes to 
  the next level references, marks them as well, that will help to 
  not visit the marked objects in the future(good for performance), 
  and so on until every reachable reference is visited, all objects
  except the marked ones, are removed. 
  
  -------------
  Optimizations
  -------------

  General collection - in the code are new objects and old objects,
  those that are new, typically do their job and then are deleted, 
  the old ones have a long life span, so are examined less often, 
  then new ones. 

  Incremental collection - If there are many objects, and we try to 
  walk and mark the whole object, it will time, and produce delays, 
  so the engine splits objects in multiple smaller parts, and then
  clear these parts one after another, which increases the performance.

  Idle-time collection - the garbage collector trie to run only when 
  the CPU is idle, in order reduce the possible effect of the execution.
*/
