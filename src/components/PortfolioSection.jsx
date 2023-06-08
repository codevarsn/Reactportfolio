import React from 'react';
import '../App.css';

const handleproyect = () => {
  window.open('https://steady-starlight-a7db64.netlify.app', "_blank");
};

const handleproyect1 = () => {
  window.open('https://curious-duckanoo-3c74c3.netlify.app', "_blank");
};

const handleproyect2 = () => {
  window.open('https://github.com/codevarsn/ecommerceAPI', "_blank");
};

function PortfolioSection() {
  // Aquí puedes agregar el código correspondiente a las imágenes de tu portafolio
  return (
    <section>
      <h2>Portafolio</h2>
      <p className='proyects'>clickea los titulos para mirar los proyectos</p>
      <p className='proyects' onClick={handleproyect}>e-commerce con react</p>
      <p className='proyects' onClick={handleproyect1}>pokedex</p>
      <p className='proyects' onClick={handleproyect2}>e-commerce API</p>

    </section>
  );
}

export default PortfolioSection;
