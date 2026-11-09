import React from 'react';
import {
  IconTrophy,
  IconCode,
  IconServer,
  IconGraduation,
  IconDatabase,
  IconCheck,
} from '../../components/Icons/CustomIcons';
import './About.css';

export const About = () => {
  const technicalToolkit = [
    'Java',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'HTML5',
    'CSS3',
  ];

  const highlights = [
    {
      id: 'hackathon',
      badge: 'Collaboration',
      title: 'Hackathons & Projects',
      description:
        'Actively participating in collaborative coding sprints to solve real-world challenges and build practical solutions.',
      icon: <IconTrophy size={22} color="#f5b72e" />,
      accent: '#f5b72e',
    },
    {
      id: 'fullstack',
      badge: 'Core Expertise',
      title: 'Full-Stack MERN Development',
      description:
        'Designing responsive frontend interfaces connected with scalable Node.js/Express APIs and MongoDB schemas.',
      icon: <IconServer size={22} color="#60a5fa" />,
      accent: '#60a5fa',
    },
    {
      id: 'dsa',
      badge: 'Problem Solving',
      title: 'DSA & System Design',
      description:
        'Strengthening algorithmic thinking in Java and JavaScript to write clean, optimized, production-ready code.',
      icon: <IconCode size={22} color="#34d399" />,
      accent: '#34d399',
    },
    {
      id: 'academic',
      badge: 'Academic Foundation',
      title: 'Computer Science Engineering',
      description:
        'Pursuing CSE with strong foundations in Data Structures, Database Systems, Computer Networks, and Web Architectures.',
      icon: <IconGraduation size={22} color="#f472b6" />,
      accent: '#f472b6',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A glimpse into my journey as a Computer Science Engineering student and aspiring MERN Stack Developer.
          </p>
        </div>

        {/* 2-Column About Grid: Left Narrative + Right Highlights */}
        <div className="about-main-grid">
          {/* Left Column: Full Story & Narrative */}
          <div className="about-narrative-card">
            <div className="narrative-greeting-badge">
              <span className="greeting-dot" />
              <span>Satyam Tiwari • MERN Stack Developer</span>
            </div>

            <div className="about-paragraphs">
              <p className="about-p lead-p">
                Hey! I'm <strong>Satyam Tiwari</strong>, a Computer Science Engineering student and
                aspiring <span className="highlight-text-accent">MERN Stack Developer</span> who loves
                turning ideas into practical, impactful digital experiences.
              </p>

              <p className="about-p">
                I'm passionate about building full-stack web applications, exploring new technologies,
                and understanding how things work behind the code. My technical toolkit includes{' '}
                <strong className="toolkit-strong">
                  Java, JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, HTML, and CSS
                </strong>
                . I enjoy working across the stack — from designing intuitive user interfaces to
                developing backend APIs and managing databases.
              </p>

              <p className="about-p">
                Beyond coding, I actively participate in hackathons and collaborative projects
                where I get to solve real-world problems, experiment with ideas, and learn by
                building.
              </p>

              <p className="about-p quote-p">
                <em>
                  "I believe that great developers aren't just those who write code, but those who
                  understand problems, think critically, and build solutions that make a difference."
                </em>
              </p>

              <p className="about-p">
                Currently, I'm strengthening my skills in{' '}
                <strong className="toolkit-strong">
                  Data Structures &amp; Algorithms, System Design, and Full-Stack Development
                </strong>
                , while continuously building projects that challenge me to grow as an engineer.
              </p>
            </div>

            {/* Satyam's Core Goal Callout Banner */}
            <div className="about-goal-banner">
              <div className="goal-banner-header">
                <span className="goal-badge">My Goal</span>
                <span className="goal-subtitle">Simple &amp; Impact-Driven</span>
              </div>
              <p className="goal-quote">
                "Keep learning, keep building, and create technology that makes a meaningful impact."
              </p>
            </div>

            {/* Quick Toolkit Badges */}
            <div className="about-toolkit-container">
              <span className="toolkit-label">Technical Toolkit:</span>
              <div className="toolkit-pills">
                {technicalToolkit.map((tech) => (
                  <span key={tech} className="toolkit-pill-item">
                    <IconCheck size={13} color="#f5b72e" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Floating Achievement Card */}
          <div className="about-highlights-col">
            {/* 4 Feature Cards */}
            <div className="about-cards-grid">
              {highlights.map((item) => (
                <div
                  key={item.id}
                  className="about-highlight-card"
                  style={{ '--card-accent': item.accent }}
                >
                  <div className="highlight-card-header">
                    <div className="highlight-icon-wrap" style={{ borderColor: `${item.accent}33` }}>
                      {item.icon}
                    </div>
                    <span className="highlight-badge">{item.badge}</span>
                  </div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Floating Achievement Badge / Status Pill (Visual Reference inspired) */}
            <div className="about-floating-status-card">
              <div className="status-avatar-pulse">
                <span className="pulse-circle" />
                <span className="status-emoji">🚀</span>
              </div>
              <div className="status-content">
                <div className="status-user-title">
                  <span className="status-name">Satyam Tiwari</span>
                  <span className="status-tag">Ready to Collaborate</span>
                </div>
                <p className="status-quote">
                  "Ready to build high-performance MERN stack apps &amp; solve engineering problems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
