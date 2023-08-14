/* 
    FormData
    --------

    FormData is applied when we need to send HTML forms.

    FormData is an object that represents HTML forms.

    The constructor(*)

    Network methods accept FormData object as a body. It is encoded and send 
    out with Content-Type: multipart/form-data

    Sending a simple form (**)
    


*/

// *

let form = document.getElementById("form");

let formData = new FormData(form);

console.log(formData);

// **

form.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch("/article/formdata/post/user", {
    method: "POST",
    body: new FormData(formElem),
  });

  let result = await response.json();

  alert(result.message);
};
