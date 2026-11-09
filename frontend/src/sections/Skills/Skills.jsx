import React, { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import {
  IconJava,
  IconReact,
  IconJS,
  IconHTML5,
  IconCSS3,
  IconReactRouter,
  IconNodeJS,
  IconExpress,
  IconRestAPI,
  IconJWT,
  IconOAuth,
  IconMongoDB,
  IconPostgreSQL,
  IconRedis,
  IconSQL,
  IconGit,
  IconGitHub,
  IconDocker,
  IconGitHubActions,
  IconCode,
} from '../../components/Icons/CustomIcons';
import './Skills.css';

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const renderTechIcon = (iconName) => {
    switch (iconName) {
      case 'java':
        return <IconJava size={26} />;
      case 'react':
        return <IconReact size={26} />;
      case 'javascript':
        return <IconJS size={26} />;
      case 'html5':
        return <IconHTML5 size={26} />;
      case 'css3':
        return <IconCSS3 size={26} />;
      case 'react-router':
        return <IconReactRouter size={26} />;
      case 'nodejs':
        return <IconNodeJS size={26} />;
      case 'express':
        return <IconExpress size={26} />;
      case 'restapi':
        return <IconRestAPI size={26} />;
      case 'jwt':
        return <IconJWT size={26} />;
      case 'oauth':
        return <IconOAuth size={26} />;
      case 'mongodb':
        return <IconMongoDB size={26} />;
      case 'postgresql':
        return <IconPostgreSQL size={26} />;
      case 'redis':
        return <IconRedis size={26} />;
      case 'sql':
        return <IconSQL size={26} />;
      case 'git':
        return <IconGit size={26} />;
      case 'github':
        return <IconGitHub size={26} color="#ffffff" />;
      case 'docker':
        return <IconDocker size={26} />;
      case 'github-actions':
        return <IconGitHubActions size={26} />;
      default:
        return <IconCode size={26} color="var(--color-accent)" />;
    }
  };

  const displayedCategories =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Core technologies and developer tools I use to build scalable web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="skills-filter-nav">
          <button
            className={`skills-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Technologies
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Icon-Based Compact Skills Categories Grid */}
        <div className="skills-groups-wrapper">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="skills-group-block">
              <h3 className="skills-group-heading">{cat.title}</h3>
              <div className="compact-skills-grid">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="compact-skill-card">
                    <div className="compact-skill-icon">{renderTechIcon(skill.icon)}</div>
                    <span className="compact-skill-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
