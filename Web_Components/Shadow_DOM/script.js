// Shadow DOM

// Shadow DOM serves for encapsulation, it allows a component to have its very
// own 'shadow' DOM tree, which can't be accesed accidentally from the main
// document, may have local styles and more.

// A DOM element can have both light tree, which is a regular DOM subtree with
// html elements which we already know, and shadow tree, which is hidden DOM
// tree and if there is one, then browser will render shadow tree instead of
// light one, but we can make compositions as well with both of them.

// We can use Shadow tree with Custom Elements, and populate it with
// innerHTML, their styles and ids don't conflict with the main one. (*)

// *

customElements.define(
  "show-message",
  class extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = `
      <style>
          #text {
            color: purple;
            text-align: center;
            border: 1px solid grey;
          }
      </style>
      <p id="text">Lorem</p>
      `;
    }
  }
);
