window.addEventListener("load", function() {
    document.addEventListener("keydown", function(event) {
        keySplash(event.key);
    });
});

function keySplash(key) {
    const keyElement = document.createElement('div');
  
    keyElement.textContent = key;
    keyElement.classList.add('key-splash');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    const randomX = Math.random() * (screenWidth - 100);
    const randomY = Math.random() * (screenHeight - 100);
  
    keyElement.style.position = 'absolute';
    keyElement.style.left = randomX + 'px';
    keyElement.style.top = randomY + 'px';
    document.body.appendChild(keyElement);
  
    // Set up the CSS transition
    keyElement.style.transition = 'opacity 1s ease-out'; // You can adjust the duration and timing function as needed
  
    // Use requestAnimationFrame to trigger the fade out after a delay
    requestAnimationFrame(() => {
      keyElement.style.opacity = '0';
    });
  
    // Remove the element after the animation is complete
    keyElement.addEventListener('transitionend', () => {
      keyElement.remove();
    });
  }
  