import { useCallback } from 'react';
import {
  IconSparkles,
  IconRobot,
  IconFolder,
  IconCircleCheck,
  IconStar,
  IconColumns,
  IconTrash,
} from '@tabler/icons-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FEATURES = [
  {
    icon: IconRobot,
    color: 'purple',
    title: 'AI Quality Scoring',
    description:
      'Every image gets an intelligent quality score from 0–100 based on sharpness, exposure, composition, and more. No manual inspection needed.',
    delay: 'reveal-delay-1',
  },
  {
    icon: IconFolder,
    color: 'blue',
    title: 'Folder Selection',
    description:
      'Simply point Cullexa Picture Manager at any folder on your PC. It scans and analyzes all images recursively — drag-and-drop simple.',
    delay: 'reveal-delay-2',
  },
  {
    icon: IconCircleCheck,
    color: 'green',
    title: 'Accept & Reject',
    description:
      'Quickly accept keepers and reject the rest. Rejected images can be sent straight to the Recycle Bin with a single click — safely and reversibly.',
    delay: 'reveal-delay-3',
  },
  {
    icon: IconStar,
    color: 'amber',
    title: 'Star Ratings',
    description:
      'Give your favourite shots 1–5 star ratings for personal ranking. Combine AI scores with your creative eye for perfect curation.',
    delay: 'reveal-delay-4',
  },
  {
    icon: IconColumns,
    color: 'cyan',
    title: 'Compare Mode',
    description:
      'Place two images side by side and compare every detail. Perfect for choosing the best shot from a burst or similar compositions.',
    delay: 'reveal-delay-5',
  },
  {
    icon: IconTrash,
    color: 'red',
    title: 'Safe Cleanup',
    description:
      'Remove rejected photos directly to the Recycle Bin from within the app. Recover any accidental deletions with confidence.',
    delay: 'reveal-delay-5',
  },
];

function FeatureCard({ icon: Icon, color, title, description, delay }) {
  const ref = useScrollReveal();

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', x + '%');
    card.style.setProperty('--mouse-y', y + '%');
  }, []);

  return (
    <div
      ref={ref}
      className={`feature-card reveal ${delay}`}
      onMouseMove={handleMouseMove}
    >
      <div className={`feature-icon ${color}`}>
        <Icon size={24} stroke={1.5} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Features() {
  const headerRef = useScrollReveal();

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">
            <IconSparkles size={16} stroke={2} />
            Features
          </div>
          <h2 className="section-title">
            Everything You Need to<br />
            <span className="gradient-text">Master Your Photo Library</span>
          </h2>
          <p className="section-desc">
            Powered by intelligent image analysis, Cullexa Picture Manager gives you the tools to make fast,
            confident decisions about every photo.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* AI Analysis Highlight */}
        <div className="reveal ai-highlight-banner" ref={useScrollReveal()} style={{
          marginTop: '48px',
          background: 'var(--gradient-card)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
        }}>
          <div className="ai-text-col" style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.75rem',
              fontWeight: '700',
              color: 'var(--color-accent-purple-light)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              width: 'fit-content'
            }}>
              <IconSparkles size={12} stroke={2} />
              Powered by AI
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px', lineHeight: '1.2' }}>
              Intelligent Image Analysis
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              Our AI engine evaluates every photograph across multiple quality dimensions — sharpness, exposure, composition, 
              noise, and more — to give you an instant, objective quality score from 0 to 100.
            </p>
          </div>
          <div className="ai-image-col" style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="/assets/AI analysis.jpg"
              alt="AI analysis panel showing quality metrics"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, var(--color-bg-primary) 0%, transparent 30%)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
