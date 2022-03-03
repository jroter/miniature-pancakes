import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './HeaderComponent.css'

const HeaderComponent = () => {
  return <div className="head">
    <div className='header-link-container'>
        <Link to="/" className="header-link">Home</Link>
        <Link to="/modules" className="header-link">Modules</Link>
        <Link to="/resources" className="header-link">Resources</Link> 
    </div>
  </div>;
};

export default HeaderComponent
