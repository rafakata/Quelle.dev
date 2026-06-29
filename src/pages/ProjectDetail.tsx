import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import Navbar from '../components/Navbar';
import { useReveal } from '../hooks/useReveal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  useEffect(() => {
    if (!project) navigate('/portfolio', { replace: true });
  }, [project, navigate]);

  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [visualRef, visualVisible] = useReveal<HTMLDivElement>({ threshold: 0.15 });

  if (!project) return null;

  const imageUrl = project.image;

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/portfolio');
  };

  // Índice del proyecto dentro del listado (para mostrar "Proyecto 03 / 07")
  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const total = projectsData.length;

  return (
    <>
      <Navbar />
      <main className="main-bg project-detail-page">
        <div className="container-detail">
          <a href="/portfolio" className="back-link" onClick={handleBack}>
            ← Volver a proyectos
          </a>

          {/* Header amplio con metadatos */}
          <header
            ref={headerRef}
            className={`detail-header reveal-up ${headerVisible ? 'is-visible' : ''}`}
          >
            <div className="detail-header__meta">
              <span className="detail-eyebrow">// Case study</span>
              <span className="detail-counter">
                {String(projectIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-lead">{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </header>

          {/* Layout 2 columnas: imagen grande + info sticky */}
          <div className="detail-layout">
            <div
              ref={visualRef}
              className={`detail-visual reveal-up ${visualVisible ? 'is-visible' : ''}`}
            >
              <img src={imageUrl} alt={project.title} className="detail-image" />
              <div className="detail-visual__caption">
                <span>{project.title}</span>
                <span aria-hidden="true">/ vista principal</span>
              </div>
            </div>

            <aside className="detail-aside">
              <div className="detail-info-card">
                <h3 className="detail-info-card__title">El proyecto</h3>
                <p className="detail-description">{project.longDescription}</p>
              </div>

              <div className="detail-actions-card">
                <h3 className="detail-info-card__title">Enlaces</h3>
                <div className="detail-actions">
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-button detail-live-btn"
                  >
                    Ver web en vivo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-outline-button detail-github-btn"
                  >
                    Repositorio GitHub
                  </a>
                </div>
                <p className="detail-warning">
                  * El enlace desplegado podría no funcionar o tardar unos segundos
                  en cargar.
                </p>
              </div>
            </aside>
          </div>

          {/* Navegación entre proyectos */}
          <nav className="detail-nav" aria-label="Otros proyectos">
            {projectIndex > 0 && (
              <a
                href={`/trabajos/${projectsData[projectIndex - 1].id}`}
                className="detail-nav__link detail-nav__link--prev"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/trabajos/${projectsData[projectIndex - 1].id}`);
                }}
              >
                <span className="detail-nav__hint">← Anterior</span>
                <span className="detail-nav__name">
                  {projectsData[projectIndex - 1].title}
                </span>
              </a>
            )}
            {projectIndex < total - 1 && (
              <a
                href={`/trabajos/${projectsData[projectIndex + 1].id}`}
                className="detail-nav__link detail-nav__link--next"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/trabajos/${projectsData[projectIndex + 1].id}`);
                }}
              >
                <span className="detail-nav__hint">Siguiente →</span>
                <span className="detail-nav__name">
                  {projectsData[projectIndex + 1].title}
                </span>
              </a>
            )}
          </nav>
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
