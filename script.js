// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form: AJAX submit to Formspree so the page doesn't redirect
const form = document.getElementById('quoteForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  note.textContent = 'Sending…';
  note.className = 'form-note';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      form.reset();
      note.textContent = 'Thank you! Your request has been sent.';
      note.className = 'form-note success';
    } else {
      note.textContent = 'Something went wrong. Please try again or email us directly.';
      note.className = 'form-note error';
    }
  } catch {
    note.textContent = 'Network error. Please try again later.';
    note.className = 'form-note error';
  }
});