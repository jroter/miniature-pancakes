import React from 'react';
import { Link } from 'react-router-dom';

// CSS 
import './FooterComponent.css'

const FooterComponent = () => {
  return <div className="footer">
    <Link to="/resources" className="router-footer">Resources</Link> 
    <Link to="/modules" className="router-footer">Modules</Link>
    <Link to="/" className="router-footer">Home</Link>
  </div>;
};

export default FooterComponent
