/* 
  Generators
  ----------

  Regular functions return only one, single value.

  Generators, can return (yield) multiple values,one after another, on 
  demand. They work great with iterables, allowing to create data streams
  with ease. 

  Generator functions
  -------------------

  This is the syntax(*)

  Or, we can use the star belong to function name.(**)

  When such a function is called, id doesn't execute its code, instead
  it returns a special object called "generator object" to manage the 
  execution. And on this object we can call .next() wich will execute 
  the code until the first yield and return an object with the value 
  from yield and the done boolean, the last which is the return, will 
  return the value and the boolean done: true. (***)
*/

// *

function* generateSequence() {
  console.log("1st yield");
  yield 1;
  console.log("2nd yield");
  yield 2;
  console.log("3rd yield");
  return 3;
}

// **

function* sequence() {
  yield 1;
  yield 2;
  return 3;
}

// ***

let generator = generateSequence();

console.log(generator);

let one = generator.next();
let two = generator.next();
let third = generator.next();

console.log(third);

/* 
  Generators are iterable
  -----------------------

  As generators are iterables, we can loop over them with for..of, but note
  that it doesn't return the last value (*), if we want to return the last
  value, we need to return it with yield.(**)

  We can also use spread syntax(***)
*/

// *

function* generateSequence1() {
  yield 1;
  yield 2;
  return 3;
}

let generatorA = generateSequence1();

for (let value of generatorA) {
  console.log(value);
}

// **

function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}

let generatorB = generateSequence2();

for (let value of generatorB) {
  console.log(value);
}

// ***

let sequenceA = [0, ...generateSequence2()];

/* 
  Using generators for iterables
  ------------------------------

  We can use a generator function for iteration by providing it as 
  Symbol.iterator(*) It works because it has .next() method, and the
  return values are in the form {value: ..., done: boolean}

  We can also make generators to yield values forever, of course it 
  would require a break or return in for...of over such iterator. 
*/

// *

let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log([...range]); // [1, 2, 3, 4, 5]

/* 
  Generator composition
  ---------------------

  ... is a special feature that allow to transparently embed generators 
  in each other. 

  For example: 
  Here (*) we have a function that generates a sequence of numbers. 
    
  And here(**) an example on how to use embeded generators. 

  It is a natural way to insert a flow of one generator into another. 
*/

// *

function* generateSequence3(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

// **

function* generatePasswordCodes() {
  // 0...9
  yield* generateSequence3(48, 57);
  // A...Z
  yield* generateSequence3(65, 90);
  // a...z
  yield* generateSequence3(97, 122);
}

let str = "";

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str);
// 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

let x = generatePasswordCodes();

console.log(x.next());
console.log(x.next());
console.log(x.next());

/* 
  yield is a two-way street
  -------------------------

  yield not only returns the result to the outside, but it can also 
  pass the value inside the generator. 


*/

// *

function* gen() {
  let result = yield "2 + 2 = ?";

  alert(result);
}

let generatorC = gen();

let question = generatorC.next().value;

let y = generator.next(4);

// **

function* genA() {
  let ask1 = yield "2 + 2 = ?";

  console.log(ask1);

  let ask2 = yield "3 * 3 = ?";

  console.log(ask2);
}

let generatorD = genA();

console.log(generatorD.next().value);
console.log(generatorD.next(4).value);
console.log(generatorD.next(9).value);
