import React, { useEffect, useRef } from 'react';

type TechItem = {
  label: string;
  icon: string;
};

// Frontend, Backend, BBDD, Tooling, DevOps y Mobile
const FRONTEND: TechItem[] = [
  { label: 'React', icon: 'bi-lightning-charge' },
  { label: 'TypeScript', icon: 'bi-braces' },
  { label: 'JavaScript', icon: 'bi-code-slash' },
  { label: 'HTML5', icon: 'bi-file-earmark-code' },
  { label: 'CSS3', icon: 'bi-file-earmark-code' },
  { label: 'Figma', icon: 'bi-bezier2' },
  { label: 'Bootstrap', icon: 'bi-bootstrap' },
  { label: 'EJS', icon: 'bi-terminal' }
];

const BACKEND_AND_DB: TechItem[] = [
  { label: 'Node.js', icon: 'bi-hdd-network' },
  { label: 'Express', icon: 'bi-diagram-3' },
  { label: 'Java', icon: 'bi-cup-hot' },
  { label: 'PHP', icon: 'bi-file-earmark-code' },
  { label: 'Laravel', icon: 'bi-hammer' },
  { label: 'MySQL', icon: 'bi-database' },
  { label: 'PostgreSQL', icon: 'bi-database-fill' },
  { label: 'MongoDB', icon: 'bi-tree' },
  { label: 'SQLite', icon: 'bi-database-check' },
  { label: 'Firebase', icon: 'bi-lightning-fill' },
  { label: 'Git', icon: 'bi-git' },
  { label: 'XAMPP', icon: 'bi-box-seam' },
  { label: 'Django', icon: 'bi-shield-check' },
  { label: 'Python', icon: 'bi-braces' },
  { label: 'Docker', icon: 'bi-box-seam' },
  { label: 'Nginx', icon: 'bi-server' },
  { label: 'Flutter', icon: 'bi-phone' },
  { label: 'Dart', icon: 'bi-code-square' }
];

function TechPill({ item, ghost = false }: { item: TechItem; ghost?: boolean }) {
  return (
    <span className={`tech-marquee__pill ${ghost ? 'tech-marquee__pill--ghost' : ''}`}>
      <i className={`bi ${item.icon} tech-marquee__icon`} aria-hidden="true" />
      <span>{item.label}</span>
    </span>
  );
}

const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('is-visible');
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="tech-section" ref={sectionRef}>
      <div className="tech-header">
        <span className="services-eyebrow">// Mi caja de herramientas</span>
        <h2 className="tech-title">
          Tecnologías que <span className="highlight-lime">domino</span>.
        </h2>
      </div>

      {/* Fila superior — desplazamiento hacia la izquierda */}
      <div className="tech-marquee" aria-hidden="true">
        <div className="tech-marquee__track tech-marquee__track--left">
          {[...FRONTEND, ...FRONTEND].map((tech, idx) => (
            <TechPill item={tech} key={`f-${idx}`} />
          ))}
        </div>
      </div>

      {/* Fila inferior — desplazamiento hacia la derecha (sensación de profundidad) */}
      <div className="tech-marquee tech-marquee--secondary" aria-hidden="true">
        <div className="tech-marquee__track tech-marquee__track--right">
          {[...BACKEND_AND_DB, ...BACKEND_AND_DB].map((tech, idx) => (
            <TechPill item={tech} ghost key={`b-${idx}`} />
          ))}
        </div>
      </div>

      {/* Lista accesible para lectores de pantalla */}
      <ul className="visually-hidden">
        {[...FRONTEND, ...BACKEND_AND_DB].map((tech) => (
          <li key={tech.label}>{tech.label}</li>
        ))}
      </ul>
    </section>
  );
};

export { TechStack };
