import React from 'react';
import '../components/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // Función para desmarcar el checkbox cuando se hace clic en un enlace
  const handleLinkClick = () => {
    document.getElementById('check').checked = false;
  };

  return (
    <header>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <ul>
          <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#servicios" onClick={handleLinkClick}>Servicios</a></li>
          <li><a href="#form" onClick={handleLinkClick}>Contáctanos</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Change language</a></li>
          <li>
            <a
              id="whatsappLink"
              href="https://wa.me/5493516862090"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cotizacion"
              onClick={handleLinkClick}
            >
              Obtener Cotización
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

