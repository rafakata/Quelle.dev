import React, { useEffect, useRef } from 'react';

// Frontend, Backend, BBDD, Tooling
const FRONTEND = [
  'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Bootstrap', 'EJS'
];
const BACKEND_AND_DB = [
  'Node.js', 'Express', 'Java', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL',
  'MongoDB', 'SQLite', 'Firebase', 'Git', 'XAMPP'
];

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
            <span className="tech-marquee__pill" key={`f-${idx}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Fila inferior — desplazamiento hacia la derecha (sensación de profundidad) */}
      <div className="tech-marquee tech-marquee--secondary" aria-hidden="true">
        <div className="tech-marquee__track tech-marquee__track--right">
          {[...BACKEND_AND_DB, ...BACKEND_AND_DB].map((tech, idx) => (
            <span
              className="tech-marquee__pill tech-marquee__pill--ghost"
              key={`b-${idx}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Lista accesible para lectores de pantalla */}
      <ul className="visually-hidden">
        {[...FRONTEND, ...BACKEND_AND_DB].map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
};

export { TechStack };
