import React from 'react';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';

const SOCIALS = [
  { icon: 'bi-linkedin',  href: 'https://www.linkedin.com/in/rafael-medina-quelle/', label: 'LinkedIn' },
  { icon: 'bi-github',    href: 'https://github.com/rafakata',                       label: 'GitHub'   },
  { icon: 'bi-twitter-x', href: 'https://x.com/quelledev',                           label: 'Twitter'  }
];

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div
            className="footer-logo-wrap"
            role="button"
            tabIndex={0}
            onClick={scrollTop}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') scrollTop();
            }}
            aria-label="Ir al inicio"
          >
            <Logo scale={0.45} color="#000000" />
          </div>
          <p className="footer-tagline">
            Soluciones web que hablan el idioma de tu negocio.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie">
          <span className="footer-nav__heading">Navegación</span>
          <Link to="/"               className="footer-link-text" onClick={handleNav('/')}>Inicio</Link>
          <Link to="/portfolio"      className="footer-link-text" onClick={handleNav('/portfolio')}>Mis trabajos</Link>
          <Link to="/quienes-somos"  className="footer-link-text" onClick={handleNav('/quienes-somos')}>¿Quién soy?</Link>
          <Link to="/contacto"       className="footer-link-text" onClick={handleNav('/contacto')}>Contacto</Link>
        </nav>

        <div className="footer-social">
          <span className="footer-nav__heading">Sígueme</span>
          <div className="footer-links">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
                aria-label={s.label}
              >
                <i className={`bi ${s.icon}`} />
              </a>
            ))}
          </div>
          <button type="button" onClick={scrollTop} className="footer-top">
            Volver arriba ↑
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">Málaga · {year}</p>
        <p className="footer-text footer-text--alt">
          Diseñado y desarrollado con · <span className="highlight-black">quelle.dev</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
