import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1>Transforming Data into Impact</h1>
          <p className="hero-subtitle">
            Monitoring, Evaluation, Accountability & Learning | Data Analytics | Research
          </p>
          <p>
            Empowering development projects through robust data-driven insights 
            to enhance program effectiveness and demonstrate measurable impact.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;