/* 
    FormData
    --------

    FormData is applied when we need to send HTML forms.

    FormData is an object that represents HTML forms.

    The constructor(*)

    Network methods accept FormData object as a body. It is encoded and send 
    out with Content-Type: multipart/form-data

    Sending a simple form (**)
      
    There are also many methods on FormData:
    formData.append(name, value), formData.append(name, blob, filename), 
    formData.delete(name), .get(name), .has(name).

    There is .set(name, value), unless .append() method, that adds multiple
    fields with the same name, .set() methods deletes all fields with this
    name and appends the current one, so it ensures there is only one such
    field.

    We can iterate over formData fields with for..of(***)

    Because the form is always sent as Content-Type: multipart/form-data, this
    encoding allows us to send files as well, so we can put a file inside the form of the example below (*), and we can send the file exactly as we send
    form data. 
*/

// *

let form = document.getElementById("form");

let formData = new FormData(form);

console.log(formData);

// **

form.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch("#", {
    method: "POST",
    body: new FormData(form),
  });

  let result = await response.json();

  console.log(result.message);
};

// ***

let formDataA = new FormData();

formDataA.append("email", "vasile@gmail.com");
formDataA.append("login", "rainy_stranger");

for (let [name, value] of formDataA) {
  console.log(name, value);
}
