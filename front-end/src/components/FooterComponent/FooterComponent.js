import React from 'react';
import { Link } from 'react-router-dom';

// CSS 
import './FooterComponent.css'

const FooterComponent = () => {
  return <div className="footer">
      <Link to="/" className="footer-link">Home</Link>
      <Link to="/modules" className="footer-link">Modules</Link>
      <Link to="/resources" className="footer-link">Resources</Link> 
      
  </div>;
};

export default FooterComponent
