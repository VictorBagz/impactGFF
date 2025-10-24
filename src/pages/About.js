import React from 'react';

const About = () => {
  const companyStructure = {
    divisions: [
      'MEAL Framework Design & Implementation',
      'Data Collection, Management & Analysis',
      'Research & Evaluation Studies',
      'Capacity Building & Training',
      'Data Visualization & Dashboard Development'
    ],
    leadership: [
      'Managing Director',
      'Head of Research & Evaluation',
      'Senior Data Analyst & Tech Lead',
      'MEAL Training & Capacity Building Manager',
      'Finance & Administration Officer'
    ]
  };

  const competencies = [
    'Expert team with extensive field experience in international development',
    'Proficiency in digital data collection and analysis platforms (ODK, Kobo, SurveyCTO, Power BI, R, QGIS)',
    'Strong methodological skills in mixed-methods research',
    'Ability to translate complex data into clear, user-friendly dashboards and reports',
    'Client-centric approach with flexible engagement models',
    'Deep understanding of donor reporting requirements (USAID, DFID, BMZ, UN)'
  ];

  const compliance = [
    'Registered under the Companies Act',
    'Tax-compliant and registered with the Uganda Revenue Authority (URA)',
    'Adherence to international ethical standards in research and data management'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <div className="fade-in-up">
            <h1>About Us</h1>
            <p className="hero-subtitle">
              Specialized consultancy firm dedicated to empowering development 
              projects through data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            <div className="fade-in-up">
              <h2>Company Overview</h2>
              <p>
                Impact Nexus Analytics Ltd. is a specialized consultancy firm 
                dedicated to empowering development projects and organizations 
                through robust data-driven insights.
              </p>
              <p>
                We specialize in designing and implementing comprehensive 
                Monitoring, Evaluation, Accountability, and Learning (MEAL) 
                frameworks, conducting in-depth research, and transforming 
                complex data into actionable intelligence.
              </p>
              <p>
                Our mission is to enhance program effectiveness, demonstrate 
                impact, and foster a culture of continuous learning and adaptive 
                management for our clients.
              </p>
            </div>
            <div className="fade-in-up">
              <div className="card">
                <h3>Why Choose Us?</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {competencies.slice(0, 4).map((item, index) => (
                    <li key={index} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Structure */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center fade-in-up">Company Structure</h2>
          <div className="grid grid-2 stagger-children">
            <div className="card">
              <h3>Key Divisions</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {companyStructure.divisions.map((division, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>›</span>
                    {division}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Leadership Team</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {companyStructure.leadership.map((leader, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>›</span>
                    {leader}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Competencies */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center fade-in-up">Key Competencies</h2>
          <div className="grid grid-2 stagger-children">
            {competencies.map((competency, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ 
                    background: 'var(--light-blue)', 
                    color: 'var(--primary-blue)', 
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    marginRight: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {index + 1}
                  </div>
                  <p style={{ margin: 0 }}>{competency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center fade-in-up">Regulatory & Legal Compliance</h2>
          <div className="grid grid-3 stagger-children">
            {compliance.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="value-icon" style={{ marginBottom: '1rem' }}>
                  {index === 0 && '🏛️'}
                  {index === 1 && '📝'}
                  {index === 2 && '⚖️'}
                </div>
                <h4>{item.split(':')[0]}</h4>
                <p style={{ margin: 0 }}>{item.split(':')[1] || item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;