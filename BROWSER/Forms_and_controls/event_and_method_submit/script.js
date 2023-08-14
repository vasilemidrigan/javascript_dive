/* 
  Forms: event and method submit
  ------------------------------

  The submit event triggers when the form is submited, it is usually used to 
  validate the form before sending it to the server or to abort the submission. 

  We can use form.submit() to initiate form sending from JavaScript, to dynami-
  cally create and send our own forms to server. 

  Event.submit
  ------------

  Two ways to submit: 
  1. click <input type="submit"> or <input type="image">
  2. press enter on an input field

  So, on submit we can check for errors or any other stuff that we need to 
  perform before sending to the server, and if there are some errors for 
  example, we can call preventDefault() and the data is not sent to the server.

  Funny thing: if press enter on an input field, the click event is triggered. 

  Method: submit
  --------------

  To submit manually we can call form.submit() . In such a case, the submit 
  event is not triggered, as it is assumed that all the processing is done. 
*/
