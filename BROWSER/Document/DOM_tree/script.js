/* 
  DOM tree
  --------

  Every html tag is an object. 

  Nested tags are children of the enclosing ones.

  The text inside a tag is also an object. 

  i.e. document.body is an object representing <body> tag.

  If there is malformed html document structure, it automatically correct
  it when making the DOM, by completing missing tags, or spaces, new lines, 
  etc. There is a standart that is followed, and when making the DOM, those
  rules are applied. So we cannot write nothing but a <p> tag, and the 
  browser will automatically wrap it into all the standart tags like html
  body, etc. 

  Comment are also part of the DOM tree, because of the rule: 
  If there is something in HTML, it must be in the DOM tree. 

  There are 12 node types, we usually work with 4 of them:
  1. document - the entry point into DOM
  2. element nodes - html tags, the tree building blocks
  3. text nodes - contain text
  4. comments - we can put info there, js by the way can read them from
  the DOM. 
*/
