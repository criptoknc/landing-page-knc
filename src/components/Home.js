import React, { useState } from 'react';
import '../components/home.css';
import fondo from '../images/job-collaboration-design-event-office-white-collar-worker-1560411-pxhere.com.jpg';

const Home = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section id="inicio">
      <div className="image-container">
        {!isImageLoaded && <div className="spinner"></div>}
        
        <img 
          src={fondo} 
          alt="trabajo" 
          onLoad={() => setIsImageLoaded(true)} 
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
        
        {isImageLoaded && (
          <>
            <div className="overlay"></div>
            <div className="text-overlay">
              <p className="titulo">Hacemos crecer tu negocio en línea</p>
              <p className="explicar">
                Si estás buscando una agencia que te ayude a crear una presencia notable en línea, estás en el lugar correcto.
              </p>
              <div className="contenedor-boton">
                <a
                  id="whatsappLink"
                  className="enviar-mensaje"
                  href="https://wa.me/5493516862090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar un mensaje
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;

