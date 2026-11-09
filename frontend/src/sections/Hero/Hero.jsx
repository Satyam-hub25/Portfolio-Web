import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import {
  IconBriefcase,
  IconCode,
  IconGitHub,
  IconLinkedIn,
  IconLeetCode,
  IconInstagram,
} from '../../components/Icons/CustomIcons';
import './Hero.css';

export const Hero = () => {
  const typedRole = useTypingEffect([
    'MERN Stack Developer',
    'Full Stack Engineer',
    'React & Node.js Architect',
  ]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting */}
      <div className="hero-ambient-glow" />
      <div className="hero-pattern-grid" />

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-greeting-wrapper">
            <span className="hero-greeting">Hello,</span>
          </div>

          <h1 className="hero-name-heading">
            I'm <span className="highlight-name">{personalInfo.name}</span>
          </h1>

          <div className="hero-dynamic-role-wrapper">
            <h2 className="hero-role-heading">
              {typedRole}
              <span className="typewriter-cursor">|</span>
            </h2>
          </div>

          <p className="hero-description">
            I am a skilled and passionate MERN Stack developer with experience in creating
            visually appealing, high-performance, and user-friendly web applications.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn-pill-white hero-primary-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              <IconBriefcase size={18} color="#121212" />
              <span>Hire Me</span>
            </a>

            <a
              href="#projects"
              className="btn-pill-outline hero-secondary-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              <IconCode size={18} color="currentColor" />
              <span>View Projects</span>
            </a>
          </div>

          {/* Social Media Link Icons */}
          <div className="hero-socials-wrapper">
            <span className="hero-socials-label">Connect:</span>
            <div className="hero-socials-list">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn github"
                aria-label="GitHub Profile"
              >
                <IconGitHub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn linkedin"
                aria-label="LinkedIn Profile"
              >
                <IconLinkedIn size={18} />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn leetcode"
                aria-label="LeetCode Profile"
              >
                <IconLeetCode size={18} />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn instagram"
                aria-label="Instagram Profile"
              >
                <IconInstagram size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: User's Actual Personal Profile Photo */}
        <div className="hero-visual">
          <div className="hero-profile-frame">
            {/* Ambient gold glow backdrop to harmonize with website theme */}
            <div className="profile-ambient-glow" />

            <div className="profile-img-container">
              <img
                src={personalInfo.avatar || '/images/satyam_hero.jpg'}
                alt={`${personalInfo.name} - ${personalInfo.role}`}
                className="profile-personal-img"
                loading="eager"
              />
              <div className="profile-overlay-gradient" />
            </div>

            {/* Status badge */}
            <div className="profile-status-badge">
              <span className="status-indicator-dot" />
              <span className="status-badge-text">Available for Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
