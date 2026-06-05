import { useEffect, useRef, useCallback } from 'react';
import { IconDownload, IconPlayerPlay } from '@tabler/icons-react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { logDownloadEvent } from '../lib/firebase';

const DOWNLOAD_URL = 'https://github.com/amrgunaweera/picture-culling/releases/download/v1.0.0/Cullexa.Picture.Organizer.Setup.1.0.0.exe';

export default function Hero() {
  const heroImageRef = useRef(null);

  const photosCounter = useAnimatedCounter(250000, '+');
  const timeCounter = useAnimatedCounter(85, '%');
  const ratingCounter = useAnimatedCounter(94.7, '/100');

  // Parallax effect on hero image
  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.08;
        if (scrollY < window.innerHeight) {
          heroImageRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = useCallback((e) => {
    e.preventDefault();
    const btn = e.currentTarget;

    // Ripple effect
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
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
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);

    // Save original content
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg></span> Starting Download...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.pointerEvents = '';
      logDownloadEvent();
      window.open(DOWNLOAD_URL, '_blank');
    }, 2000);
  }, []);

  const handleSmoothScroll = useCallback((e) => {
    e.preventDefault();
    const target = document.querySelector('#views');
    if (target) {
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span className="badge-tag">Free</span>
          Limited-Time Promotion — Download Now
        </div>

        <h1 className="hero-title">
          Cull Photos<br />
          <span className="gradient-text">Smarter with AI</span>
        </h1>

        <p className="hero-subtitle">
          Let artificial intelligence analyze your photo collection, score every image from 0–100, and help you keep only
          the best shots. Clean up thousands of photos in minutes, not hours.
        </p>

        <div className="hero-actions">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            id="heroDownloadBtn"
            onClick={handleDownload}
          >
            <IconDownload size={20} stroke={2} />
            Download Free for Windows
          </a>
          <a href="#views" className="btn-secondary" onClick={handleSmoothScroll}>
            <IconPlayerPlay size={20} stroke={2} />
            See It in Action
          </a>
        </div>

        {/* Trust indicators */}
        <div className="hero-trust" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          animation: 'fade-up 0.8s ease-out 0.35s both',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['No Ads · No Telemetry', 'Windows 10/11', '100% Free'].map((item) => (
            <span key={item} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
              fontWeight: '500'
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10"/></svg>
              {item}
            </span>
          ))}
        </div>

        <div className="hero-stats" ref={photosCounter.ref}>
          <div className="hero-stat">
            <div className="stat-value" ref={photosCounter.ref}>{photosCounter.value}</div>
            <div className="stat-label">Photos Analyzed</div>
          </div>
          <div className="hero-stat">
            <div className="stat-value" ref={timeCounter.ref}>{timeCounter.value}</div>
            <div className="stat-label">Time Saved</div>
          </div>
          <div className="hero-stat">
            <div className="stat-value" ref={ratingCounter.ref}>{ratingCounter.value}</div>
            <div className="stat-label">AI Accuracy Score</div>
          </div>
        </div>

        <div className="hero-image" ref={heroImageRef}>
          <img
            src="/assets/app-grid-view.jpg"
            alt="Cullexa Picture Manager - AI Photo Culling Grid View showing image thumbnails with quality scores"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
