// Add a little animation on page load
window.addEventListener('load', () => {
  const message = document.getElementById('birthday-message');
  message.style.transform = 'scale(1.2)';
  setTimeout(() => {
    message.style.transform = 'scale(1)';
  }, 1000);
});
