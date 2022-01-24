import React, {useState} from 'react';
import './AccordionComponent.css';

const AccordionComponent = ({title, summary}) => {
  const [isActive, setIsActive] = useState(false)
  const accordionClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="accordion" onClick={() => accordionClick()}>
        <div>
          {title}
        </div>
        <div className={isActive ? 'accordion-control-active' : 'accordion-control-inactive'}>
          &gt;
        </div>
        <div className={isActive ? 'accordion-content-visible' : 'accordion-content-invisibile'}>
            {summary}
        </div>
    </div>
  )
};

export default AccordionComponent
