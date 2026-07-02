import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';

interface HeroProps {
  onScrollNext: () => void;
}

const FULL_TITLE = 'Soluciones web que hablan el idioma de tu negocio.';

const STATS = [
  { value: '7+', label: 'Proyectos' },
  { value: '20+', label: 'Tecnologías' },
  { value: 'Málaga', label: 'Base · 2026' },
  { value: 'Fullstack', label: 'Stack · DAW' }
];

const Hero: React.FC<HeroProps> = ({ onScrollNext }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [typed, setTyped] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  // Typing efecto carácter a carácter
  useEffect(() => {
    let index = 0;
    const tick = () => {
      index += 1;
      setTyped(FULL_TITLE.slice(0, index));
      if (index >= FULL_TITLE.length) {
        setTypingDone(true);
        return;
      }
      const next = FULL_TITLE[index - 1] === ' ' ? 55 : 32;
      timer = window.setTimeout(tick, next);
    };
    let timer = window.setTimeout(tick, 380);
    return () => window.clearTimeout(timer);
  }, []);

  // Parallax sutil — patrón de fondo + halo se mueven al scrollear
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = sectionRef.current;
      if (!heroEl) return;
      const offset = window.scrollY;
      if (offset > window.innerHeight) return;
      heroEl.style.setProperty('--hero-parallax', `${offset * 0.18}px`);
      heroEl.style.setProperty('--hero-parallax-soft', `${offset * 0.08}px`);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Marquee decorativo de palabras flotando en el fondo */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee__track">
          <span>BUILD</span><span>·</span><span>SHIP</span><span>·</span>
          <span>DESIGN</span><span>·</span><span>CODE</span><span>·</span>
          <span>SCALE</span><span>·</span><span>ITERATE</span><span>·</span>
          <span>BUILD</span><span>·</span><span>SHIP</span><span>·</span>
          <span>DESIGN</span><span>·</span><span>CODE</span><span>·</span>
          <span>SCALE</span><span>·</span><span>ITERATE</span><span>·</span>
        </div>
      </div>

      <span className="hero-eyebrow">Portfolio · Fullstack Developer</span>

      <div className="hero-logo-wrap">
        <Logo scale={0.78} color="#000000" />
      </div>

      <h1 className="hero-title" aria-label={FULL_TITLE}>
        <span>{typed}</span>
        {!typingDone && <span className="hero-caret" aria-hidden="true" />}
      </h1>

      <div className="hero-actions">
        <button className="button-main" type="button" onClick={onScrollNext}>
          Conócenos
        </button>
      </div>

      {/* Stats verificables */}
      <ul className="hero-stats">
        {STATS.map((stat) => (
          <li key={stat.label} className="hero-stat">
            <span className="hero-stat__value">{stat.value}</span>
            <span className="hero-stat__label">{stat.label}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Bajar a la sección principal"
        className="hero-scroll-indicator"
        onClick={onScrollNext}
      >
        <span className="hero-scroll-indicator__label">Scroll</span>
        <span className="hero-scroll-indicator__rail">
          <span className="hero-scroll-indicator__dot" />
        </span>
      </button>
    </section>
  );
};

export default Hero;
