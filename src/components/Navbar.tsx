import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Estado "scrolled" para activar el backdrop-blur al desplazar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== '/portfolio') {
      navigate('/portfolio');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== '/quienes-somos') {
      navigate('/quienes-somos');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsMenuOpen(false);
  };

  const goToContact = () => {
    if (location.pathname !== '/contacto') {
      navigate('/contacto');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    setIsMenuOpen(false);
  };

  // Helper para marcar el link activo según la ruta
  const isActive = (path: string) =>
    location.pathname === path ? 'navbar-link is-active' : 'navbar-link';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link
          to="/"
          className="navbar-link"
          style={{ display: 'inline-block' }}
          onClick={handleHomeClick}
        >
          <Logo scale={0.34} color="#000000" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className={isActive('/')} onClick={handleHomeClick}>
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={isActive('/portfolio')}
            onClick={handlePortfolioClick}
          >
            Mis trabajos
          </Link>
        </li>
        <li>
          <Link
            to="/quienes-somos"
            className={isActive('/quienes-somos')}
            onClick={handleAboutClick}
          >
            ¿Quién soy?
          </Link>
        </li>
      </ul>

      <div className="navbar-actions">
        <button className="navbar-contact" type="button" onClick={goToContact}>
          Contacto
        </button>
      </div>

      <button
        className="navbar-menu-toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`navbar-mobile-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <aside
        className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="navbar-mobile-header">
          <button
            className="navbar-mobile-close"
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="navbar-mobile-links">
          <li>
            <Link to="/" className="navbar-mobile-link" onClick={handleHomeClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="navbar-mobile-link"
              onClick={handlePortfolioClick}
            >
              Mis trabajos
            </Link>
          </li>
          <li>
            <Link
              to="/quienes-somos"
              className="navbar-mobile-link"
              onClick={handleAboutClick}
            >
              ¿Quién soy?
            </Link>
          </li>
        </ul>

        <button
          className="navbar-contact navbar-mobile-contact"
          type="button"
          onClick={goToContact}
        >
          Contacto
        </button>
      </aside>
    </nav>
  );
};

export default Navbar;
