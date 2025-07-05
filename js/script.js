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

window.addEventListener('DOMContentLoaded', () => {
  // Show section based on URL hash or default to #home
  const hash = window.location.hash;
  if (hash && document.querySelector(hash)) {
    showSection(hash);
  } else {
    showSection('#home');
  }

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

  // Contact form validation
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert('Message sent successfully!');
        form.reset();
      }
      form.classList.add('was-validated');
    });
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
