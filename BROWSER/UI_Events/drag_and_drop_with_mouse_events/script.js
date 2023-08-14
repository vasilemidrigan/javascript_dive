/* 
   Drag'n'Drop with mouse events
   -----------------------------

   Drag'n'Drop algorithm
   ---------------------
  
   The basic algorithm is:
   - mousedown: prepare the item for moving(maybe create a clone, a class, etc)
   - mousemove: move it by changing properties left/top with position: absolute
   - mouseup: perform all actions for finishing the drag'n'drop
    
   Here's an example: (*)
*/

// *

let ball = document.getElementById("ball");

ball.onmousedown = function (e) {
  // set position absolute and on top
  ball.style.position = "absolute";
  ball.style.zIndex = 1000;

  //
  let shiftX = e.clientX - ball.getBoundingClientRect().left;
  let shiftY = e.clientY - ball.getBoundingClientRect().top;

  // position the element relative to the body, so we can
  // work with coordinates
  document.body.append(ball);

  // moves the ball at pageX/pageY coordinates with corresponding shifts
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + "px";
    ball.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // when moving mouse move the element under the cursor
  document.addEventListener("mousemove", onMouseMove);

  // remove uneeded handlers
  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  };
};
