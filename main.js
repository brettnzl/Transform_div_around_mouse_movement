const div = document.getElementById('test');
const rect = div.getBoundingClientRect();
const originalX = rect.left;
const originalY = rect.top;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const deltaX = x - originalX;
  const deltaY = y - originalY;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  if (distance > 10) {
    const angle = Math.atan2(deltaY, deltaX);
    const newDeltaX = 10 * Math.cos(angle);
    const newDeltaY = 10 * Math.sin(angle);
    div.style.transform = `translate(${newDeltaX}px, ${newDeltaY}px)`;
  } else {
    div.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }
});
