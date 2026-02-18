import React, { useEffect, useRef, useCallback, useState } from 'react';
import type { PortfolioItem } from '../../constants/portfolioData';
import '../css/PortfolioLightbox.css';

interface PortfolioLightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  origin: { x: number; y: number } | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  items,
  currentIndex,
  origin,
  onClose,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [useOriginForAnimation, setUseOriginForAnimation] = useState(!!origin);
  const hasMultiple = items.length > 1;
  const item = items[currentIndex];

  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  const translateX = origin ? origin.x - centerX : 0;
  const translateY = origin ? origin.y - centerY : 0;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (items.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) onNavigate('prev');
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < items.length - 1) onNavigate('next');
      }
    },
    [onClose, items.length, currentIndex, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsOpen(true));
    });
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
  }, []);

  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    setUseOriginForAnimation(false);
    setIsOpen(false);
    const t = setTimeout(() => setIsOpen(true), 25);
    return () => clearTimeout(t);
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!item) return null;

  const canGoPrev = hasMultiple && currentIndex > 0;
  const canGoNext = hasMultiple && currentIndex < items.length - 1;

  return (
    <div
      className="portfolio-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada de la imagen"
      onClick={handleBackdropClick}
    >
      <div className="portfolio-lightbox__backdrop" />
      <button
        ref={closeButtonRef}
        type="button"
        className="portfolio-lightbox__close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="portfolio-lightbox__content">
        {hasMultiple && canGoPrev && (
          <button
            type="button"
            className="portfolio-lightbox__nav portfolio-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('prev');
            }}
            aria-label="Imagen anterior"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
        {hasMultiple && canGoNext && (
          <button
            type="button"
            className="portfolio-lightbox__nav portfolio-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('next');
            }}
            aria-label="Siguiente imagen"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}

        <div
          className={`portfolio-lightbox__image-wrap${isOpen ? ' portfolio-lightbox__image-wrap--open' : ''}`}
          style={
            !isOpen
              ? {
                  transform: useOriginForAnimation
                    ? `translate(${translateX}px, ${translateY}px) scale(0.35)`
                    : 'translate(0, 0) scale(0.92)',
                  opacity: useOriginForAnimation ? 0.85 : 0.7,
                  transition: 'none',
                }
              : undefined
          }
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.img}
            alt=""
            className="portfolio-lightbox__image"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioLightbox;
