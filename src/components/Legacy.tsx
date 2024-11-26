import React from 'react';

export const Legacy: React.FC = () => {
  return (
    <section className="legacy" id="legacy">
      <div className="legacy-content">
        <h2>Legado</h2>
        <div className="legacy-grid">
          <div className="legacy-item">
            <h3>Visión</h3>
            <p>Su capacidad para anticipar y crear productos que la gente no sabía que necesitaba transformó múltiples industrias.</p>
          </div>
          <div className="legacy-item">
            <h3>Innovación</h3>
            <p>Revolucionó la computación personal, la música digital, la telefonía móvil y la animación digital.</p>
          </div>
          <div className="legacy-item">
            <h3>Diseño</h3>
            <p>Su obsesión por la simplicidad y la elegancia en el diseño estableció nuevos estándares en la industria tecnológica.</p>
          </div>
          <div className="legacy-item">
            <h3>Liderazgo</h3>
            <p>Su estilo de liderazgo y su búsqueda de la perfección inspiraron a una nueva generación de emprendedores.</p>
          </div>
        </div>
        <div className="legacy-quote">
          <blockquote>
            "La innovación es lo que distingue a un líder de un seguidor."
            <footer>- Steve Jobs</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};