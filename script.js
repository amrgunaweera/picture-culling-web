/* ========================================
   Cullexa Picture Manager — Landing Page Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile menu toggle ----
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.getElementById('menuIcon').style.display = isOpen ? 'none' : 'block';
    document.getElementById('closeIcon').style.display = isOpen ? 'block' : 'none';
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
      document.getElementById('menuIcon').style.display = 'block';
      document.getElementById('closeIcon').style.display = 'none';
    });
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // ---- Scroll reveal animations ----
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---- Animated counter (hero stats) ----
  const animateCounter = (element, target, suffix = '', duration = 2000) => {
    let start = 0;
    const startTime = performance.now();
    const isFloat = String(target).includes('.');

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (isFloat) {
        element.textContent = current.toFixed(1) + suffix;
      } else {
        element.textContent = Math.floor(current).toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  // Trigger counter when hero stats are visible
  const statsSection = document.querySelector('.hero-stats');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;

        animateCounter(document.getElementById('statPhotos'), 250000, '+');
        animateCounter(document.getElementById('statTime'), 85, '%');
        animateCounter(document.getElementById('statRating'), 94.7, '/100');

        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statsObserver.observe(statsSection);

  // ---- Showcase tabs ----
  const tabs = document.querySelectorAll('.showcase-tab');
  const panels = document.querySelectorAll('.showcase-panel');
  let currentTabIndex = 0;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      if (index === currentTabIndex) return;

      const target = tab.dataset.tab;
      const direction = index > currentTabIndex ? 'next' : 'prev';
      currentTabIndex = index;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Animate panel transition
      panels.forEach(panel => {
        if (panel.id === `panel-${target}`) {
          // New active panel
          panel.style.display = 'block';
          panel.classList.remove('slide-prev', 'slide-next', 'exiting');
          panel.classList.add(direction === 'next' ? 'slide-next' : 'slide-prev');
          // Trigger reflow
          panel.offsetHeight;
          panel.classList.add('active');
        } else if (panel.classList.contains('active')) {
          // Exiting panel
          panel.classList.remove('active');
          panel.classList.remove('slide-prev', 'slide-next');
          panel.classList.add('exiting');
          panel.classList.add(direction === 'next' ? 'slide-prev' : 'slide-next');
          
          // Let transition finish before hiding
          setTimeout(() => {
            if (!panel.classList.contains('active')) {
              panel.style.display = 'none';
              panel.classList.remove('slide-prev', 'slide-next', 'exiting');
            }
          }, 400);
        }
      });
    });
  });

  // ---- Mouse-follow glow on feature cards ----
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // ---- Download button animation ----
  const downloadBtn = document.getElementById('downloadBtn');
  const heroDownloadBtn = document.getElementById('heroDownloadBtn');

  const createRipple = (button, e) => {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      transform: scale(0);
      animation: ripple-effect 0.6s ease-out forwards;
      pointer-events: none;
    `;

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

  // Add ripple animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-effect {
      to {
        transform: scale(2.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  [downloadBtn, heroDownloadBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        createRipple(btn, e);

        // Simulate download start feedback
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span><i class="ti ti-check"></i></span> Starting Download...';
        btn.style.pointerEvents = 'none';

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.pointerEvents = '';
          // Trigger the actual download
          window.open('Cullexa Picture Organizer Setup 1.0.0.exe', '_blank');
        }, 2000);
      });
    }
  });

  // ---- Parallax on hero image ----
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.08;
      if (scrollY < window.innerHeight) {
        heroImage.style.transform = `translateY(${offset}px)`;
      }
    }, { passive: true });
  }

  // ---- Keyboard accessibility for tabs ----
  tabs.forEach((tab, index) => {
    tab.addEventListener('keydown', (e) => {
      let newIndex;
      if (e.key === 'ArrowRight') {
        newIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        newIndex = (index - 1 + tabs.length) % tabs.length;
      }

      if (newIndex !== undefined) {
        e.preventDefault();
        tabs[newIndex].focus();
        tabs[newIndex].click();
      }
    });
  });
});
