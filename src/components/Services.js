import React from 'react';
import '../components/services.css';

const Services = () => {
  return (
    <section id="servicios">
      <p className="usamos">¿Cómo podemos ayudarte?</p>
      <div className="servicios-web">
        <div className="caja">
          <div>
            <p className="titulo-servicio">Diseño</p>
            <p className="texto-servicio">
              Nuestro equipo de diseño web tiene amplios años de experiencia en las áreas centrales del diseño.
            </p>
          </div>
          <div className='boton'>
          <a
              id="whatsappLink"
              href="https://wa.me/5493516862090" // Reemplaza con tu número
              target="_blank"
              rel="noopener noreferrer" // Agrega este atributo
              className="boton-redirigir"
            >
              Contactanos
            </a>
          </div>
        </div>
        <div className="caja">
          <div>
            <p className="titulo-servicio">Desarrollo</p>
            <p className="texto-servicio">
              Buscas soluciones personalizadas para tu sitio web.
            </p>
          </div>
          <div className='boton'>
          <a
              id="whatsappLink"
              href="https://wa.me/5493516862090" // Reemplaza con tu número
              target="_blank"
              rel="noopener noreferrer" // Agrega este atributo
              className="boton-redirigir"
            >
              Contactanos
            </a>
          </div>
        </div>
        <div className="caja">
          <div>
            <p className="titulo-servicio">Marketing</p>
            <p className="texto-servicio">
              Con el marketing digital adecuado, nos aseguraremos de que nuevos clientes puedan encontrar tu negocio.
            </p>
          </div>
          <div className='boton'>
            <a
              id="whatsappLink"
              href="https://wa.me/5493516862090" // Reemplaza con tu número
              target="_blank"
              rel="noopener noreferrer" // Agrega este atributo
              className="boton-redirigir"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
