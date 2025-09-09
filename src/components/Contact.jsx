// components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This would be replaced with your actual API endpoint
      // await axios.post('/api/contact', formData);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content" data-aos="fade-up" data-aos-delay="200">
              <div className="section-category mb-3">Contact</div>
              <h2 className="display-5 mb-4">Let's connect!</h2>

              <div className="contact-info mt-5">
                <div className="info-item d-flex mb-3">
                  <i className="bi bi-envelope-at me-3"></i>
                  <span>info@scriptbunny.com</span>
                </div>

                <div className="info-item d-flex mb-3">
                  <i className="bi bi-telephone me-3"></i>
                  <span>+1 212-000-1111</span>
                </div>

                <div className="info-item d-flex mb-4">
                  <i className="bi bi-geo-alt me-3"></i>
                  <span>1000 Some Street, New York, NY 00000</span>
                </div>

                <a href="#" className="map-link d-inline-flex align-items-center">
                  Open Map
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-12">
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-12">
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-12">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        placeholder="Subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="col-12">
                      <textarea 
                        className="form-control" 
                        name="message" 
                        rows="6" 
                        placeholder="Message" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-submit w-100">Submit Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;