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

  setTimeout(() => {
    splash.classList.add('fade-out');

    // Fallback in case transitionend doesn't fire
    const revealMain = () => {
      splash.style.display = 'none';
      main.style.display = 'block';

      // Show section based on URL hash or default to #home
      const hash = window.location.hash;
      if (hash && document.querySelector(hash)) {
        showSection(hash);
      } else {
        showSection('#home');
      }
    };

    splash.addEventListener('transitionend', revealMain);
    setTimeout(revealMain, 1200); // Fallback if transitionend fails
  }, 5000);
});

// Handle navbar clicks
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      showSection(targetId);
      history.replaceState(null, '', targetId); // update URL without reloading
    }
  });
});
