import React, {useState} from 'react'
import { Link } from "react-router-dom";

// Components
import AccordionComponent from '../components/AccordionComponent/AccordionComponent'
import ButtonComponent from '../components/ButtonComponent'
import ImageComponent from '../components/ImageComponent'
import LinkComponent from '../components/LinkComponent'
import FooterComponent from '../components/FooterComponent/FooterComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';

// CSS
import './LandingPage.css' 

// Assets
import template from '../images/template.png'
import icon from '../images/icon.png'

const loren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
const LandingPage = () => {
    return (
        <div> 
            <HeaderComponent />
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
                        <ImageComponent image={template} className="header-right-image"/>
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
                <div className="next-module-container">
                    <div className='next-module-statement'>Next Module:</div>
                    <div className="module-containers">
                        <div className="module-window">
                            <p className="module-title">Finance</p>
                            <div className="module-image"></div>
                            <AccordionComponent title={"lauren ipsom"} summary={loren} />
                            <AccordionComponent title={"lauren ipsom"} summary={loren} />
                            <AccordionComponent title={"lauren ipsom"} summary={loren} />
                        </div>
                        <div className="module-window">
                            <p className="module-title">Ideas</p>
                            <div className="module-image"></div>
                        </div>
                        <div className="module-window">
                            <p className="module-title">Technology</p>
                            <div className="module-image"></div>
                        </div>
                    </div>
                </div>
                <div className="article-title">Article</div>
                <div className="article-container">
                    <div className="article-window">
                        <p className="article-header"> 22 Oct 2022 | By Jack Morgan</p>
                        <p className="article-title">10 steps for success in start-ups</p>
                        <p className="article-info">{loren}</p>
                    </div>
                    <div className="article-window">
                        <p className="article-header"> 22 Oct 2022 | By Jack Morgan</p>
                        <p className="article-title">Peter Thiel’s top suggestions for start-ups</p>
                        <p className="article-info">{loren}</p>
                    </div>
                    <div className="article-window">
                        <p className="article-header"> 22 Oct 2022 | By Jack Morgan</p>
                        <p className="article-title">How to be an entrepreneur</p>
                        <p className="article-info">{loren}</p>
                    </div>
                </div>
                <div className="read-button">
                    <ButtonComponent label="Read All" />
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}

export default LandingPage
