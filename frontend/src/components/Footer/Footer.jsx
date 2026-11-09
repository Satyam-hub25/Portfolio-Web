import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import {
  IconGitHub,
  IconLinkedIn,
  IconLeetCode,
  IconInstagram,
} from '../Icons/CustomIcons';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="portfolio-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              <span className="footer-logo">{personalInfo.initials || 'S.'}</span>
              <span className="footer-brand-name">{personalInfo.brandName || 'developersatyam'}</span>
            </div>
            <p className="footer-tagline">{personalInfo.role} • Crafting Scalable Web Applications</p>
          </div>

          <nav className="footer-nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Portfolio</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} {personalInfo.brandName || 'developersatyam'}. All rights reserved.
          </p>

          <div className="footer-social-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGitHub size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn size={18} />
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <IconLeetCode size={18} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
