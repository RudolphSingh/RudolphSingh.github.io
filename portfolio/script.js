/* ─────────────────────────────────────────
   PORTFOLIO_OS — script.js
   ───────────────────────────────────────── */

// ── Custom cursor ──
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

// ── Live clock + session uptime ──
const sessionStart = Date.now();
function pad(n) { return String(n).padStart(2, '0'); }

function updateClock() {
  const now = new Date();
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    clockEl.textContent =
      pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  }
  const up = Math.floor((Date.now() - sessionStart) / 1000);
  const uptimeEl = document.getElementById('uptime');
  if (uptimeEl) {
    uptimeEl.textContent =
      pad(Math.floor(up / 3600)) + ':' +
      pad(Math.floor((up % 3600) / 60)) + ':' +
      pad(up % 60);
  }
}
setInterval(updateClock, 1000);
updateClock();

// ── Active nav tab on scroll ──
const sectionIds = ['home', 'about', 'projects', 'contact'];
const tabMap = {
  home:     'tab-home',
  about:    'tab-about',
  projects: 'tab-projects',
  contact:  'tab-contact',
};

window.addEventListener('scroll', () => {
  let current = 'home';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) current = id;
  });
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(tabMap[current]);
  if (activeTab) activeTab.classList.add('active');
});

// ── Skill bar animation ──
function animateBars() {
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      bar.style.width = (bar.dataset.w || 0) + '%';
    }
  });
}

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      animateBars();
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
window.addEventListener('scroll', animateBars);

// ── Contact form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const successMsg = document.getElementById('formSuccess');
    if (successMsg) {
      successMsg.classList.add('show');
      setTimeout(() => successMsg.classList.remove('show'), 6000);
    }
    contactForm.reset();
  });
}
