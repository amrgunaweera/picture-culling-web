import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="privacy-policy" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title" style={{ marginBottom: '40px' }}>Privacy Policy</h1>
        
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '24px' }}>
            Last updated: June 5, 2026
          </p>

          <h2 style={{ color: 'var(--color-text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>1. Introduction</h2>
          <p style={{ marginBottom: '24px' }}>
            Welcome to Cullexa Picture Manager. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application.
          </p>

          <h2 style={{ color: 'var(--color-text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>2. Data Collection & Telemetry</h2>
          <p style={{ marginBottom: '24px' }}>
            <strong>We do not collect any personal data or photos from your device.</strong><br/>
            Cullexa Picture Manager processes all image analysis and sorting locally on your machine. We do not upload, scan, or transmit your photos to any external servers. 
            We strongly believe in "No Ads, No Telemetry."
          </p>

          <h2 style={{ color: 'var(--color-text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>3. Website Analytics</h2>
          <p style={{ marginBottom: '24px' }}>
            Our website uses basic Firebase Analytics solely to count download clicks and monitor aggregate website traffic. 
            This data is entirely anonymous and cannot be used to identify you personally.
          </p>

          <h2 style={{ color: 'var(--color-text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>4. Changes to This Policy</h2>
          <p style={{ marginBottom: '24px' }}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 style={{ color: 'var(--color-text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '1.5rem' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '24px' }}>
            If you have any questions about this Privacy Policy, you can contact us through our official support channels or via our GitHub repository.
          </p>
        </div>
      </div>
    </section>
  );
}
