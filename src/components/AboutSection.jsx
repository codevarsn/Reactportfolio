import React from "react";
import '../app.css';

const AboutSection = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/codevarsan/", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/codevarsn", "_blank");
  };

  const handleNetlifyClick = () => {
    window.open("https://app.netlify.com/teams/codevarsn/sites", "_blank");
  };

  return (
    <section>
      <h2>Acerca de mí</h2>
      <p className="about">
        Soy Mariano Echavarria, un apasionado del desarrollo web. Me considero una persona responsable y dedicada. Estoy comprometido a aprender y mejorar constantemente mis habilidades en el campo del desarrollo web. Mi objetivo es crear sitios web funcionales y atractivos que cumplan con las necesidades de los clientes. ¡Explora mi portafolio!
      </p>
      <ul className="iconos icAbout">
        <li className="icon" onClick={handleLinkedInClick}>
          <img src="./src/icons/linkedin.svg" alt="linkedin" />
        </li>
        <li className="icon" onClick={handleGithubClick}>
          <img src="./src/icons/github.svg" alt="github" />
        </li>
      </ul>
    </section>
  );
};

export default AboutSection;

