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

window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  // Force fallback in case transitionend doesn't fire
  let splashTimeout = setTimeout(() => {
    splash.classList.add('fade-out');
    splash.style.display = 'none';
    main.style.display = 'block';
    showSection('#home'); // or '#about' if you prefer
  }, 5000);

  // Preferred method: wait for transition to end
  splash.addEventListener('transitionend', () => {
    clearTimeout(splashTimeout); // prevent double execution
    splash.style.display = 'none';
    main.style.display = 'block';
    showSection('#home');
  });
});

// Handle navbar clicks
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      showSection(targetId);
    }
  });
});
