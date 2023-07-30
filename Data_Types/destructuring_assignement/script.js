/* 
  Destructuring Assignment

  It allows to unpack arrays or objects into a bunch of variables. 

  Array Destructuring

  It doesn't modify the original array or object.

  destructure an array(*) 

  destructure a string(**)

  use comma to skip elements of the array(***) The variables copies ele-
  ments from the array in the exact same order, if there is more elements
  than variables, the rest elements are ignored. 

  Works if any iterable on the right-side. (#)

  We can use assignables on the left side. (##)

  Looping with entries (###)

  We can swap variables ($) Or more variables in this way.


*/

// *
let person = ["Leonardo", "Midrigan"];
let [firstname, lastname] = person;

console.log(firstname);
console.log(lastname);

// **
let [name, where] = "Leonardo Portugal".split(" ");
console.log(name);
console.log(where);

// ***
let arr = ["Vasile", "Leonardo", "Profira", "Natalia"];
let [husband, , wife] = arr;
console.log(husband);
console.log(wife);

// #
let set = new Set();
set.add({ a: 1 });
set.add({ b: 2 });
set.add("data");

let [obj1, obj2, string] = set;

// ##
let friend = {};

[friend.name, friend.lastname] = "Leonardo Midrigan".split(" ");
console.log(friend); // {name: 'Leonardo', lastname: 'Midrigan'}

// ###
let user = {
  name: "Leonardo",
  lastName: "Midrigan",
};

for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// $
let guest1 = "John";
let guest2 = "Michael";

[guest1, guest2] = [guest2, guest1];

console.log(guest1);
console.log(guest2);

/* 
  The rest '...'

  If the array is longer than the list at the left, the extra items are 
  ignored. 

  To use them too, we can use the rest operator.(*)
*/

// *
let [name1, name2, ...rest] = "Dorin Marin Julius Cesar Augustus".split(" ");

console.log(name1);
console.log(name2);
console.log(rest); // ['Julius', 'Cesar', 'Augustus']

/* 
  Default values

  We can provide default values in case on the right will be less items than
  on the left.(*) These values can be complex expressions or even functions. 
*/

let [player1 = "Spy", player2 = "Terminator", player3 = "Anonymous"] = [
  "spy84588",
  "terminator84757",
];

console.log(player2);
console.log(player3);

/* 
  Object Destructuring

  On object destructuring we're using {} on the left. 

  The variables names on the left needs to be equal to the objects properties
  names on the right. (*)

  If we want another name for the variable to the right we have to use 
  the syntax variableName : newVariableName (**)

  Set default value (***)

  Default values + another name for the variable (#)

  Default parameters can be any expressions or func calls. 

  We can also extract only the property we need from an object. (##)

  
*/

// *
let obj = {
  office: "White House",
  title: "President",
  party: "Republicans",
};

let { office, title, party } = obj;
console.log(title);

// **
let { office: cabinet, title: t, party: p } = obj;
console.log(t);

// ***
let colors = {
  red: "blood",
  blue: "sky",
};

let { red = "sunshine", blue = blue } = colors;

// #

let animal = {
  name: "opossum",
  predator: false,
};

let { name: nikname = "OpposumBigRat", predator } = animal;

// ##
let planet = {
  name: "Earth",
  life: true,
  size: "small planets",
};

let { life } = planet;
console.log(life); // true

/* 
  The rest pattern '...'
  
  Just like with arrays, we can use rest operator (*)

  The code in the example (**) will throw an error, because JS treats 
  the code on the left of = as a code block that group statements. So 
  in order to be able to do that, we need to wrap the hole line 
  between parantheses. 

*/

// *

let earth = {
  name: "Earth",
  life: true,
  size: "small planets",
};

let { name: planetName, ...properties } = earth;
console.log(properties); // {life: true, size: 'small planets'}

// **

let car = {
  color: "grey",
  power: 5500,
  seats: 7,
};

let color, power, seats;

// {color, power, seats} = {car}; // Error
({ color, power, seats } = car);
console.log(power); // 5500

/* 
  Nested destructuring

  If an object or an array, contains complex data we can use more
  complex left-side patters, that mirrors the right side.(*)

*/

// *
let house = {
  roomsAmount: 4,
  kitchen: {
    fridge: true,
    conditioning: true,
  },
  rooms: ["bathroom", "kitchen", "hall", "bedroom"],
};

let {
  roomsAmount,
  kitchen: { fridge, conditioning },
  rooms: [room1, room2, room3, room4],
} = house;

console.log(fridge);
console.log(room2);
// console.log(kitchen); // is not defined (we take it's content instead)

/* 
  Smart function parameters
  
  For functions with many paramaters, most of which are optional, we need 
  a way to call the function with most parameters ok by default. (*) This
  code seems pretty ugly. We have to remember the order of parameters, and
  specifically mention undefined ones. 
    
  Instead we can pass parameters as an object, and the function destructu-
  rizes them into variables. (**) Note that the function now accepts an
  object, not separated parameters.

  The syntax with default values and another names is the same as with 
  destructuring above. 

  If we want all variables by default, we just pass an empty object. 

*/

// *

function logPhrase(
  greeting = "Hello",
  whom = "human",
  when = "23.01.23",
  where = "Portugal"
) {
  console.log(`${greeting} ${whom}, today is ${when} and we are in ${where}`);
}

logPhrase(undefined, undefined, undefined, "United States");

// **
function logPhrase1({
  greeting = "Hello",
  whom = "human",
  when = "23.01.23",
  where = "Portugal",
}) {
  console.log(`${greeting} ${whom}, today is ${when} and we are in ${where}`);
}
let data = {
  whom: "elf",
  where: "Forests Kingdom",
};

logPhrase1(data);
