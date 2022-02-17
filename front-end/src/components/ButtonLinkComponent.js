import React from 'react';
import { Link } from 'react-router-dom';


const buttonLinkStyles = {
    padding: '14px 30px', letterSpacing:'1px',
    borderRadius:'4px', background:"#424B5A",fontSize:"12px",
    color:"#FFFFFF", textTransform:'uppercase', textDecoration: 'none'
}

const ButtonLinkComponent = ({style, route,text}) => {
  return (
    <Link style={{...buttonLinkStyles, ...style}} to={route} className='button-link'>{text}</Link> 
  );
};

export default ButtonLinkComponent;
