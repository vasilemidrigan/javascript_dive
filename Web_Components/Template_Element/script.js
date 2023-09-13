// Template Element

// <template> elements serves as a storage for HTML makup templates,
// we can access it in JS to create other elements and reuse them as well.

// It is invisible inside HTML document, but we can use the content of the
// template so it becomes visible.

// It is kind of out of the document untill is inserted. (*)

// We can also use scripts and styles inside it, which will execute when
// inserting. (*)

// And here we have an example to rewrite a Shadow DOM with a <template> (**)

// *
let componentBar = document.createElement("div");
componentBar.append(tmpl.content.cloneNode(true));
document.body.append(componentBar);

// **

let btn = document.getElementById("btn");

btn.onclick = function () {
  btn.attachShadow({ mode: "open" });
  btn.shadowRoot.append(tmpl.content.cloneNode(true));
  btn.shadowRoot.getElementById("line").style.border = "3px solid purple";
};
