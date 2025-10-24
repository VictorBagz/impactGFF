import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  const coreValues = [
    {
      icon: '📊',
      title: 'Evidence-Based',
      description: 'We ground our recommendations in rigorous data and analysis.'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'Committed to the highest standards of methodological rigor and ethical practice.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We work collaboratively with clients to build their internal capacity.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Leveraging cutting-edge digital tools for efficient and impactful data solutions.'
    },
    {
      icon: '🔒',
      title: 'Integrity',
      description: 'We uphold transparency and accountability in all our processes.'
    }
  ];

  const services = [
    {
      title: 'MEAL System Design',
      description: 'Comprehensive MEAL frameworks and performance monitoring plans.',
      link: '/services#meal'
    },
    {
      title: 'Research & Evaluation',
      description: 'Baseline, mid-term, and end-line evaluations with mixed-methods approach.',
      link: '/services#research'
    },
    {
      title: 'Data Solutions',
      description: 'Advanced analytics, visualization, and real-time program tracking.',
      link: '/services#data'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Core Values Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center fade-in-up">Our Core Values</h2>
          <div className="grid grid-3 stagger-children">
            {coreValues.map((value, index) => (
              <div key={index} className="value-item card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center fade-in-up">Our Services</h2>
          <div className="grid grid-3 stagger-children">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">
                  {index === 0 && '📋'}
                  {index === 1 && '🔍'}
                  {index === 2 && '📈'}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="btn btn-outline" style={{ marginTop: 'auto' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            <div className="fade-in-up">
              <h2>Our Vision</h2>
              <p>
                To be a leading partner for development organizations in Africa, 
                renowned for transforming data into actionable strategies that 
                maximize social impact and drive sustainable change.
              </p>
            </div>
            <div className="fade-in-up">
              <h2>Our Mission</h2>
              <p>
                To provide expert MEAL services, advanced data analytics, and 
                capacity-building support that strengthens project design, improves 
                performance, and provides undeniable evidence of results for our 
                clients and the communities they serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;