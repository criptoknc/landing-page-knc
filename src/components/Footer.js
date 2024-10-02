import React from 'react';
import '../components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Servicios Web KNC</p>
    </footer>
  );
};

export default Footer;
