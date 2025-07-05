// Splash screen delay and reveal main content
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      main.style.display = 'block';
    }, 1000);
  }, 5000);
});

// Smooth scrolling for
