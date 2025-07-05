window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  setTimeout(() => {
    splash.classList.add('fade-out');

    // Wait for fade-out transition before showing main content
    splash.addEventListener('transitionend', () => {
      splash.style.display = 'none';
      main.style.display = 'block';
    });
  }, 5000);
});
