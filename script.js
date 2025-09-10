document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = "jeenesh2007vpm@gmail.com";
    const name = document.getElementById('name').value.trim();
    const msg = document.getElementById('msg').value.trim();

    if (!name || !msg) {
      statusEl.textContent = 'Please fill in your name and a message.';
      return;
    }

    const subject = encodeURIComponent(`Message for Jeenesh from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}`);
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    statusEl.textContent = 'Opening your email app…';
  });
}

const emailBtn = document.getElementById('email-btn');
if (emailBtn) {
  emailBtn.href = `mailto:jeenesh2007vpm@gmail.com?subject=${encodeURIComponent('Hello Jeenesh')}`;
}