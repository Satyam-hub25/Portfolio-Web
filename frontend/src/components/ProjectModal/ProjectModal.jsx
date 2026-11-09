import React, { useEffect } from 'react';
import { IconClose, IconExternalLink, IconGitHub, IconCheck } from '../Icons/CustomIcons';
import './ProjectModal.css';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconClose size={22} color="#ffffff" />
        </button>

        <div className="project-modal-hero" style={{ borderBottomColor: project.colorTheme }}>
          <div className="project-modal-category-badge">{project.category}</div>
          <h2 className="project-modal-title">{project.title}</h2>
        </div>

        <div className="project-modal-body">
          <p className="project-modal-desc">{project.description}</p>

          <div className="project-modal-section">
            <h4 className="modal-subheading">Key Architecture &amp; Highlights</h4>
            <ul className="modal-highlights-list">
              {project.highlights?.map((highlight, index) => (
                <li key={index}>
                  <span className="highlight-bullet">
                    <IconCheck size={14} color="var(--color-accent)" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-modal-section">
            <h4 className="modal-subheading">Technologies Used</h4>
            <div className="modal-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-modal-actions">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-pill-accent modal-btn"
            >
              <IconExternalLink size={18} />
              <span>Live Preview</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-pill-outline modal-btn"
            >
              <IconGitHub size={18} />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
