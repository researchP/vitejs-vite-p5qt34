
document.addEventListener('DOMContentLoaded', (event) => {
  const draggables = document.querySelectorAll('.draggable');

  draggables.forEach(draggable => {
      draggable.addEventListener('mousedown', mouseDownHandler);

      // Function to handle the mousedown event
      function mouseDownHandler(e) {
          window.addEventListener('mousemove', mouseMoveHandler);
          window.addEventListener('mouseup', mouseUpHandler);

          let prevX = e.clientX;
          let prevY = e.clientY;

          function mouseMoveHandler(e) {
              const rect = draggable.getBoundingClientRect();

              if (e.shiftKey) {
                  // Resize logic
                  draggable.style.width = rect.width - (prevX - e.clientX) + "px";
                  draggable.style.height = rect.height - (prevY - e.clientY) + "px";
              } else {
                  // Move logic
                  draggable.style.left = rect.left - (prevX - e.clientX) + 'px';
                  draggable.style.top = rect.top - (prevY - e.clientY) + 'px';
              }

              prevX = e.clientX;
              prevY = e.clientY;
          }

          function mouseUpHandler() {
              window.removeEventListener('mousemove', mouseMoveHandler);
              window.removeEventListener('mouseup', mouseUpHandler);
          }
      }
  });
});
