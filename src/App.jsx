import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import InstallGuide from './pages/InstallGuide';

export default function App() {
  return (
    <>
      {/* Animated Background (Shared across pages) */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Page Routing */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/install" element={<InstallGuide />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
