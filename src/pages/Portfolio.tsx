import React, { useMemo, useState } from 'react';
import projectsData from '../data/projects.json';
import Navbar from '../components/Navbar';
import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';

const ALL_TAG = 'Todos';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_TAG);

  const [headerRef, headerVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>({ threshold: 0.05 });

  // Construyo las tecnologías agrupadas únicas (un poco normalizadas)
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projectsData.forEach((p) =>
      p.technologies.forEach((t) => set.add(normalizeTag(t)))
    );
    return [ALL_TAG, ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === ALL_TAG) return projectsData;
    return projectsData.filter((p) =>
      p.technologies.some((t) => normalizeTag(t) === activeFilter)
    );
  }, [activeFilter]);

  // Featured = primer proyecto del filtro actual (ocupa el doble de espacio)
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Navbar />
      <main className="main-bg portfolio-page">
        <section
          ref={headerRef}
          className={`portfolio-header reveal-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="portfolio-eyebrow">// Trabajos seleccionados</span>
          <h1 className="portfolio-main-title">
            Mis <span className="highlight-lime">Trabajos</span>
          </h1>
          <p className="portfolio-subtitle">
            Una selección de proyectos donde el código y la estrategia se dan la mano.
          </p>
        </section>

        {/* Filtros por tecnología */}
        <div className="portfolio-filters-wrap">
          <div className="portfolio-filters" role="tablist" aria-label="Filtrar proyectos">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={activeFilter === tag}
                className={`portfolio-filter ${activeFilter === tag ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <span className="portfolio-filters__count">
            {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
          </span>
        </div>

        <section className="portfolio-grid-container">
          <div
            ref={gridRef}
            className={`portfolio-bento ${gridVisible ? 'is-visible' : ''}`}
          >
            {featured && (
              <FeaturedCard project={featured} visible={gridVisible} />
            )}
            {rest.map((project, idx) => (
              <BentoCard
                key={project.id}
                project={project}
                index={idx + 1}
                visible={gridVisible}
              />
            ))}

            {filtered.length === 0 && (
              <p className="portfolio-empty">
                No hay proyectos con esta tecnología todavía.
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

/**
 * Normalizamos algunos tags porque en projects.json aparecen variantes
 * ("Mapbox/Leaflet", "DAO Pattern", "Leaflet/Maps API"...).
 */
function normalizeTag(tag: string): string {
  if (tag.toLowerCase().includes('leaflet')) return 'Leaflet';
  if (tag.toLowerCase().includes('dao')) return 'DAO';
  return tag.split('/')[0].trim();
}

/* ──────────────────────────────────────────────
   FEATURED — Card grande con preview + tags + CTA
────────────────────────────────────────────── */
const FeaturedCard: React.FC<{
  project: (typeof import('../data/projects.json'))[number];
  visible: boolean;
}> = ({ project, visible }) => (
  <Link
    to={`/trabajos/${project.id}`}
    className={`bento bento--featured reveal-up ${visible ? 'is-visible' : ''}`}
  >
    <div
      className="bento__image"
      style={{ backgroundImage: `url(${assetUrl(project.image)})` }}
    />
    <div className="bento__gradient" />
    <span className="bento__badge">★ Destacado</span>

    <div className="bento__content">
      <h2 className="bento__title">{project.title}</h2>
      <p className="bento__desc">{project.description}</p>
      <div className="bento__tags">
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className="bento__tag">{tech}</span>
        ))}
      </div>
      <span className="bento__cta">
        Ver caso de estudio <span aria-hidden="true">→</span>
      </span>
    </div>
  </Link>
);

/* ──────────────────────────────────────────────
   BENTO CARD — Card secundaria
────────────────────────────────────────────── */
const BentoCard: React.FC<{
  project: (typeof import('../data/projects.json'))[number];
  index: number;
  visible: boolean;
}> = ({ project, index, visible }) => (
  <Link
    to={`/trabajos/${project.id}`}
    className={`bento bento--regular reveal-up ${visible ? 'is-visible' : ''}`}
  >
    <div
      className="bento__image"
      style={{ backgroundImage: `url(${assetUrl(project.image)})` }}
    />
    <div className="bento__gradient" />
    <span className="bento__index">/ {String(index + 1).padStart(2, '0')}</span>

    <div className="bento__content">
      <h3 className="bento__title bento__title--sm">{project.title}</h3>
      <p className="bento__desc bento__desc--sm">{project.description}</p>
      <div className="bento__tags">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="bento__tag">{tech}</span>
        ))}
      </div>
      <span className="bento__cta bento__cta--sm">
        Explorar <span aria-hidden="true">→</span>
      </span>
    </div>
  </Link>
);

export default Portfolio;
