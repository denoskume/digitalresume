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

function revealMainContent() {
  const splash = document.getElementById('splash-screen');
  const main = document.getElementById('main-content');

  splash.style.display = 'none';
  main.style.display = 'block';

  const hash = window.location.hash;
  if (hash && document.querySelector(hash)) {
    showSection(hash);
  } else {
    showSection('#home');
  }
}

window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');

  // Fade out splash after 5 seconds
  setTimeout(() => {
    splash.classList.add('fade-out');

    // Fallback: always reveal main content after fade
    setTimeout(revealMainContent, 1000);
  }, 5000);
});

// Handle navbar clicks
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      showSection(targetId);
      history.replaceState(null, '', targetId);
    }
  });
});
