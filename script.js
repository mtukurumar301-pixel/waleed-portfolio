// ---- mobile explorer toggle ----
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const explorer = document.querySelector('.explorer');
  if (menuBtn && explorer) {
    menuBtn.addEventListener('click', () => {
      explorer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', explorer.classList.contains('open'));
    });
    explorer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => explorer.classList.remove('open'));
    });
  }

  // ---- animate skill bars into view ----
  document.querySelectorAll('.fill[data-value]').forEach(el => {
    requestAnimationFrame(() => {
      el.style.width = el.getAttribute('data-value') + '%';
    });
  });

  // ---- contact form: mock submit (no backend) ----
  const form = document.querySelector('.term-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.querySelector('.form-status');
      if (status) {
        status.textContent = '✔ message queued — this is a demo form, so nothing was actually sent.';
        status.style.color = 'var(--accent)';
      }
      form.reset();
    });
  }
});
