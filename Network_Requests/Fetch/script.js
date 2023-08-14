/* 
  Fetch
  -----

  JS can send network requests to the server, and load information when needed,
  submit an order, load user info, etc. 

  AJAX - Asynchronous JavsScript And XML

  There are multiple ways to send a network request, fetch though is a modern
  and versatil way to do it. 

  The syntax : 
  let promise = fetch(url, [options])

  options is a optional parameter, where we can put method, headers, etc. 

  Without options, is a simple GET request. 

  It returns a promise. 

  The promise returned by fetch resolves with an object of the built-in 
  Response class as soon as the server responds with headers. 

  At this stage we can check HTTP status, to see if it is successful or not, 
  check headers. 

  The promise rejects if the fetch was unable to make HTTP request. 

  We can see HTTP status in response properties: status - HTTP status code, 
  e.g 200, ok - boolean true if the HTTP status code is 200-299 

  See the example(*)

  Response provides multiple promise-based methods to access the body in 
  various formats:
  response.text()
  response.json()
  .formData() - FormData object
  .blob()  - binary data type Blob
  .arrayBuffer() - ArrayBuffer (low level representation of binary data)

  response.body is a ReadableStream object, that allows you to read the body
  chunk-by-chunk. 

  Or we can use pure promise syntax (**)

  We can't use two body-reading methods, if there was already respone.json() 
  for example, then using response.text() will not work, as the body content
  was already processed. 
*/

// *

let url = "https://dummyjson.com/users";

async function getDummyUsers() {
  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    console.log(json);
  } else {
    console.log("HTTP-Error: ", response.status);
  }
}

getDummyUsers();

// **

fetch(url)
  .then((response) => response.json())
  .then((users) => console.log(users));

/* 
  Response Headers
  ----------------

  response.headers are available in Map-like headers object. (*)

  Is not exactly map, but it has similar methods, and we can iterate over headers
  inside it. 
*/

// *

let usersURL = "https://dummyjson.com/users";

async function getDummyPeople() {
  let response = await fetch(usersURL);

  if (response.ok) {
    let json = await response.json();

    console.log(json);

    for (let header of response.headers) {
      console.log(header);
    }
  } else {
    console.log("HTTP-Error: ", response.status);
  }
}

getDummyPeople();

/* 
  Request headers
  ---------------

  We can set a request header option.(*)

  There is a list of forbidden HTTP Requests, as they ensure proper and safe
  HTTP, so they are controlled by the browser. 
*/

// *

let response = fetch(url, {
  headers: {
    Authentication: "secret",
  },
});

/* 
  POST requests
  -------------

  To make a POST request, or a request if another method,  we need to use 
  fetch options. (*)

  So, in fetch options we provide:
  - method: POST or another
  - body: one of(a string, FormData, Blob, BufferSource, URLSearchParams)

  Usually, JSON format is used. 


*/

// *
let postURL = "https://jsonplaceholder.typicode.com/posts";

fetch(postURL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json: charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
