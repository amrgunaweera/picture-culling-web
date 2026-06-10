import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { IconGift, IconCheck, IconBrandWindows, IconArrowRight } from '@tabler/icons-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { logDownloadEvent } from '../lib/firebase';

const DOWNLOAD_URL = 'https://github.com/amrgunaweera/picture-culling/releases/download/v1.0.1/Cullexa.Picture.Organizer.Setup.1.0.1.exe';

const FEATURES = [
  'AI Image Quality Analysis',
  'Unlimited Photo Scanning',
  'Grid, Slider & Compare Views',
  'Star Rating System',
  'Accept / Reject Workflow',
  'Safe Recycle Bin Cleanup',
  'All Future Updates Included',
  'No Ads · No Telemetry',
];

export default function Download() {
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal();

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

    // Save original content and show feedback
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

  return (
    <section className="download" id="download">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">
            <IconGift size={16} stroke={2} />
            Limited-Time Offer
          </div>
          <h2 className="section-title">
            Get Cullexa Picture Manager<br />
            <span className="gradient-text">Completely Free</span>
          </h2>
          <p className="section-desc">
            We're giving away Cullexa Picture Manager at no cost for a limited time. No credit card,
            no catch — just download and start culling.
          </p>
        </div>

        <div className="download-card reveal" ref={cardRef}>
          <div className="promo-banner" style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(59, 130, 246, 0.12))',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            color: 'var(--color-accent-purple-light)',
          }}>
            <span className="pulse" style={{ background: 'var(--color-accent-purple-light)' }} />
            Limited-Time Free Access
          </div>

          <div className="price-row">
            <span className="price-original">$24.99</span>
            <span className="price-free">FREE</span>
          </div>

          <p className="price-note">No credit card required · No subscription · Yours to keep forever</p>

          <div className="download-features">
            {FEATURES.map((feature) => (
              <div key={feature} className="download-feature">
                <span className="check-icon">
                  <IconCheck size={12} stroke={3} />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
            id="downloadBtn"
            onClick={handleDownload}
          >
            <span className="win-icon">
              <IconBrandWindows size={22} stroke={1.5} />
            </span>
            Download for Windows
          </a>

          <p className="download-requirements">
            Requires Windows 10 or later · 64-bit · ~145 MB download
          </p>

          <div style={{ marginTop: '16px', position: 'relative', zIndex: 1 }}>
            <Link to="/install" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-accent-purple-light)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}>
              Installation Guide
              <IconArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
