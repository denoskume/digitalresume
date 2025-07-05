// Show only one section at a time after splash
function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  const target = document.querySelector(id);
  if (target) {
    target.style.display = 'block';
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Splash screen logic + section control
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  setTimeout(() => {
    splash.classList.add('fade-out');
    splash.addEventListener('transitionend', () => {
      splash.style.display = 'none';
      main.style.display = 'block';
      showSection('#about'); // Show default section
    });
  }, 5000);
});

// Handle navbar clicks
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash) {
      e.preventDefault();
      showSection(this.hash);
    }
  });
});
