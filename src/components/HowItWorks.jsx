import { IconRocket } from '@tabler/icons-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  {
    number: 1,
    title: 'Select Folders',
    description: 'Point the app at the folders containing your photos. It supports all major image formats.',
    delay: 'reveal-delay-1',
  },
  {
    number: 2,
    title: 'AI Analyzes',
    description: 'The built-in AI engine scores every image from 0 to 100 based on quality metrics.',
    delay: 'reveal-delay-2',
  },
  {
    number: 3,
    title: 'Review & Rate',
    description: 'Browse results, accept the best, reject the rest, and add your own star ratings.',
    delay: 'reveal-delay-3',
  },
  {
    number: 4,
    title: 'Clean Up',
    description: 'Remove rejected images to the Recycle Bin with one click. Your library is now pristine.',
    delay: 'reveal-delay-4',
  },
];

function StepCard({ number, title, description, delay }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`step-card reveal ${delay}`}>
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
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
