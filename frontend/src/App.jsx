import React, { useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress/ScrollProgress';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { BackToTop } from './components/BackToTop/BackToTop';
import { useScrollSpy } from './hooks/useScrollSpy';
import './styles/global.css';
import './App.css';

export function App() {
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  // Global scroll reveal observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Scroll Progress Bar at the top */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer & Floating Controls */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
