import React from 'react';

interface EventsCoverageBoxProps {
  title: string;
  items: string[];
}

const EventsCoverageBox: React.FC<EventsCoverageBoxProps> = ({ title, items }) => {
  return (
    <div className="events-coverage-box">
      <h3 className="coverage-title font-body">{title}</h3>
      <ul className="coverage-list font-body">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventsCoverageBox;

