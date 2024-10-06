const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');
const interactiveElements = document.querySelectorAll('.interactive-btn, .interactive-link');

let mouseX = 0, mouseY = 0;
let roundedX = 0, roundedY = 0;
let speed = 0.5; // Lower value makes the delay more noticeable

const moveCursor = (e) => {
  mouseX = e.clientX + window.scrollX;
  mouseY = e.clientY + window.scrollY;
  
  // Immediate movement for pointed cursor
  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

// Smooth delayed movement for rounded cursor
const animateCursor = () => {
  roundedX += (mouseX - roundedX) * speed;
  roundedY += (mouseY - roundedY) * speed;
  
  cursorRounded.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
  
  requestAnimationFrame(animateCursor);
};

// Hover effects for interactive elements
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRounded.classList.add('hover');
    cursorPointed.classList.add('hover');
  });
  
  el.addEventListener('mouseleave', () => {
    cursorRounded.classList.remove('hover');
    cursorPointed.classList.remove('hover');
  });
});

// Initial event listeners and animation loop
window.addEventListener('mousemove', moveCursor);
animateCursor();
