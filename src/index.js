import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import LoadingSpinner from './components/LoadingSpinner';

// Import global styles
import './styles/App.css';
import './styles/components.css';

// Import web vitals for performance monitoring
import reportWebVitals from './reportWebVitals';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Create the App component directly in index.js
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimal loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// Render the app
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();

// Enable hot module replacement for development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    root.render(
      <React.StrictMode>
        <HashRouter>
          <NextApp />
        </HashRouter>
      </React.StrictMode>
    );
  });
}