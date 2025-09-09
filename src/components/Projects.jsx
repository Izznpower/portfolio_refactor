// components/Portfolio.js
import React, { useState } from 'react';
import portfolio1 from '../assets/img/portfolio/portfolio-1.webp';
import portfolio2 from '../assets/img/portfolio/portfolio-2.webp';
import portfolio4 from '../assets/img/portfolio/portfolio-4.webp';
import portfolio10 from '../assets/img/portfolio/portfolio-10.webp';
import portfolio11 from '../assets/img/portfolio/portfolio-11.webp';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');

  const portfolioItems = [
    {
      id: 1,
      category: 'filter-web',
      title: 'Modern Dashboard Interface',
      image: portfolio1,
      description: 'A responsive dashboard with real-time analytics.',
      languages: 'React, JavaScript, CSS'
    },
    {
      id: 2,
      category: 'filter-graphics',
      title: 'Creative Brand Identity',
      image: portfolio10,
      description: 'Complete brand identity package for a tech startup.',
      languages: 'Adobe Illustrator, Photoshop'
    },
    {
      id: 3,
      category: 'filter-brand',
      title: 'Luxury Brand Package',
      image: portfolio4,
      description: 'Premium branding for a luxury product line.',
      languages: 'Adobe Creative Suite'
    },
    {
      id: 4,
      category: 'filter-web',
      title: 'E-commerce Platform',
      image: portfolio2,
      description: 'Full-featured online store with payment integration.',
      languages: 'React, Node.js, MongoDB'
    },
    // {
    //   id: 5,
    //   category: 'filter-graphics',
    //   title: 'Digital Art Collection',
    //   image: portfolio11,
    //   description: 'Series of digital artworks exploring AI-generated art.',
    //   languages: 'Procreate, Photoshop, AI Tools'
    // }
  ];

  const filteredItems = filter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="2"></path>
          </svg>
        </div>
        <p>Projects, Reports, Dashboards</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
            <ul className="portfolio-filters isotope-filters">
              <li 
                className={filter === '*' ? 'filter-active' : ''} 
                onClick={() => setFilter('*')}
              >
                All Work
              </li>
              <li 
                className={filter === 'filter-web' ? 'filter-active' : ''} 
                onClick={() => setFilter('filter-web')}
              >
                Programming
              </li>
              <li 
                className={filter === 'filter-graphics' ? 'filter-active' : ''} 
                onClick={() => setFilter('filter-graphics')}
              >
                Dashboard
              </li>
              <li 
                className={filter === 'filter-brand' ? 'filter-active' : ''} 
                onClick={() => setFilter('filter-brand')}
              >
                Graphic/Animation
              </li>
            </ul>
          </div>

          <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
            {filteredItems.map(item => (
              <div key={item.id} className="col-lg-6 col-md-6 portfolio-item">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={item.image} className="img-fluid" alt={item.title} loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a href={item.image} className="preview-link" data-gallery="portfolio-gallery-web">
                          <i className="bi bi-eye"></i>
                        </a>
                        <a href="#portfolio" className="details-link">
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">{item.category.replace('filter-', '')}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Languages: {item.languages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;