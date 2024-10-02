import React from 'react';
import '../components/home.css';

const Home = () => {
  return (
    <section id="inicio">
      <div className="image-container">
        <img src="https://c.pxhere.com/photos/fb/fe/american_cellphone_coffee_colleagues_desk_digital_device_discussing_european-1560411.jpg!d" alt="trabajo" />
        <div className="overlay"></div>
        <div className="text-overlay">
          <p className="titulo">Hacemos crecer tu negocio en línea</p>
          <p className="explicar">
            Si estás buscando una agencia que te ayude a crear una presencia notable en línea, estás en el lugar correcto.
          </p>
          <div className='contenedor-boton'>
          <a
              id="whatsappLink"
              className="enviar-mensaje"
              href="https://wa.me/5493516862090" // Reemplaza con tu número
              target="_blank"
              rel="noopener noreferrer" // Agrega este atributo
            >
              Enviar un mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
