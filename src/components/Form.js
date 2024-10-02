import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../components/form.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_09ft20m',  // Reemplaza con tu ID de servicio
      'template_770s6qf',  // Reemplaza con tu ID de plantilla
      form.current,
      'd1ks-rGPg7ntG-rY1'  // Reemplaza con tu clave pública de EmailJS
    )
    .then((result) => {
        console.log(result.text);
        alert("Mensaje enviado con éxito!");
    }, (error) => {
        console.log(error.text);
        alert("Error al enviar el mensaje.");
    });
  };

  return (
    <section id="form" className="formulario">
      <div className="texto-formulario">
        <p className="titulo-contactanos">¡Estamos para ayudarte!</p><br></br>
        <a
              id="whatsappLink"
              href="https://wa.me/5493516862090" // Reemplaza con tu número
              target="_blank"
              rel="noopener noreferrer"
              className="boton-redirigir"
            >
              +5493516862090
            </a>
            <br></br>
        <p className="mensaje">Comunícate con nosotros ahora para darle vida a tu negocio online</p>
      </div>
      <div className="datos-formulario">
        <p className="titulo-formulario">Envíanos un mensaje</p>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
