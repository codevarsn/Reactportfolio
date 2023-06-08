import React from 'react';
import '../App.css'
import html from '../icons/html.png';
import css from '../icons/css.png';
import javascript from '../icons/javascript.png';
import react from '../icons/react.png';
import node from '../icons/node.png';
import postgresql from '../icons/postgresql.png';

function SkillsSection() {
  return (
    <section>
      <h2>Mis habilidades</h2>
      <ul className="container">
        <li className="service">
          <img className="size" src={html} alt="html" />
          <span>HTML</span>
        </li>
        <li className="service">
          <img className="size" src={css} alt="css" />
          <span>CSS</span>
        </li>
        <li className="service">
          <img className="size" src={react} alt="reactjs" />
          <span>ReactJs</span>
        </li>
        <li className="service">
          <img className="size" src={javascript} alt="javascript" />
          <span>Javascript</span>
        </li>
        <li className="service">
          <img className="size" src={node} alt="nodejs" />
          <span>NodeJs</span>
        </li>
        <li className="service">
          <img className="size" src={postgresql} alt="postgreSQL" />
          <span>PostgreSQL</span>
        </li>
      </ul>
    </section>
  );
}

export default SkillsSection;
