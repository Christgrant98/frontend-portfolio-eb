import React from 'react';
import '../css/ServicePackageCard.css';

interface ServicePackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  imagePath: string;
  imageAlt: string;
  buttonText?: string;
}

const ServicePackageCard: React.FC<ServicePackageCardProps> = ({
  title,
  price,
  description,
  features,
  imagePath,
  imageAlt,
  buttonText = "Book Now"
}) => {
  return (
    <div className="service-package-card">
      <div className="package-content">
        <div className="package-text">
          <h3 className="package-title">{title}</h3>
          <p className="package-price">{price}</p>
          <p className="package-description">{description}</p>
          <ul className="package-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className="package-button">{buttonText}</button>
        </div>
        <div className="package-image">
          <img src={imagePath} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default ServicePackageCard;
