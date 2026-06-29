import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  /** Porcentaje de la sección que debe entrar en viewport para activarse */
  threshold?: number;
  /** Si true, se queda visible para siempre tras la primera intersección */
  once?: boolean;
  /** Margen extra alrededor del viewport — útil para anticipar reveals */
  rootMargin?: string;
}

/**
 * Hook para activar la clase `.is-visible` mediante IntersectionObserver.
 * Devuelve una tupla [ref, isVisible] para evitar conflictos con la
 * regla react-hooks/refs (que prohibe leer una prop llamada `ref`).
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: UseRevealOptions = {}
) {
  const { threshold = 0.18, once = true, rootMargin = '0px 0px -10% 0px' } = options;
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return [elementRef, isVisible] as const;
}
