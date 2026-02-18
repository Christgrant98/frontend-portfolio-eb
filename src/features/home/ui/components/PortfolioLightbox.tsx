import React, { useEffect, useRef, useCallback } from 'react';
import type { PortfolioItem } from '../../constants/portfolioData';
import '../css/PortfolioLightbox.css';

interface PortfolioLightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const PortfolioLightbox: React.FC<PortfolioLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hasMultiple = items.length > 1;
  const item = items[currentIndex];

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
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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
      <div className="portfolio-lightbox__content">
        <button
          ref={closeButtonRef}
          type="button"
          className="portfolio-lightbox__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <span aria-hidden="true">×</span>
        </button>

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
            ‹
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
            ›
          </button>
        )}

        <div className="portfolio-lightbox__image-wrap" onClick={(e) => e.stopPropagation()}>
          <img
            src={item.img}
            alt={item.title}
            className="portfolio-lightbox__image"
          />
        </div>
        <p className="portfolio-lightbox__caption">{item.title}</p>
      </div>
    </div>
  );
};

export default PortfolioLightbox;
