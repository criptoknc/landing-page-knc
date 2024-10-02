import React from 'react';
import '../components/tecnologies.css';
import wordpress from '../images/icons8-wordpress-120.png';
import amazon from '../images/icons8-amazon-web-services-120.png';
import woocommerce from '../images/icons8-woocommerce-120.png';

const Technologies = () => {
  return (
    <section id="tecnologias">
      <p className="usamos">Tecnologías que utilizamos</p>
      <div className="iconos-tecno">
        <img src={wordpress} alt="wordpress" />
        <img width="120" height="120" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="react" />
        <img src={amazon} alt="amazon" />
        <img src={woocommerce} alt="woocommerce" />
      </div>
    </section>
  );
};

export default Technologies;
