import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './HeaderComponent.css'

const HeaderComponent = () => {
  return <div className="head">
        <Link to="/resources" className="router-footer">Resources</Link> 
        <Link to="/modules" className="router-footer">Modules</Link>
        <Link to="/" className="router-footer">Home</Link>
  </div>;
};

export default HeaderComponent
