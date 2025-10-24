import React from 'react';

const Services = () => {
  const services = [
    {
      id: 'meal',
      icon: '📋',
      title: 'MEAL System Design & Implementation',
      description: 'Comprehensive MEAL frameworks to monitor and evaluate program effectiveness.',
      features: [
        'Design and set up of comprehensive MEAL frameworks and plans',
        'Development of Theories of Change, Logical Frameworks, and Results Frameworks',
        'Creation of key performance indicators (KPIs) and performance monitoring plans',
        'Providing technical assistance in program design and strategic planning'
      ]
    },
    {
      id: 'research',
      icon: '🔍',
      title: 'Research & Evaluation',
      description: 'In-depth research and evaluation studies to measure impact and inform decision-making.',
      features: [
        'Conducting baseline, mid-term, and end-line evaluations',
        'Performing qualitative and quantitative research studies',
        'Situational analyses and rapid needs assessments',
        'Impact assessments and outcome harvesting studies'
      ]
    },
    {
      id: 'data',
      icon: '📊',
      title: 'Data Solutions',
      description: 'Advanced data collection, analysis, and visualization solutions for real-time insights.',
      features: [
        'Data collection, management, and analysis using digital tools (ODK, Kobo Toolbox, SurveyCTO)',
        'Advanced data analysis using Microsoft Excel, R, and Power BI',
        'Spatial data analysis and mapping using QGIS',
        'Developing interactive data dashboards and visualization tools for real-time program tracking'
      ]
    },
    {
      id: 'capacity',
      icon: '👥',
      title: 'Capacity Building & Training',
      description: 'Empowering organizations and professionals with MEAL expertise and skills.',
      features: [
        'Training and coaching in MEAL methodologies and tools for organizations and staff',
        'Facilitating learning workshops and knowledge-sharing sessions',
        'Developing customized training manuals and resources on MEAL topics',
        'Mentoring for individual MEAL professionals'
      ]
    },
    {
      id: 'technical',
      icon: '💼',
      title: 'Technical Assistance & Advisory',
      description: 'Expert advisory services to strengthen program design and management.',
      features: [
        'Providing technical assistance in program design and theory of change development',
        'Facilitating strategic learning and adaptive management sessions',
        'Quality assurance of MEAL systems and data quality audits',
        'Policy and regulatory advisory related to results-based management'
      ]
    }
  ];

  const tools = [
    { name: 'ODK', category: 'Data Collection' },
    { name: 'Kobo Toolbox', category: 'Data Collection' },
    { name: 'SurveyCTO', category: 'Data Collection' },
    { name: 'Microsoft Excel', category: 'Analysis' },
    { name: 'R', category: 'Analysis' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'QGIS', category: 'Spatial Analysis' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <div className="fade-in-up">
            <h1>Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive MEAL, data analytics, and research solutions for 
              development organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section section-light">
        <div className="container">
          <div className="stagger-children">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                  <div className="service-icon" style={{ fontSize: '3rem', flexShrink: 0 }}>
                    {service.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2>{service.title}</h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                      {service.description}
                    </p>
                    <div className="grid grid-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center fade-in-up">Tools & Technologies</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            We leverage cutting-edge digital tools for efficient and impactful data solutions
          </p>
          <div className="grid grid-4 stagger-children">
            {tools.map((tool, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  background: 'var(--light-blue)', 
                  color: 'var(--primary-blue)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '600'
                }}>
                  {tool.name}
                </div>
                <small style={{ color: 'var(--text-light)' }}>{tool.category}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-light">
        <div className="container">
          <div className="card text-center" style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue), var(--dark-blue))',
            color: 'white',
            padding: '4rem 2rem'
          }}>
            <h2 style={{ color: 'white' }}>Ready to Transform Your Data into Impact?</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
              Contact us today to discuss how our services can enhance your program effectiveness.
            </p>
            <a href="/contact" className="btn" style={{ 
              background: 'white', 
              color: 'var(--primary-blue)',
              fontSize: '1.125rem',
              padding: '1rem 2rem'
            }}>
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;