import { IconRocket, IconFolderSearch, IconBrain, IconStarFilled, IconTrash } from '@tabler/icons-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  {
    number: '01',
    icon: IconFolderSearch,
    title: 'Select Folders',
    description: 'Point the app at the folders containing your photos. It supports all major image formats.',
    delay: 'reveal-delay-1',
    color: 'var(--color-accent-purple-light)',
    bg: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.2)',
  },
  {
    number: '02',
    icon: IconBrain,
    title: 'AI Analyzes',
    description: 'The built-in AI engine scores every image from 0 to 100 based on quality metrics.',
    delay: 'reveal-delay-2',
    color: 'var(--color-accent-blue)',
    bg: 'rgba(59, 130, 246, 0.1)',
    border: 'rgba(59, 130, 246, 0.2)',
  },
  {
    number: '03',
    icon: IconStarFilled,
    title: 'Review & Rate',
    description: 'Browse results, accept the best, reject the rest, and add your own star ratings.',
    delay: 'reveal-delay-3',
    color: 'var(--color-accent-amber)',
    bg: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.2)',
  },
  {
    number: '04',
    icon: IconTrash,
    title: 'Clean Up',
    description: 'Remove rejected images to the Recycle Bin with one click. Your library is now pristine.',
    delay: 'reveal-delay-4',
    color: 'var(--color-accent-green)',
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.2)',
  },
];

function StepCard({ number, icon: Icon, title, description, delay, color, bg, border }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`reveal ${delay}`} style={{ textAlign: 'center', position: 'relative' }}>
      {/* Number badge */}
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: `linear-gradient(${bg}, ${bg}), var(--color-bg-primary)`,
        border: `2px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 20px',
        position: 'relative',
        zIndex: 2,
      }}>
        <Icon size={24} stroke={1.5} style={{ color }} />
      </div>
      {/* Step number label */}
      <div style={{
        fontSize: '0.7rem',
        fontWeight: '800',
        color,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '8px',
        opacity: 0.7
      }}>
        Step {number}
      </div>
      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: '700',
        marginBottom: '8px',
        letterSpacing: '-0.01em'
      }}>{title}</h3>
      <p style={{
        fontSize: '0.88rem',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.6',
        maxWidth: '220px',
        margin: '0 auto'
      }}>{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const headerRef = useScrollReveal();

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">
            <IconRocket size={16} stroke={2} />
            How It Works
          </div>
          <h2 className="section-title">
            From Chaos to Curated<br />
            <span className="gradient-text">in Four Simple Steps</span>
          </h2>
        </div>

        <div className="steps-grid">
          {STEPS.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
