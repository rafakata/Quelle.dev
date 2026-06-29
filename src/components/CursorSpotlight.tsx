import React, { useEffect, useRef } from 'react';

/**
 * Halo lime sutil que sigue al cursor en pantallas con puntero fino.
 * Se desactiva automáticamente en móvil (media query coarse pointer).
 */
const CursorSpotlight: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Solo activamos en pantallas con puntero fino (no móvil)
    const mq = window.matchMedia('(pointer: fine)');
    if (!mq.matches) return;

    let rafId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Easing — el halo no sigue al cursor 1:1, le da un retardo suave
    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={dotRef} className="cursor-spotlight" aria-hidden="true" />;
};

export default CursorSpotlight;
