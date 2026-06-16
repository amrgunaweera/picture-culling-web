import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../lib/firebase';
import useSEO from '../hooks/useSEO';
import { 
  IconUser, 
  IconMail, 
  IconMessage2, 
  IconSend, 
  IconCheck, 
  IconAlertCircle, 
  IconArrowLeft 
} from '@tabler/icons-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useSEO({
    title: 'Contact Us - Cullexa Picture Manager',
    description: 'Have questions, feedback, or support requests for Cullexa Picture Manager? Get in touch with our team.',
    url: 'https://cullexa.web.app/contact'
  });

  const validate = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    try {
      // Log submission analytics
      if (analytics) {
        logEvent(analytics, 'contact_form_submit', {
          contact_name: name,
          contact_email: email
        });
      }
    } catch (err) {
      console.warn('Analytics event logging failed:', err);
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/boldstamina@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: description,
          _subject: "Cullexa Feedback"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setErrors(prev => ({
          ...prev,
          submit: data.message || "Failed to send message. Please try again."
        }));
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setErrors(prev => ({
        ...prev,
        submit: "Network error. Please check your internet connection."
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setDescription('');
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section className="contact-section" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 16px' }}>
          <div className="section-tag">
            Support & Feedback
          </div>
          <h1 className="section-title" style={{ margin: '12px 0' }}>
            Get in Touch
          </h1>
          <p className="section-desc" style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
            Have questions about Cullexa Picture Manager? Submit your query below and our team will get back to you.
          </p>
        </div>

        {/* Card containing Form or Success message */}
        <div className="contact-card">
          {isSuccess ? (
            <div className="success-container">
              <div className="success-icon-wrapper">
                <IconCheck size={40} stroke={3} />
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                Message Sent!
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', fontSize: '0.98rem', lineHeight: '1.6', maxWidth: '380px' }}>
                Thank you for contacting us, <strong>{name}</strong>. We have received your request and will respond to <strong>{email}</strong> as soon as possible.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', width: '100%', flexDirection: 'column' }}>
                <Link 
                  to="/" 
                  id="contactSuccessBack"
                  className="btn-primary" 
                  style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '14px', textDecoration: 'none' }}
                >
                  <IconArrowLeft size={18} />
                  Back to Home
                </Link>
                <button 
                  type="button" 
                  id="contactSuccessReset"
                  onClick={handleReset}
                  className="btn-secondary" 
                  style={{ display: 'flex', width: '100%', justifyContent: 'center', padding: '14px' }}
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              
              {/* Name field */}
              <div className="contact-form-group">
                <label htmlFor="contactName" className="contact-label">
                  Your Name
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>
                    <IconUser size={18} />
                  </span>
                  <input
                    type="text"
                    id="contactName"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: null }));
                      if (errors.submit) setErrors(prev => ({ ...prev, submit: null }));
                    }}
                    placeholder="John Doe"
                    className="contact-input"
                    style={{ paddingLeft: '48px' }}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <span className="contact-error" id="nameError">
                    <IconAlertCircle size={14} />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="contact-form-group">
                <label htmlFor="contactEmail" className="contact-label">
                  Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>
                    <IconMail size={18} />
                  </span>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: null }));
                      if (errors.submit) setErrors(prev => ({ ...prev, submit: null }));
                    }}
                    placeholder="you@example.com"
                    className="contact-input"
                    style={{ paddingLeft: '48px' }}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <span className="contact-error" id="emailError">
                    <IconAlertCircle size={14} />
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Description field */}
              <div className="contact-form-group">
                <label htmlFor="contactDescription" className="contact-label">
                  How can we help?
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '16px', top: '16px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center' }}>
                    <IconMessage2 size={18} />
                  </span>
                  <textarea
                    id="contactDescription"
                    name="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description) setErrors(prev => ({ ...prev, description: null }));
                      if (errors.submit) setErrors(prev => ({ ...prev, submit: null }));
                    }}
                    placeholder="Describe your question, request, or feedback..."
                    className="contact-textarea"
                    style={{ paddingLeft: '48px' }}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.description && (
                  <span className="contact-error" id="descriptionError">
                    <IconAlertCircle size={14} />
                    {errors.description}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contactSubmit"
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" aria-hidden="true" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <IconSend size={18} />
                    Send Message
                  </>
                )}
              </button>

              {errors.submit && (
                <div className="contact-error" id="submitError" style={{ justifyContent: 'center', marginTop: '16px' }}>
                  <IconAlertCircle size={14} />
                  {errors.submit}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
