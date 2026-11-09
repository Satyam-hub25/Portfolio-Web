import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { IconChat, IconMenu, IconClose } from '../Icons/CustomIcons';
import './Navbar.css';

export const Navbar = ({ activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Portfolio' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo - S. with developersatyam branding */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="logo-initials">{personalInfo.initials || 'S.'}</span>
          <span className="logo-brand-text">{personalInfo.brandName || 'developersatyam'}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-links-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.label}
                    {isActive && <span className="active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button (Pill Contact Me with chat icon) */}
        <div className="navbar-cta-wrapper">
          <a
            href="#contact"
            className="btn-pill-white nav-contact-btn"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <IconChat size={16} color="#121212" />
            <span>Contact Me</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <IconClose size={26} color="#ffffff" /> : <IconMenu size={26} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="mobile-cta-item">
            <a
              href="#contact"
              className="btn-pill-white"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <IconChat size={16} color="#121212" />
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};
