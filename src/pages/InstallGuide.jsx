import { useEffect } from 'react';
import { IconDownload, IconShieldCheck, IconPlayerPlay } from '@tabler/icons-react';

export default function InstallGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="install-guide" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title" style={{ marginBottom: '16px' }}>Installation Guide</h1>
        <p className="section-desc" style={{ textAlign: 'left', margin: '0 0 48px 0', maxWidth: '100%' }}>
          Follow these simple steps to install Cullexa Picture Manager on your Windows PC.
        </p>

        <div className="steps-container" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

          <div className="guide-step-card" style={{ display: 'flex', gap: '20px', textAlign: 'left', padding: '24px', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.12)', color: 'var(--color-accent-purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconDownload size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-primary)' }}>1. Download the Installer</h3>
              <ul style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', paddingLeft: '24px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '8px' }}>Go to the homepage.</li>
                <li style={{ marginBottom: '8px' }}>Click the <strong>Download for Windows</strong> button.</li>
                <li>Wait for the <code>Cullexa.Picture.Organizer.Setup.1.0.0.exe</code> file to download to your computer.</li>
              </ul>
            </div>
          </div>

          <div className="guide-step-card" style={{ display: 'flex', gap: '20px', textAlign: 'left', padding: '24px', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.12)', color: 'var(--color-accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconShieldCheck size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-primary)' }}>2. Bypass Windows SmartScreen</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                Because we are a new application, Windows Defender SmartScreen might show a blue warning saying "Windows protected your PC". This is normal for new software.
              </p>
              <ul style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', paddingLeft: '24px', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '16px' }}>Click on <strong>More info</strong>.</li>
              </ul>
              <img src="/assets/app run 1.png" alt="Windows SmartScreen More Info" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--color-border-subtle)', marginBottom: '16px' }} />
              <ul style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', paddingLeft: '24px', listStyleType: 'disc', marginBottom: '16px' }}>
                <li>Click the <strong>Run anyway</strong> button that appears at the bottom.</li>
              </ul>
              <img src="/assets/app run 2.png" alt="Windows SmartScreen Run Anyway" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }} />
            </div>
          </div>

          <div className="guide-step-card" style={{ display: 'flex', gap: '20px', textAlign: 'left', padding: '24px', background: 'var(--color-bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-subtle)' }}>
            <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--color-accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconPlayerPlay size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--color-text-primary)' }}>3. Run the Setup & Launch</h3>
              <ul style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', paddingLeft: '24px', listStyleType: 'disc', marginBottom: '16px' }}>
                <li style={{ marginBottom: '8px' }}>Follow the standard setup wizard to choose your installation directory.</li>
                <li style={{ marginBottom: '8px' }}>Once finished, launch Cullexa Picture Manager from your Start menu or Desktop shortcut.</li>
                <li>Start culling your photos!</li>
              </ul>
              <img src="/assets/app run 3.png" alt="Cullexa Picture Manager" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid var(--color-border-subtle)' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
