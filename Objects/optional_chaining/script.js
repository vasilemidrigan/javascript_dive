"use strict";
/*
  -----------------
  Optional chaining 
  -----------------

  Optional chaining is a safe way to access nested objects properties,
  even if an intermediate property doesn't exist.

  In real life projects, it is quite common to encounter a situation
  when we have an object, and we try to access a nested property, which
  on the other hand has another property that we want to access, like
  this: object.data.id If data property doesn't exist, then we get
  an error, because we try to acces a property id from data, which is 
  undefined. (*) So in such cases, we would prefer undefined instead 
  of an error that would crash our program. 

  We can use ternary operator in order to implement the solution. (**)
  This solution though is not pretty appealing, as we have user.info
  repeating twice. If there are more deep nested properties then we'll
  have a weird code. (***)

  We can use AND operators, a little better, but still: (#)
*/

// *
let user = {};

// user.info.age; // error

// **
console.log(user.info ? user.info.name : undefined); // undefined

// ***
console.log(
  user.info
    ? user.info.passport
      ? user.info.passport.id
      : undefined
    : undefined
); // undefined

// #
console.log(user.info && user.info.passport && user.info.passport.id);
// undefined

/* 
  --------------------
  Optional chaining ?.
  --------------------

  Optional chaining stops the evaluation if before ?. is undefined or null,
  and returns undefined. (*)
  
  Optional chaining basically says: something exists if is not undefined or
  null. 

  Now we can safely read our user data. (**) Why we cant we append ? to 
  the last property? In our exaple(**), id property. That's because even 
  if it doesn't exists, we'll get undefined. No need to appen optional 
  chaining. 

  If userB object is null, and we know it can be this way, we can
  easily and safely see that: (***)

  It is highly recommended to user optional chaining only where we know
  properties are optional and may miss from properties chain, and we 
  know that they can miss. Otherwise if we'll put optional chaining 
  everywhere if there is actual an error because of other reason, it
  can take some time to find the issue. 
  
  The variable before ?. must be declared, if not, then we have an error.
  It must be declared or as a function parameter. Optional chaining works
  only for declared variables. (#)
*/

// *
let rien = {
  propA: null,
};
let path = {};

console.log(rien.propA?.innerProp); // undefined
console.log(path.propB?.innerProp.afsd); // undefined

// **
let userA = {};
console.log(userA.info?.passport?.id); // undefined
console.log(userA.info); // undefined

// ***
let userB = null;
console.log(userB?.info); // undefined

// #
// console.log(userC?.info); // Error: userC is not defined

/*
  ---------------
  Short Circuting
  ---------------

  Optional chaining stops immediatelly if before the ?. doesn't exist.
  So any function calls that are after ?. won't be made. (*)
*/

// *

let userD = null;
let nr = 1;
console.log(userD?.hi(nr++));
console.log(nr); // 1

/* 
  --------------------------
  Other variants: ?.(), ?.[]
  --------------------------

  Optional chaining also works with functions and square brackets. 

  We can call a function that may not exist with ?.() (*)

  And here is the example with square brackets. (**)

  We can also use ?. with deleting (***) We can use ?. for reading, 
  deleting, but not writing. ?. has no use on the left side of the 
  assignment operator. 
*/

// *
let userT = {};
console.log(userT.hi?.()); // undefined

// **
let userZ = null;
console.log(userZ?.[info]);

// ***
let userM = {
  info: {
    name: "John",
  },
};

delete userM.info.passport?.id;
