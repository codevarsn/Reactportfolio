import React from 'react';
import '../App.css'




function SkillsSection() {
  return (
    <section>
      <h2>Mis habilidades</h2>
      <ul className="container">
        <li className="service">
          <img className="size" src="./src/icons/html.png" alt="html" />
          <span>HTML</span>
        </li>
        <li className="service">
          <img className="size" src="./src/icons/css.png" alt="css" />
          <span>CSS</span>
        </li>
        <li className="service">
          <img className="size" src="./src/icons/react.png" alt="reactjs" />
          <span>ReactJs</span>
        </li>
        <li className="service">
          <img className="size" src="./src/icons/javascript.png" alt="javascript" />
          <span>Javascript</span>
        </li>
        <li className="service">
        <img className="size" src="./src/icons/node.png" alt="nodejs" />
          <span>NodeJs</span>
        </li>
        <li className="service">
        <img className="size" src="./src/icons/postgreSQL.png" alt="postgreSQL" />
          <span>PostgreSQL</span>
        </li>
      </ul>
    </section>
  );
}

export default SkillsSection;
