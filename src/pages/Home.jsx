import Hero from '../components/Hero';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import HowItWorks from '../components/HowItWorks';
import Download from '../components/Download';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Cullexa Picture Manager — AI-Powered Photo Culling for Windows',
    description: 'Cull thousands of photos in minutes with AI-powered quality analysis. Rate, compare, and clean up your photo library effortlessly. Free for a limited time.',
    url: 'https://cullexa.web.app/'
  });
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <Download />
    </>
  );
}
