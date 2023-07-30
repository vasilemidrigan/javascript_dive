/* 
  Date and Time

  Stores the date and time, and provides methods for date/time. 

  Creation

  Create a Date object, without parameters, creates an object for the
  current time.(*)

  A timestamp - is an integer number, representing the time passed from
  the begining of the 1970. 

  We can create a date from a timestamp - new Date(timestamp) and convert
  the existing Date object to a timestamp using the date.getTime() (**)

  Dates before 1970 have negative timestamps.
  
  Create date(only first two arguments are obligatory): 
  new Date(year, month, date, hours, minutes, seconds, ms) (***)
  
  year - 4 digits,
  month - starts from 0 to 11

  Access data from the Date obj:
  getFullYear()
  getMonth()
  getDate()
  etc

  getDay() from 0 to 6

  There are setting date components (****)
*/

// *

let now = new Date();

// Sun Jul 30 2023 19:17:57 GMT+0100 (Western European Summer Time)
console.log(now);

// **
let jan02_1970 = new Date(24 * 3600 * 1000);

// Fri Jan 02 1970 01:00:00 GMT+0100 (Western European Standard Time)
console.log(jan02_1970);

// ***

// Fri Jun 04 1993 01:00:00 GMT+0200 (Western European Summer Time)
let myBirthday = new Date(1993, 5, 4, 1);
console.log(myBirthday);

// ****
let date = new Date();

date.setFullYear(1993);
date.setHours(4);

// Fri Jul 30 1993 04:59:17 GMT+0200 (Western European Summer Time)
console.log(date);

/* 
  Autocorrection

  If we set out of range values Date, JS will fix them.(*)
  
  Increase the date (**)
*/

// *

let meetup = new Date(2024, 5, 33);

// Wed Jul 03 2024 00:00:00 GMT+0100 (Western European Summer Time)
console.log(meetup);

// **

meetup.setDate(meetup.getDate() + 35);

// Wed Aug 07 2024 ...
console.log(meetup);

/* 
  Date to number, date diff

  Date converted to number = timestamp (*)

  Calculate the difference in time (**)
*/

// *

console.log(meetup.getTime()); // 1722985200000

// **
let start = new Date();
console.log(start);

for (let i = 0; i < 1000000; i++) {
  let x = i * i * i;
}

let end = new Date();

console.log(end);
console.log(`The loop took ${end - start}`);

/* 
    Date.now()

    If need to only measure time, no need for Date object, instead use
    Date.now(), it doesn't create the date object, so no pressure on 
    garbage collection. 

    It is pretty handy in terms of performance. 
*/

let time = Date.now();

console.log(time); // 1690745483957

/* 
  Benchmarking

  Two functions that calculate the difference between two dates, which one
  is faster, such performance measurements are called benchmarks. (*)
*/

// *

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log("Time of diffSubtract: " + bench(diffSubtract) + "ms");
console.log("Time of diffGetTime: " + bench(diffGetTime) + "ms");

/* 
  Date.parse from a string

  Read the date from a string, format: YYYY-MM-DDTHH:mm:ss.sssZ, shorter
  options are also allowed.(*)
*/

let today = Date.parse("2023-06-30");

console.log(today);
