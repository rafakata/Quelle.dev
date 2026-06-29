import React, { useEffect, useRef, useState } from 'react';

const VALUES = [
  { id: '01', title: 'Código limpio', desc: 'Arquitectura clara, escalable y mantenible.' },
  { id: '02', title: 'Visión de negocio', desc: 'Decisiones técnicas alineadas con tu objetivo.' },
  { id: '03', title: 'UX cuidada', desc: 'Interfaces que enamoran y convierten.' }
];

const AboutIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-intro ${isVisible ? 'is-visible' : ''}`}
    >
      {/* Bloque de código decorativo del fondo */}
      <pre className="about-code-ambient" aria-hidden="true">
{`const quelle = {
  stack: ['React', 'Node', 'TypeScript'],
  values: ['clean', 'commercial', 'ux'],
  mission: () => shipQualitySoftware(),
};`}
      </pre>

      <h2 className="about-title">
        <span className="about-title-typing">
          <span className="about-title-track">
            Bienvenido a <span className="about-green">quelle.dev</span>
          </span>
          <span className="about-caret" aria-hidden="true" />
        </span>
      </h2>

      <p className="about-desc">
        En <span className="about-green">quelle.dev</span> fusiono el desarrollo
        Fullstack con estrategia de marketing para convertir tus visitas en
        clientes.
      </p>

      <p className="about-code">Código limpio, <span className="about-green">soluciones reales.</span></p>

      {/* Pilares en grid de 3 columnas */}
      <ul className={`about-values stagger ${isVisible ? 'is-visible' : ''}`}>
        {VALUES.map((value) => (
          <li
            key={value.id}
            className={`about-value reveal-up ${isVisible ? 'is-visible' : ''}`}
          >
            <span className="about-value__id">/ {value.id}</span>
            <h3 className="about-value__title">{value.title}</h3>
            <p className="about-value__desc">{value.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutIntro;
