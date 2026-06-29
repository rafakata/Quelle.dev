import React from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Envuelve a las rutas para dar entrada animada al cambiar de pathname.
 * Re-monta el contenido con `key={pathname}` para reiniciar la animación CSS.
 */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="page-transition" key={location.pathname}>
      {children}
    </div>
  );
};

export default PageTransition;
