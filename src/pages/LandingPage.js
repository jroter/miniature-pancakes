import React, {useState} from 'react'
import ImageComponent from '../components/ImageComponent'
import ButtonComponent from '../components/ButtonComponent'
import LinkComponent from '../components/LinkComponent'
import donald from '../images/Donald.jpeg'
import template from '../images/template.png'
import icon from '../images/icon.png'
import './LandingPage.css' 
import { findAllInRenderedTree } from 'react-dom/test-utils'

export default function LandingPage() {
    // const test = Math.random() * 10
    // const [counter,setCounter] = useState(test)
    return (
        <div> 
            <div className="header">
                <div className="header-flex-box">
                    <div className="header-left-content">
                        <div className="title">Welcome to the Start-Up/Entrepreneur database</div>
                        <p>Start up info and entrepreneurship </p>
                        <div className="header-button-content">
                            <ButtonComponent label='Start Now!' />
                            <span className='button-spacer'></span>
                            <LinkComponent label='Watch Now!' href="https://www.youtube.com/watch?v=tB70YAoxk6A&ab_channel=LifeFunnyPets" />
                        </div>
                    </div>
                    <div className='header-right-content'>
                        <ImageComponent image={template} />
                    </div>
                </div>
            </div>
            <div className="landing-page-content-container">
                <div className="top-section-flexbox">
                    <div className="content-container-statement">Continue where you left off:</div>
                    <div className="see-all">
                        <LinkComponent label='See all' href="https://www.youtube.com/watch?v=dIuVC0umHVs&ab_channel=JoshR" />
                    </div>
                </div>
                <div className="landings-module-container">
                    <div className="big-module-container">
                        <div>
                            <div className="big-module-title">Start-Up Module</div>
                            <p className="big-module-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna al
                            </p>
                        </div>
                    </div> 
                    <div className="small-module-container">
                        <div className="small-module" >
                            <div className="small-module-title">Start-Up Module 1.1</div>
                        </div>
                        <div className="small-module" >
                            <div className="small-module-title">Start-Up Module 1.2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
