import React from 'react';

interface EventsDescriptionProps {
  lines: string[];
}

const EventsDescription: React.FC<EventsDescriptionProps> = ({ lines }) => {
  return (
    <div className="events-description">
      <h2 className="events-subtitle font-heading">
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
    </div>
  );
};

export default EventsDescription;

