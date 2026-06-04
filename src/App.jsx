import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import HowItWorks from './components/HowItWorks';
import Download from './components/Download';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Animated Background */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <Download />
      <Footer />
    </>
  );
}
