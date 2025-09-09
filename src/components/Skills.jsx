// components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="skills-buttons">
          <p>Programming:</p>
          <div className="span-pad">
            <span>HTML/CSS</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>React</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Microsoft Access Database</span>
            <span>EPIC</span>
          </div>
          <p>Clinical software:</p>
          <div className="span-pad">
            <span>EPIC reporting</span>
            <span>Vascular Quality Initiative (VQI) data abstracting</span>
            <span>Tableau</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;