import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import { ProjectModal } from '../../components/ProjectModal/ProjectModal';
import { IconExternalLink, IconGitHub } from '../../components/Icons/CustomIcons';
import './Projects.css';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Exactly 3 featured projects are displayed as specified in requirements
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            A selection of production-grade full-stack web applications engineered with modern
            technologies, responsive interfaces, and robust architecture.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="portfolio-grid-3col">
          {displayedProjects.map((project, index) => (
            <article
              key={project.id}
              className="portfolio-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Visual Stage */}
              <div className="portfolio-preview-stage">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-thumbnail-img"
                  loading="lazy"
                />

                <div className="portfolio-hover-overlay">
                  <span className="btn-pill-white quick-view-pill">Quick Overview</span>
                </div>

                <span className="portfolio-category-tag">{project.category}</span>
              </div>

              {/* Card Meta & Actions */}
              <div className="portfolio-card-content">
                <h3 className="portfolio-item-title">{project.title}</h3>
                <p className="portfolio-item-desc">{project.description}</p>

                <div className="portfolio-tech-list">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="portfolio-tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="portfolio-tech-badge more-badge">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="portfolio-item-actions" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-link-btn primary"
                    title="Live Demo"
                  >
                    <IconExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-link-btn secondary"
                    title="GitHub Repository"
                  >
                    <IconGitHub size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
