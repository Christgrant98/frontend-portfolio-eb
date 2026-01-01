import React from 'react';
import type { WorkStep } from '../../constants/eventsData';

interface HowItWorksProps {
  title: string;
  steps: WorkStep[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ title, steps }) => {
  return (
    <div className="how-it-works">
      <h2 className="how-it-works-title font-heading">{title}</h2>
      
      <div className="work-steps">
        {steps.map((step) => (
          <div key={step.number} className="work-step">
            <div className="step-number font-heading">{step.number}.</div>
            <div className="step-content">
              <h3 className="step-title font-body">{step.title}</h3>
              <p className="step-description font-body">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

