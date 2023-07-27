/* 
  ------------------------------
  Object to primitive conversion
  ------------------------------

  There is no math with objects in real projects, if it happens with
  a small exception, is a coding mistake. 

  We'll see how an object converts to primitive and how to costumize it, 
  when it is a coding mistake, and also there is for example math with 
  Date objects, which is pretty reasonable. 
  
  ---------------
  Converion rules 
  ---------------

  All objects are true in a boolean context. Exists only numeric and 
  string conversions. 

  Numeric conversion happens when we subtract or apply mathematical 
  functions, with Date object for example we subtract Date1 - Date2
  to obtain the time difference. 

  To a string, an object converts usually when we output it in alert
  for exaple, and in similar contexts. 

  -----
  Hints
  -----

  How JS decides which conversion to apply?

  There are 3 options of type conversion, which are called HINTS.

  'string'
  For an 'object-to-string' conversion: when we are doing an operation
  on an object that expects a string: (*)

  'number'
  For an 'object-to-number' conversion, like when we are doing math: (**)

  'default'
  It occurs in rare cases when the operator is 'not sure' what to expect.
  If it get's a binary plus, or == it uses default, as it doesn't know 
  what conversion exactly should be done, so it uses the default one. (***)
    
  To do the conversion, JavaScript tries to find and call three object
  methods:
  
  1. Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key 
      Symbol.toPrimitive (system symbol), if such method exists,
  2. Otherwise if hint is "string" try calling obj.toString() or 
      obj.valueOf(), whatever exists.
  3. Otherwise if hint is "number" or "default" try calling obj.valueOf() or obj.toString(), whatever exists.
*/

let son = {
  name: "Leonardo",
};
let father = {
  name: "Vasile",
};

// alert(son); // alert expects a string

father[son] = "Leonardo";
console.log(father); // {name: 'Vasile', [object Object]: 'Leonardo'}

// **

let object = {
  a: 1,
};
let object1 = {
  a: 1,
};

let n = Number(object); // (explicit conversion) NaN

// maths except binary plus
let nr = +object; // NaN
// let delta = date1 - date2;

let greater = object > object1; // false

// ***
let total = object + object1; // converted to '2 strings'
console.log(total); // [object Object][object Object]

/* 
  ------------------    
  Symbol.toPrimitive
  ------------------    

  This built-in symbol, should be used to name the conversion method. 

  obj[Symbol.toPrimitive] = function(hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
  };

  If the method Symbol.toPrimitive exists, it is used for all hints, 
  no more methods are needed. (*) So we can see how the conversion
  works. 
*/

// *
let person = {
  name: "Natalia",
  age: 52,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.age;
  },
};

// alert(person); // hint: string -> {name: 'Natalia'}
console.log(+person); // hint: number -> 52
console.log(person + 10); // hint: default 62

/* 
  ----------------
  toString/valueOf
  ----------------

  If there is no Symbol.toPrimitive, then JavaScript tries to find
  methods toString and valueOf.

  - For the 'string' hint: call the method toString, and if it doesn't
    exist or if it returns an object, then call valueOf(so toString has
    the priority for string conversions)
  - For other hints: call valueOf, and if it doesn't exist or it 
    returns an object instead of a primitive value, then call toString
    (so valueOf has a priority for maths)

    If both of the methods above doesn't return a primitive value, but an
    object instead, then it is ignored, as if there were no method. 
  
    Here we have an implementation of customized conversion:(*) As we 
    can see the behaviour is pretty much the same as with Symbol.toPrimitive
    
    Often we want a single catch-all place, to handle all conversions. So
    we can for example, implement toString only like this: (**) It depends on
    the situation, what we need exactly from conversion, and implement it. 
  
    All primitive-conversions do not necessarily return the 'hinted' primitive.
    There is no control wheter toString returns exactly a string, or wheter
    Symbol.toPrimitive returns a number for the hint 'number'

    The only mandatory thing is that these methods must return a primitive, 
    not an object. 

    If toString or valueOf returns an object, like we already know, it is 
    ignored, that is because in ancient times, there was no good error
    concept in JavaScript. In this regard, Symbol.toPrimitive is stricter, 
    it must return a primitive, otherwise it throws an error. 

    If we pass an object as an argument in a math calculation, for example 
    in multiplication: obj * 5; Well in this case, let say toString handles
    all conversions, so the first conversion the object will be converted 
    into a string obviously, and then, as we get here a math expression, the
    string converts into a number. (***)

    ! In practice, usually it is enough to implement obj.toString() as a 
    catch-all method for string conversions, that should return a human-
    readable representation of an object for logging and debugging purposes. 
*/

// *

let user = {
  name: "Jimi",
  amount: 7586,
  // for hint='string'
  toString() {
    return `name: "${this.name}"`;
  },
  // for hint=''number' or 'default'
  valueOf() {
    return this.amount;
  },
};

// alert(user); // {name: 'Jimi'}
console.log(+user); // 7586
console.log(user + 500); // 8086

// **

let user1 = {
  name: "Caesar",
  amount: 7586838,

  toString() {
    return this.name;
  },
};

console.log(+user1); // NaN
console.log(user1 + 2); // Caesar2
// alert(user1); // Caesar

// ***
let math = {
  toString() {
    return "2"; // FIRSTLY: it conversts into a string
  },
};

alert(math * 2); // SECONDLY: it converts into a number, and we have -> 4
