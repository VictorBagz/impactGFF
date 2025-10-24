import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Impact Nexus Analytics</h3>
            <p>Transforming data into actionable strategies for sustainable development in Africa.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Kampala, Uganda</p>
            <p>+256 781 036 002</p>
            <p>+256 706 769 850</p>
            <p>impactnexusanalyticsltd@gmail.com</p>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul style={{ listStyle: 'none' }}>
              <li>MEAL System Design</li>
              <li>Research & Evaluation</li>
              <li>Data Solutions</li>
              <li>Capacity Building</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Impact Nexus Analytics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;