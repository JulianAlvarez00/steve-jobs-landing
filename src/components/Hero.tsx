import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Steve Jobs</h1>
        <h2>1955 - 2011</h2>
        <p className="hero-quote">"Stay Hungry, Stay Foolish"</p>
        <p className="hero-description">
          Visionario, innovador y líder que revolucionó la tecnología y transformó múltiples industrias.
          Cofundador de Apple y pionero en la era digital.
        </p>
      </div>
    </section>
  );
};