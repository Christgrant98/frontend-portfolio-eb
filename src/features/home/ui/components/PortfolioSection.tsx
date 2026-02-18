import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Button } from '../../../../core/common/ui/components';
import { useIsMobile, useIsTablet } from '../../../../core/common/hooks/useMediaQuery';
import PortfolioImageItem from './PortfolioImageItem';
import PortfolioLightbox from './PortfolioLightbox';
import '../css/PortfolioSection.css';

interface PortfolioSectionProps {
  title?: string;
  isPreview: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ isPreview }) => {
  const PREVIEW_LIMIT = 11;
  const displayData = isPreview ? PORTFOLIO_DATA.slice(0, PREVIEW_LIMIT) : PORTFOLIO_DATA;
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const cols = isMobile ? 1 : isTablet ? 2 : 3;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    setLightboxIndex((prev) => {
      if (direction === 'prev') return Math.max(0, prev - 1);
      return Math.min(displayData.length - 1, prev + 1);
    });
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <Box sx={{ width: '100%' }}>
          <ImageList variant="masonry" cols={cols} gap={8}>
            {displayData.map((item, index) => (
              <ImageListItem key={item.img}>
                <PortfolioImageItem
                  item={item}
                  isPreview={isPreview}
                  isMobile={isMobile}
                  onClick={() => openLightbox(index)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        {lightboxOpen &&
          createPortal(
            <PortfolioLightbox
              items={displayData}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onNavigate={handleLightboxNavigate}
            />,
            document.body
          )}
        
        {isPreview && (
          <div className="portfolio-button-container">
            <Button 
              text="View My Portfolio"
              onClick={handleViewPortfolio}
              variant="secondary"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
