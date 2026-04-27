/* ========================================
   PAPPA'S KITCHEN — script.js
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------
     1. NAVBAR — scroll behaviour & burger
  ---------------------------------------- */
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  const updateNav = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Burger toggle
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* ----------------------------------------
     2. EMBER PARTICLES in hero
  ---------------------------------------- */
  const emberContainer = document.getElementById('embers');
  const EMBER_COUNT = 28;

  const createEmber = () => {
    const el = document.createElement('div');
    el.className = 'ember';
    const size = Math.random() * 3 + 2;
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 120;
    const duration = Math.random() * 6 + 5;
    const delay = Math.random() * 8;

    el.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      --drift: ${drift}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      opacity: 0;
    `;

    // Vary colour: gold / terracotta / white
    const colors = ['#d4943a', '#e8b86d', '#c0522b', '#fff8e7'];
    const c = colors[Math.floor(Math.random() * colors.length)];
    el.style.background = c;
    el.style.boxShadow = `0 0 6px 2px ${c}`;

    emberContainer.appendChild(el);

    // Recycle ember on animation end
    el.addEventListener('animationend', () => {
      el.remove();
      createEmber();
    });
  };

  for (let i = 0; i < EMBER_COUNT; i++) {
    createEmber();
  }


  /* ----------------------------------------
     3. SCROLL REVEAL (Intersection Observer)
  ---------------------------------------- */
  const revealEls = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  // Don't observe hero elements — they use CSS animation instead
  revealEls.forEach(el => {
    if (!el.closest('.hero')) {
      revealObserver.observe(el);
    }
  });


  /* ----------------------------------------
     4. MENU TABS
  ---------------------------------------- */
  const tabBtns    = document.querySelectorAll('.tab-btn');
  const tabPanels  = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panels
      tabPanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `tab-${target}`) {
          panel.classList.add('active');

          // Re-trigger reveal for newly shown cards
          panel.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.08}s`;
            // Force reflow then add visible
            void el.offsetWidth;
            el.classList.add('visible');
          });
        }
      });
    });
  });

  // Show first tab cards on load
  document.querySelectorAll('#tab-pizza .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 300 + i * 80);
  });


  /* ----------------------------------------
     5. RESERVATION FORM
  ---------------------------------------- */
  const form        = document.getElementById('contact-form');
  const successMsg  = document.getElementById('form-success');

  // Set min date to today
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name  = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
      // Simple shake on empty required fields
      [document.getElementById('name'), document.getElementById('email')].forEach(el => {
        if (!el.value.trim()) {
          el.style.borderColor = '#c0522b';
          el.style.animation = 'shake 0.4s ease';
          setTimeout(() => {
            el.style.animation = '';
            el.style.borderColor = '';
          }, 500);
        }
      });
      return;
    }

    // Simulate submission
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      submitBtn.style.display = 'none';
      successMsg.classList.add('visible');
      form.querySelectorAll('input, select, textarea').forEach(el => el.value = '');
    }, 1200);
  });


  /* ----------------------------------------
     6. SMOOTH ACTIVE NAV HIGHLIGHTING
  ---------------------------------------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--gold-l)'
            : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));


  /* ----------------------------------------
     7. CSS SHAKE ANIMATION (injected once)
  ---------------------------------------- */
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%       { transform: translateX(-6px); }
      40%       { transform: translateX(6px); }
      60%       { transform: translateX(-4px); }
      80%       { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(shakeStyle);


  /* ----------------------------------------
     8. PARALLAX on hero (subtle)
  ---------------------------------------- */
  const heroBg1 = document.querySelector('.hero__bg-layer--1');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight && heroBg1) {
      heroBg1.style.transform = `translateY(${y * 0.3}px)`;
    }
  }, { passive: true });

});