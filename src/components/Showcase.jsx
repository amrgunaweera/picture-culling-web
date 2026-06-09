import { useState, useRef, useCallback } from 'react';
import {
  IconDeviceDesktopAnalytics,
  IconLayoutGrid,
  IconPhoto,
  IconGitCompare,
} from '@tabler/icons-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TABS = [
  {
    id: 'grid',
    label: 'Grid View',
    icon: IconLayoutGrid,
    image: '/assets/app-grid-view.jpg',
    alt: 'Grid View — browse all photos with AI scores at a glance',
    caption: 'Grid View',
    desc: 'See all your photos at once with AI scores overlaid on every thumbnail.',
    badge: 'Most Popular',
  },
  {
    id: 'slider',
    label: 'Slider View',
    icon: IconPhoto,
    image: '/assets/app-slide-view.jpg',
    alt: 'Slider View — full-size preview with AI analysis panel',
    caption: 'Slider View',
    desc: 'Full-size preview with detailed AI analysis, star rating, and accept/reject controls.',
    badge: 'Detail Focused',
  },
  {
    id: 'compare',
    label: 'Compare Mode',
    icon: IconGitCompare,
    image: '/assets/app-compare-mode.jpg',
    alt: 'Compare Mode — side-by-side comparison of two photos',
    caption: 'Compare Mode',
    desc: 'Place two images side by side to pick the best shot from similar compositions.',
    badge: 'Pro Feature',
  },
];

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null);
  const [direction, setDirection] = useState('next');
  const headerRef = useScrollReveal();
  const tabsRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const panelRefs = useRef([]);

  const handleTabClick = useCallback(
    (index) => {
      if (index === activeIndex) return;

      const dir = index > activeIndex ? 'next' : 'prev';
      setDirection(dir);
      setExitingIndex(activeIndex);
      setActiveIndex(index);

      // Clean up exiting panel after animation
      setTimeout(() => {
        setExitingIndex(null);
      }, 400);
    },
    [activeIndex]
  );

  return (
    <section className="showcase" id="views">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">
            <IconDeviceDesktopAnalytics size={16} stroke={2} />
            App Views
          </div>
          <h2 className="section-title">
            Three Ways to<br />
            <span className="gradient-text">Browse Your Photos</span>
          </h2>
          <p className="section-desc">
            Switch between views to match your workflow. Whether you're scanning hundreds of
            thumbnails or pixel-peeping a single frame.
          </p>
        </div>

        <div className="showcase-tabs reveal" ref={tabsRef}>
          {TABS.map((tab, index) => (
            <button
              key={tab.id}
              className={`showcase-tab${index === activeIndex ? ' active' : ''}`}
              data-tab={tab.id}
              id={`tab${tab.id.charAt(0).toUpperCase() + tab.id.slice(1)}`}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => {
                let newIndex;
                if (e.key === 'ArrowRight') {
                  newIndex = (index + 1) % TABS.length;
                } else if (e.key === 'ArrowLeft') {
                  newIndex = (index - 1 + TABS.length) % TABS.length;
                }
                if (newIndex !== undefined) {
                  e.preventDefault();
                  handleTabClick(newIndex);
                }
              }}
            >
              <tab.icon size={18} stroke={2} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="showcase-content reveal" ref={contentRef}>
          {TABS.map((tab, index) => {
            const isActive = index === activeIndex;
            const isExiting = index === exitingIndex;

            let classNames = 'showcase-panel';
            if (isActive) {
              classNames += ' active';
            } else if (isExiting) {
              classNames += ' exiting';
              classNames += direction === 'next' ? ' slide-prev' : ' slide-next';
            }

            // Only set slide direction for newly entering panel
            if (isActive && exitingIndex !== null) {
              classNames += direction === 'next' ? ' slide-next' : ' slide-prev';
              // Remove slide class after a frame to trigger transition
            }

            return (
              <div
                key={tab.id}
                className={classNames}
                id={`panel-${tab.id}`}
                ref={(el) => (panelRefs.current[index] = el)}
                style={{
                  display: isActive || isExiting ? 'block' : 'none',
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateX(0)'
                    : isExiting
                    ? direction === 'next'
                      ? 'translateX(-50px)'
                      : 'translateX(50px)'
                    : undefined,
                }}
              >
                <div className="showcase-image">
                  <img src={tab.image} alt={tab.alt} loading="lazy" />
                  <div className="showcase-caption">
                    <div>
                      <h4>{tab.caption}</h4>
                      <p>{tab.desc}</p>
                    </div>
                    <span className="caption-badge">{tab.badge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
