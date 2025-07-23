import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { analytics, logEvent } from '../firebase';

const SERVICE_ID = 'service_tv33ph3';
const TEMPLATE_ID = 'template_w64uc4s';
const USER_ID = '8zZiGKytUjcIiqBXn';

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      emailjs.init(USER_ID);
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      );
      setSent(true);
      setSending(false);
      logEvent(analytics, 'contact_form_submit_success');
      formRef.current.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      setSending(false);
      setError('Error - Try Again');
      logEvent(analytics, 'contact_form_submit_error', { error: err.message });
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Let's work together</span>
      <div className="contact__container container">
        {/* Contact info cards - now on top */}
        <div className="contact__info-container">
          <div className="contact__card email-card">
            <a href="mailto:contact@adamciszek.ca?subject=Let's%20Work%20Together" className="contact__card-link">
              <i className="uil uil-envelope contact__icon"></i>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">contact@adamciszek.ca</span>
            </a>
          </div>
          <div className="contact__card">
            <i className="uil uil-map-marker contact__icon"></i>
            <h3 className="contact__title">Location</h3>
            <span className="contact__subtitle">Toronto, Canada</span>
          </div>
        </div>
        {/* Contact form - now below the cards */}
        <div className="contact__form-container">
          <form id="contact-form" className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <input type="text" name="from_name" className="contact__input" placeholder=" " required />
              <label className="contact__label">Full Name</label>
              <div className="contact__line"></div>
            </div>
            <div className="contact__form-group">
              <input type="email" name="from_email" className="contact__input" placeholder=" " required />
              <label className="contact__label">Email Address</label>
              <div className="contact__line"></div>
            </div>
            <div className="contact__form-group contact__form-area">
              <textarea name="message" className="contact__input" placeholder=" " required rows="5"></textarea>
              <label className="contact__label">Your Message</label>
              <div className="contact__line"></div>
            </div>
            <button
              type="submit"
              id="send-button"
              className={`contact__button button--flex${sending ? ' sending' : ''}${sent ? ' sent' : ''}`}
              disabled={sending}
            >
              <span className="button-text">{error ? error : sent ? 'Sent!' : 'Send Message'}</span>
              <span className="button__loader">
                <span className="button__loader-spinner"></span>
              </span>
              <svg className="button__checkmark" width="24" height="24" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 