/* 
  Error handling with promises
  ----------------------------

  The easiest to catch errors in a promise chain, is to append .catch() 
  at the end of the chain. (*)

  Any error that happens into a promise executor or a promise handler, 
  is caught by the nearest error handler, and it turns the error into 
  a rejection. This happens for all errors, they are catched and turned
  into rejection. (**)

  For promises we can also manage the errors we want to handle and those
  that we want to just rethrow. (***)
*/

// *

fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then(
    (githubUser) =>
      new Promise((resolve, reject) => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch((error) => console.log(error.message));

// **

new Promise((resolve, reject) => {
  resolve("ok");
})
  .then((result) => {
    throw new Error("Whoops!!!");
  })
  .catch((err) => console.log(err));

// ***

new Promise((resolve, reject) => {
  throw new Error("Whoops! ERROR in Promise");
})
  .catch(function (error) {
    if (error instanceof URIError) {
      console.log(error, "handle error...");
    } else {
      console.log("Cannot handle this Error");
      throw error;
    }
  })
  .then(function () {
    console.log("This then will not run as the execution goes to the catch");
  })
  .catch((err) => console.log("The unknown error has occured!"));

/* 
  Unhandled rejections
  --------------------

  When there is no rejection handlers that will catch the error, the script
  dies.

  JS track such rejections and generates a global error in this case. (*)

  IF there is an error that is no handled, we can catch it with 
  unhandledrejection event(**)
*/

// *

new Promise(function () {
  fakeFunction();
}).then(() => {
  console.log("Handled!");
});

// **

window.addEventListener("unhandledrejection", function (event) {
  console.log(event.promise);
  console.log(event.reason);
});
