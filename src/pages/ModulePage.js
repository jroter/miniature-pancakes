import React from 'react';

// CSS
import './ModulePage.css';

//Images
import '../images/icon.png'
import LinkComponent from '../components/LinkComponent';


export default function ModulePage() {

    const loren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam consequat sed doeiusm."
    const renderCard = () => {
        return (
            <div className="new-module-small">
                <div className="new-module-small-img-background">
                    <div className="module-label">
                        Label
                    </div>
                </div>
                <div className="new-module-info">
                    <div className="new-module-title">
                        Module
                    </div>
                    <p className="new-module-data">
                        {loren}
                    </p>
                </div>
            </div>
        )
    }

  return (
      <div>
        <div className="module-title-container">
            <div className='module-title'>Module 1</div>
            <p className='module-info'>
                {loren}
            </p>
        </div>
        <div className='page-container'>
            <div className='module-container'>
                <div className='module-object'>
                    <div className='module-object-data'>
                        <div className='module-title'>Module 1.1</div>
                            <p className='module-details'>
                                {loren}
                            </p>
                        </div>
                    <div className='module-image'></div>
                </div>
                <div className='module-object'>
                    <div className='module-object-data'>
                        <div className='module-title'>Module 1.2</div>
                            <p className='module-details'>
                                {loren}
                            </p>
                        </div>
                    <div className='module-image'></div>
                </div>
                <div className='module-object'>
                    <div className='module-object-data'>
                        <div className='module-title'>Module 1.3</div>
                            <p className='module-details'>
                                {loren}
                            </p>
                        </div>
                    <div className='module-image'></div>
                </div>
            </div>
            <div className='next-modules'>
                <div className='next-module-header'>
                    <div className='next-module-title'>
                        Next Modules
                    </div>
                    <div className="see-all">
                        <LinkComponent label='See all' href="https://www.youtube.com/watch?v=dIuVC0umHVs&ab_channel=JoshR" />
                    </div>
                </div>
                <div className="next-modules-bottom">
                        {[...Array(4)].map((_, index) => renderCard())}
                </div>
            </div>
        </div>
    </div>
  );
}
