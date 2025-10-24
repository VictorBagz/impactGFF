import React from 'react';

const Clients = () => {
  const targetClients = [
    {
      category: 'Non-Governmental Organizations',
      clients: [
        'International Non-Governmental Organizations (INGOs)',
        'Local NGOs',
        'Community-Based Organizations (CBOs)'
      ]
    },
    {
      category: 'Government & Multilateral',
      clients: [
        'Government Ministries, Departments, and Agencies (MDAs)',
        'United Nations Agencies',
        'Other Multilateral Organizations'
      ]
    },
    {
      category: 'Development Partners',
      clients: [
        'Development Partners and Donor Agencies',
        'Social Enterprises',
        'Impact Investors'
      ]
    }
  ];

  const donorRequirements = [
    'USAID',
    'DFID',
    'BMZ',
    'UN Agencies',
    'World Bank',
    'African Development Bank'
  ];

  const sectors = [
    'Health & Nutrition',
    'Education',
    'Agriculture & Food Security',
    'Water, Sanitation & Hygiene (WASH)',
    'Climate Change & Environment',
    'Governance & Democracy',
    'Economic Development',
    'Humanitarian Response'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <div className="fade-in-up">
            <h1>Our Clients</h1>
            <p className="hero-subtitle">
              Partnering with organizations dedicated to sustainable development 
              and social impact across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center fade-in-up">Target Clients & Sectors</h2>
          <div className="grid grid-3 stagger-children">
            {targetClients.map((group, index) => (
              <div key={index} className="card">
                <h3>{group.category}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {group.clients.map((client, clientIndex) => (
                    <li key={clientIndex} style={{ 
                      padding: '0.75rem 0', 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      borderBottom: clientIndex < group.clients.length - 1 ? '1px solid #e5e7eb' : 'none'
                    }}>
                      <span style={{ 
                        color: 'var(--primary-blue)', 
                        marginRight: '0.75rem',
                        fontSize: '1.125rem'
                      }}>•</span>
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Requirements */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center fade-in-up">Donor Reporting Expertise</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            Deep understanding of donor reporting requirements and compliance standards
          </p>
          <div className="client-logos stagger-children">
            {donorRequirements.map((donor, index) => (
              <div key={index} className="client-logo">
                {donor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center fade-in-up">Sector Expertise</h2>
          <div className="grid grid-4 stagger-children">
            {sectors.map((sector, index) => (
              <div key={index} className="card text-center">
                <div className="value-icon" style={{ 
                  width: '50px', 
                  height: '50px', 
                  fontSize: '1.25rem',
                  margin: '0 auto 1rem'
                }}>
                  {index + 1}
                </div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>{sector}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="section section-gray">
        <div className="container">
          <div className="grid grid-2">
            <div className="fade-in-up">
              <h2>Our Partnership Approach</h2>
              <p>
                We believe in building long-term partnerships based on trust, 
                collaboration, and mutual learning. Our client-centric approach 
                ensures that we understand your unique needs and context.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: 'var(--primary-blue)', 
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    marginRight: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>1</span>
                  <div>
                    <h4 style={{ margin: 0 }}>Collaborative Engagement</h4>
                    <p style={{ margin: 0 }}>Working together to build your internal capacity</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ 
                    background: 'var(--primary-blue)', 
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    marginRight: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>2</span>
                  <div>
                    <h4 style={{ margin: 0 }}>Flexible Models</h4>
                    <p style={{ margin: 0 }}>Adapting to your specific needs and constraints</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ 
                    background: 'var(--primary-blue)', 
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    marginRight: '1rem',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>3</span>
                  <div>
                    <h4 style={{ margin: 0 }}>Sustainable Solutions</h4>
                    <p style={{ margin: 0 }}>Building systems that last beyond our engagement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-up">
              <div className="card">
                <h3>Client Success Stories</h3>
                <p>
                  Our work has helped organizations across East Africa to:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>✓</span>
                    Improve program effectiveness by 40%+
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>✓</span>
                    Secure additional funding through compelling impact evidence
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>✓</span>
                    Make data-driven decisions in real-time
                  </li>
                  <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--primary-blue)', marginRight: '0.5rem' }}>✓</span>
                    Build internal MEAL capacity for sustainable impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;