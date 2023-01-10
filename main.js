// Get the div element with the id 'test'
const div = document.getElementById('test');

// Get the bounding rectangle of the div element
const rect = div.getBoundingClientRect();

// Store the original x and y coordinates of the div
const originalX = rect.left;
const originalY = rect.top;

// Add an event listener for the mousemove event
document.addEventListener('mousemove', (e) => {
  // Get the current x and y coordinates of the mouse
  const x = e.clientX;
  const y = e.clientY;

  // Calculate the difference between the current and original coordinates
  const deltaX = x - originalX;
  const deltaY = y - originalY;

  // Calculate the distance from the original position
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  // Check if the distance is greater than 10 pixels
  if (distance > 10) {
    // Calculate the angle of the movement
    const angle = Math.atan2(deltaY, deltaX);
    // Calculate new deltaX and deltaY values to move the div 10px
    const newDeltaX = 10 * Math.cos(angle);
    const newDeltaY = 10 * Math.sin(angle);
    // Set the transform property of the div to move it by the new delta values
    div.style.transform = `translate(${newDeltaX}px, ${newDeltaY}px)`;
  } else {
    // If the distance is less than or equal to 10 pixels, move the div by the original delta values
    div.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }
});
