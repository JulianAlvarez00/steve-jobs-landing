import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "1976",
    title: "Fundación de Apple",
    description: "Jobs y Wozniak fundan Apple Computer en el garaje de la familia Jobs."
  },
  {
    year: "1985",
    title: "Salida de Apple",
    description: "Tras conflictos internos, Jobs es despedido de Apple y funda NeXT Computer."
  },
  {
    year: "1996",
    title: "Regreso a Apple",
    description: "Apple adquiere NeXT, marcando el regreso de Jobs a la empresa."
  },
  {
    year: "2001",
    title: "Revolución Digital",
    description: "Lanzamiento del iPod, revolucionando la industria de la música."
  },
  {
    year: "2007",
    title: "iPhone",
    description: "Presentación del primer iPhone, redefiniendo los teléfonos móviles."
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="timeline" id="timeline">
      <h2>Timeline</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};