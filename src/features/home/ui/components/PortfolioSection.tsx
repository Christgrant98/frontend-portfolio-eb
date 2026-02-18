import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Button } from '../../../../core/common/ui/components';
import '../css/PortfolioSection.css';

interface PortfolioSectionProps {
  title?: string;
  isPreview: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ isPreview }) => {
  const PREVIEW_LIMIT = 11;
  const displayData = isPreview ? PORTFOLIO_DATA.slice(0, PREVIEW_LIMIT) : PORTFOLIO_DATA;
  const navigate = useNavigate();

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <Box sx={{ width: '100%' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {displayData.map((item) => (
              <ImageListItem key={item.img}>
                <div className={isPreview ? undefined : 'portfolio-image-wrap'}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading={isPreview ? 'lazy' : 'eager'}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      imageRendering: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        
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
