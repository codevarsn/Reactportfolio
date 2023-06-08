import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

const Portfolio = () => {
  return (
   <main>
      <Header/>
      <AboutSection/>
      <SkillsSection/>
      <PortfolioSection/>
      <ContactSection/>
      <footer className="footer">Made with ❤ in Academlo</footer>
    </main>
  );
};

export default Portfolio;


