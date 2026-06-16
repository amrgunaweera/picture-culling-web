import { useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { IconCopyright } from '@tabler/icons-react';

const FOOTER_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#download', label: 'Download' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSmoothScroll = useCallback((e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [location.pathname, navigate]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="Cullexa Picture Manager Logo" className="footer-logo-img" />
          Cullexa Picture Manager
        </div>

        <p className="footer-copy">
          <IconCopyright size={14} stroke={2} />
          2026 Cullexa Picture Manager. All rights reserved.
        </p>

        <ul className="footer-links">
          {FOOTER_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleSmoothScroll(e, href)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
