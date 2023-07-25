/* 
  Write the code, one line for each action:

  Create an empty object user.
  Add the property name with the value John.
  Add the property surname with the value Smith.
  Change the value of the name to Pete.
  Remove the property name from the object.
*/
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

/* 
  Write the function isEmpty(obj) which returns true if the object 
  has no properties, false otherwise.
*/
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let color = {};
let distances = { a: 3434, b: 4885 };

console.log(isEmpty(color)); // true
console.log(isEmpty(distances)); // false

/* 
  Write the code to sum all salaries and store in the variable sum. 
  Should be 390 in the example above.

  If salaries is empty, then the result must be 0.
*/
function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = sumSalaries(salaries);
console.log(sum); // 390

/* 
  Create a function multiplyNumeric(obj) that multiplies all 
  numeric property values of obj by 2.
*/
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);
