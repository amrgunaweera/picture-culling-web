import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { IconDownload, IconMenu2, IconX } from '@tabler/icons-react';

const DOWNLOAD_URL = 'https://github.com/amrgunaweera/picture-culling/releases/download/v1.0.1/Cullexa.Picture.Organizer.Setup.1.0.1.exe';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#views', label: 'App Views' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#download', label: 'Download' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = useCallback((e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      setMobileOpen(false);
      document.body.style.overflow = '';
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname, navigate]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link
          to="/"
          className="nav-logo"
          aria-label="Cullexa Picture Manager Home"
          onClick={(e) => {
            if (location.pathname === '/') handleSmoothScroll(e, '#hero');
          }}
        >
          <img src="/assets/logo.png" alt="Cullexa Picture Manager Logo" className="nav-logo-img" />
          Cullexa Picture Manager
        </Link>

        <ul className={`nav-links${mobileOpen ? ' open' : ''}`} id="navLinks">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleSmoothScroll(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#download" className="nav-cta" onClick={(e) => handleSmoothScroll(e, '#download')}>
            <IconDownload size={18} stroke={2} />
            Get Free
          </a>
        </div>

        <button
          className={`mobile-toggle${mobileOpen ? ' open' : ''}`}
          id="mobileToggle"
          aria-label="Toggle navigation"
          onClick={toggleMobile}
        >
          {mobileOpen ? (
            <IconX size={28} stroke={2} />
          ) : (
            <IconMenu2 size={28} stroke={2} />
          )}
        </button>
      </div>
    </nav>
  );
}
