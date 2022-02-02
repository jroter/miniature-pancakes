import React from 'react';
import { Link } from 'react-router-dom';


const buttonLinkStyles = {
    padding: '14px 30px', letterSpacing:'1px',
    borderRadius:'4px', background:"#424B5A",fontSize:"12px",
    color:"#FFFFFF", textTransform:'uppercase', textDecoration: 'none'
}

const ButtonLinkComponent = ({route,text}) => {
  return (
    <Link style={buttonLinkStyles} to={route} className='button-link'>{text}</Link> 
  );
};

export default ButtonLinkComponent;
