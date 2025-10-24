import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['Kampala, Uganda']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+256 781 036 002', '+256 706 769 850']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['impactnexusanalyticsltd@gmail.com']
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '6rem 0 4rem' }}>
        <div className="container">
          <div className="fade-in-up">
            <h1>Contact Us</h1>
            <p className="hero-subtitle">
              Ready to transform your data into impact? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="fade-in-up">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="form-input"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up">
              <h2>Get in Touch</h2>
              <p style={{ marginBottom: '2rem' }}>
                We&apos;re here to help you harness the power of data for meaningful impact. 
                Reach out to discuss your project needs or learn more about our services.
              </p>

              <div className="grid grid-1">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card" style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ fontSize: '2rem' }}>{info.icon}</div>
                      <div>
                        <h4 style={{ margin: '0 0 0.5rem 0' }}>{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} style={{ margin: 0 }}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="card" style={{ marginTop: '2rem' }}>
                <h3>Service Areas</h3>
                <p>We serve clients across East Africa and beyond, with physical presence in Uganda.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Burundi', 'South Sudan', 'Regional'].map((country, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'var(--light-blue)',
                        color: 'var(--primary-blue)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="text-center fade-in-up">Our Location</h2>
          <div className="card fade-in-up">
            <div style={{ 
              background: 'var(--light-blue)', 
              height: '300px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: '0.5rem',
              color: 'var(--primary-blue)',
              fontSize: '1.125rem',
              fontWeight: '500'
            }}>
              📍 Kampala, Uganda - Interactive Map Coming Soon
            </div>
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
            <h2 style={{ color: 'white' }}>Start Your Impact Journey Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
              Let&apos;s discuss how we can help you transform data into measurable impact.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+256781036002" className="btn" style={{ 
                background: 'white', 
                color: 'var(--primary-blue)'
              }}>
                Call Us Now
              </a>
              <a href="mailto:impactnexusanalyticsltd@gmail.com" className="btn btn-outline" style={{ 
                color: 'white', 
                borderColor: 'white' 
              }}>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;