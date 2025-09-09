// components/Education.js
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Education and Certifications</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 skills-animation">
          <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="skill-box">
              <h3>Google IT Automation with Python</h3>
              <p>Courses completed:</p>
              <ul>
                <li>Crash Course on Python</li>
                <li>Using Python to interact with the Operating System</li>
                <li>Introduction to Git and GitHub</li>
                <li>Troubleshooting and Debugging Techniques</li>
                <li>Configuration Management and the Cloud</li>
                <li>Automating Real-World Tasks with Python</li>
                <li>Accelerate Your Job Search with AI</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="skill-box">
              <h3>Google Data Analytics</h3>
              <p>Courses completed:</p>
              <ul>
                <li>Foundations: Data, Data, Everywhere</li>
                <li>Ask Questions to Make Data-Driven Decisions</li>
                <li>Prepare Data for Exploration</li>
                <li>Process Data from Dirty to Clean</li>
                <li>Analyze Data to Answer Questions</li>
                <li>Share Data Through the Art of Visualization</li>
                <li>Data Analysis with R Programming</li>
                <li>Google Data Analytics Capstone: Complete a Case Study</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="skill-box">
              <h3>COOP Apprenticeship</h3>
              <p>Class works:</p>
              <ul>
                <li>Full-Stack Web Development</li>
                <li>Agile Methodology</li>
                <li>Team Collaboration Projects</li>
                <li>Portfolio Development</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="skill-box">
              <h3>Bachelor in Biomedical Engineering - City College of New York</h3>
              <p>Relevant courses:</p>
              <ul>
                <li>Biomedical Instrumentation</li>
                <li>Biomechanics</li>
                <li>Biomaterials</li>
                <li>Physiological Systems</li>
                <li>Medical Imaging</li>
                <li>Data Analysis in Biomedical Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;