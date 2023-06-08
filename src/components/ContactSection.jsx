import React from 'react';
import '../app.css';

function ContactSection() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=573232920011';
    window.open(whatsappUrl, '_blank');
  };

  const handleMailClick = () => {
    const mailtoUrl = 'mailto:mariano5623@gmail.com';
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section>
      <h2>Contacto</h2>
      <div className="contacto">
        <div className="iconos">
          <div className="" onClick={handleWhatsAppClick}>
            <img className='contacImg' src="./src/icons/whatsapp.svg" alt="whatsapp" />
            <h4>WhatsApp</h4>
            <p>+573232920011</p>
          </div>
          <div onClick={handleMailClick}>
            <img className='contacImg' src="./src/icons/mail.svg" alt="mail" />
            <div>
            <h4>Email</h4>
            <p>mariano5623@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;


