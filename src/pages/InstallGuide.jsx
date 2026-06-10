import { useEffect } from 'react';
import { IconDownload, IconShieldCheck, IconPlayerPlay, IconArrowRight } from '@tabler/icons-react';
import useSEO from '../hooks/useSEO';

const steps = [
  {
    number: '01',
    icon: <IconDownload size={22} />,
    accentColor: 'rgba(139, 92, 246, 0.15)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
    textColor: 'var(--color-accent-purple-light)',
    title: 'Download the Installer',
    content: (
      <>
        <ul style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '20px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '8px' }}>Go to the homepage.</li>
          <li style={{ marginBottom: '8px' }}>Click the <strong style={{ color: 'var(--color-text-primary)' }}>Download for Windows</strong> button.</li>
          <li>
            Wait for the{' '}
            <code style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '0.85em',
              color: 'var(--color-accent-purple-light)',
              fontFamily: 'var(--font-mono)',
              wordBreak: 'break-all',
              overflowWrap: 'anywhere'
            }}>
              Cullexa.Picture.Organizer.Setup.1.0.1.exe
            </code>{' '}
            file to download.
          </li>
        </ul>
      </>
    )
  },
  {
    number: '02',
    icon: <IconShieldCheck size={22} />,
    accentColor: 'rgba(59, 130, 246, 0.15)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
    textColor: 'var(--color-accent-blue)',
    title: 'Bypass Windows SmartScreen',
    content: (
      <>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '20px' }}>
          Because we are a new application, Windows Defender SmartScreen might show a blue warning saying <strong style={{ color: 'var(--color-text-primary)' }}>"Windows protected your PC"</strong>. This is normal for unsigned new software.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-accent-blue)', marginTop: '2px' }}>1</div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>Click on <strong style={{ color: 'var(--color-text-primary)' }}>More info</strong> on the SmartScreen warning dialog.</p>
              <img
                src="/assets/app run 1.png"
                alt="Windows SmartScreen – click More info"
                style={{ maxWidth: '480px', width: '100%', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '700', color: 'var(--color-accent-blue)', marginTop: '2px' }}>2</div>
            <div style={{ flex: 1 }}>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>Click the <strong style={{ color: 'var(--color-text-primary)' }}>Run anyway</strong> button that appears at the bottom.</p>
              <img
                src="/assets/app run 2.png"
                alt="Windows SmartScreen – click Run anyway"
                style={{ maxWidth: '480px', width: '100%', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
              />
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    number: '03',
    icon: <IconPlayerPlay size={22} />,
    accentColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    textColor: 'var(--color-accent-green)',
    title: 'Run the Setup & Launch',
    content: (
      <>
        <ul style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', paddingLeft: '20px', listStyleType: 'disc', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Follow the standard setup wizard to choose your installation directory.</li>
          <li style={{ marginBottom: '8px' }}>Once finished, launch <strong style={{ color: 'var(--color-text-primary)' }}>Cullexa Picture Manager</strong> from your Start menu or Desktop shortcut.</li>
          <li>Start culling your photos!</li>
        </ul>
        <img
          src="/assets/app run 3.png"
          alt="Cullexa Picture Manager running"
          style={{ maxWidth: '100%', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
        />
      </>
    )
  }
];

export default function InstallGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'Installation Guide - Cullexa Picture Manager',
    description: 'Learn how to install Cullexa Picture Manager on your Windows PC and bypass Windows Defender SmartScreen warnings.',
    url: 'https://cullexa.web.app/install'
  });

  return (
    <section style={{ paddingTop: '120px', paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '72px', padding: '0 24px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 16px',
          background: 'var(--color-bg-glass)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.8rem',
          fontWeight: '600',
          color: 'var(--color-accent-purple-light)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '20px'
        }}>
          Getting Started
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
          marginBottom: '16px'
        }}>
          Installation Guide
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          Follow these three simple steps to get Cullexa Picture Manager up and running on your Windows PC.
        </p>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {steps.map((step, index) => (
          <div key={step.number} style={{ display: 'flex', gap: '0', position: 'relative' }}>

            {/* Left timeline column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '24px', flexShrink: 0 }}>
              {/* Step number + icon badge */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: step.accentColor,
                border: `2px solid ${step.borderColor}`,
                color: step.textColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative',
                zIndex: 1
              }}>
                {step.icon}
              </div>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div style={{
                  width: '2px',
                  flex: 1,
                  minHeight: '32px',
                  background: 'linear-gradient(to bottom, var(--color-border-subtle), transparent)',
                  marginTop: '8px',
                  marginBottom: '8px'
                }} />
              )}
            </div>

            {/* Card content */}
            <div style={{
              flex: 1,
              background: 'var(--color-bg-card)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 32px',
              marginBottom: index < steps.length - 1 ? '24px' : '0',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: step.textColor, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{step.number}</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-text-primary)', margin: 0 }}>{step.title}</h2>
              </div>
              {step.content}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '64px', padding: '0 24px' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
          Ready to get started?
        </p>
        <a href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          background: 'var(--gradient-cta)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.95rem',
          fontWeight: '600',
          color: 'white',
          textDecoration: 'none',
          boxShadow: 'var(--shadow-cta)',
          transition: 'var(--transition-base)'
        }}>
          Download Cullexa for Free
          <IconArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
