import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  index
}) => {
  const indexLabel =
    index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link to={`/trabajos/${id}`} className="project-card-link">
      <article className="project-card">
        <div
          className="project-card-image"
          style={{ backgroundImage: `url(${image})` }}
        >
          {indexLabel && (
            <span className="project-card-index">/ {indexLabel}</span>
          )}
          <div className="project-card-overlay">
            <span>Ver proyecto</span>
          </div>
        </div>
        <div className="project-card-info">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-desc">{description}</p>
          <span className="project-card-cta">
            Explorar caso <span aria-hidden="true">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
};
