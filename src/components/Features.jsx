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
      </div>
    </section>
  );
}
