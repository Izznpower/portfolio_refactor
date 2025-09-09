// components/About.js
import React from 'react';
import profileImage from '../assets/img/profile/20240722_122903.jpg';

const About = () => {
  return (
    <section id="about" className="about section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="#00CEC8" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Backend developer &amp; Data scientist specialized in healthcare and fitness.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
            <div className="about-image">
              <img src={profileImage} alt="Profile Image" className="img-fluid rounded-4" />
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <p>Hi, This is YY Chan (Izzie)—a first-generation immigrant, woman in tech, and Biomedical Engineering graduate with 7+ years of experience in healthcare and research. I'm passionate about using technology to improve systems and solve real-world problems.</p>
              <p>With skills in Python, JavaScript, HTML, and CSS, I enjoy troubleshooting, debugging, and creating efficient solutions. My strong background in customer service supports my work in IT support, software development, and data analysis.</p>
              <p>I'm excited to bring a fresh perspective and a collaborative mindset to innovative tech teams.</p>
              <p>Over the years, I've built a solid foundation in programming and developed a love for troubleshooting, debugging, and optimizing tech solutions.</p>
              <p>I'm currently exploring opportunities in IT Support, Desktop Support, Software Development, and Data Analysis/Science.</p>
              <p>Let's connect—I'm always open to discussing how I can contribute to innovative, inclusive, and forward-thinking projects.</p>
              <p>Interest/Hobbies: Biking, Hiking, Camping, Traveling, Volunteering, Animation, 3D printing, Crafting, etc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;