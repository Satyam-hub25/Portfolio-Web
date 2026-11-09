import React, { useState } from 'react';
// EmailJS official browser SDK import kar rahe hain taaki bina kisi backend ke directly email send ho sake
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';
import {
  IconCheck,
  IconAlert,
  IconSpinner,
  IconGitHub,
  IconLinkedIn,
  IconLeetCode,
  IconInstagram,
} from '../../components/Icons/CustomIcons';
import './Contact.css';

export const Contact = () => {
  // 1. Form state: User ka entered data (Full Name, Email Address, Subject, Message) store karne ke liye
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // 2. Status state: Loading spinner, success alert, aur error alert manage karne ke liye
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    message: '',
  });

  // 3. Field level validation errors hold karne ke liye
  const [fieldErrors, setFieldErrors] = useState({});

  /**
   * Validation function:
   * Form submit hone se pehle check karta hai ki:
   * - Full Name empty na ho (at least 2 characters)
   * - Email valid format me ho (standard RFC email regex)
   * - Subject empty na ho (at least 3 characters)
   * - Message empty na ho (at least 5 characters)
   */
  const validateForm = () => {
    const errors = {};

    // 1. Full Name validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (at least 2 characters).';
    }

    // 2. Email Address format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    // 3. Subject validation
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errors.subject = 'Please enter a subject (at least 3 characters).';
    }

    // 4. Message validation
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = 'Please enter your message (at least 5 characters).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  /**
   * Input change handler:
   * User jab input field me type karta hai toh state update hoti hai
   * aur us field ka error message turant clear ho jata hai
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  /**
   * Submit handler:
   * EmailJS ke through email trigger karta hai
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Pehle required fields aur email format validate karein
    if (!validateForm()) return;

    // Accidental multiple clicks prevent karne ke liye loading state activate karein
    setStatus({
      loading: true,
      success: false,
      error: null,
      message: '',
    });

    // Vite environment variables se EmailJS keys read karein (.env file se)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Agar environment variables missing hain toh clear developer guidance show karein
    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        loading: false,
        success: false,
        error:
          'EmailJS credentials missing! Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your frontend/.env file.',
        message: '',
      });
      return;
    }

    /**
     * EmailJS Template Parameters:
     * Exact 4 parameters jo aapke EmailJS dashboard template se match karte hain:
     * - {{from_name}}: Visitor ka Full Name
     * - {{from_email}}: Visitor ka Email Address
     * - {{subject}}: Message ka Subject
     * - {{message}}: Visitor ka Message
     */
    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    try {
      // EmailJS browser SDK ke official send() method se message send ho raha hai
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        // Successful delivery par professional success message display karein
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.',
        });

        // Form fields ko ONLY successful sending ke baad hi reset/clear karein
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(`EmailJS returned status code: ${response.status}`);
      }
    } catch (err) {
      console.error('EmailJS Send Error:', err);

      // Agar sending fail ho jaye toh detailed user-friendly error show karein (fields clear nahi hongi)
      const errorMessage =
        err?.text ||
        err?.message ||
        'Failed to deliver message. Please check your network connection or verify your EmailJS keys.';

      setStatus({
        loading: false,
        success: false,
        error: errorMessage,
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        {/* Section Header matching Reference Image 4 */}
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Please fill out the form below to discuss any work opportunities.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Input: Full Name */}
            <div className="form-field-group">
              <label htmlFor="contact-name" className="sr-only">
                Full Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`contact-input ${fieldErrors.name ? 'error' : ''}`}
                disabled={status.loading}
                required
              />
              {fieldErrors.name && <span className="field-error-msg">{fieldErrors.name}</span>}
            </div>

            {/* Input: Email Address */}
            <div className="form-field-group">
              <label htmlFor="contact-email" className="sr-only">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`contact-input ${fieldErrors.email ? 'error' : ''}`}
                disabled={status.loading}
                required
              />
              {fieldErrors.email && <span className="field-error-msg">{fieldErrors.email}</span>}
            </div>

            {/* Input: Subject */}
            <div className="form-field-group">
              <label htmlFor="contact-subject" className="sr-only">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`contact-input ${fieldErrors.subject ? 'error' : ''}`}
                disabled={status.loading}
                required
              />
              {fieldErrors.subject && (
                <span className="field-error-msg">{fieldErrors.subject}</span>
              )}
            </div>

            {/* Input: Message */}
            <div className="form-field-group">
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className={`contact-input contact-textarea ${fieldErrors.message ? 'error' : ''}`}
                disabled={status.loading}
                required
              />
              {fieldErrors.message && (
                <span className="field-error-msg">{fieldErrors.message}</span>
              )}
            </div>

            {/* Feedback: Success Alert Banner */}
            {status.success && (
              <div className="form-alert-banner success" role="alert">
                <IconCheck size={20} color="var(--color-success)" />
                <div className="banner-text">
                  <strong>Success!</strong> {status.message}
                </div>
              </div>
            )}

            {/* Feedback: Error Alert Banner */}
            {status.error && (
              <div className="form-alert-banner error" role="alert">
                <IconAlert size={20} color="var(--color-error)" />
                <div className="banner-text">
                  <strong>Sending Failed:</strong> {status.error}
                </div>
              </div>
            )}

            {/* Submit Button (White pill button matching Reference Image 4) */}
            <div className="form-submit-wrapper">
              <button
                type="submit"
                className="btn-pill-white contact-submit-btn"
                disabled={status.loading}
              >
                {status.loading ? (
                  <>
                    <IconSpinner size={18} color="#121212" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Circular Links */}
        <div className="contact-social-footer">
          <div className="contact-social-row">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn github"
              aria-label="GitHub Profile"
            >
              <IconGitHub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn linkedin"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedIn size={20} />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn leetcode"
              aria-label="LeetCode Profile"
            >
              <IconLeetCode size={20} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn instagram"
              aria-label="Instagram Profile"
            >
              <IconInstagram size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
