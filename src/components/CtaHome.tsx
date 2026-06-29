import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const CtaHome: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  // Fade-up al entrar en viewport
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('fade-up');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/portfolio');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  };

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="cta-card">
        <h2 className="cta-title">¿Listo para dar el salto digital?</h2>
        <p className="cta-desc">
          Descubre cómo hemos ayudado a otros negocios a transformar su presencia online.
        </p>
        <Link
          to="/portfolio"
          className="cta-button"
          onClick={handlePortfolioClick}
        >
          Explorar portfolio
        </Link>
      </div>
    </section>
  );
};
