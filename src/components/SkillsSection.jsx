import React from 'react';
import '../App.css'
function SkillsSection() {
  return (
    <section>
      <h2>Mis habilidades</h2>
      <ul className="container">
        <li className="service">
          <img className="size" src="./src/icons/html.svg" alt="html" />
          <span>HTML</span>
        </li>
        <li className="service">
          <img className="size" src="./src/icons/css.svg" alt="css" />
          <span>CSS</span>
        </li>
        <li className="service">
          <img className="size" src="./src/icons/react.svg" alt="reactjs" />
          <span>ReactJs</span>
        </li>
        <li className="service">
          <img className="size" src="./src/icons/javascript.svg" alt="javascript" />
          <span>Javascript</span>
        </li>
        <li className="service">
        <img className="size" src="./src/icons/node.svg" alt="nodejs" />
          <span>NodeJs</span>
        </li>
      </ul>
    </section>
  );
}

export default SkillsSection;
