import React from 'react'

// CSS
import './LessonsPage.css'

// Components
import FooterComponent from '../components/FooterComponent/FooterComponent'
import ImageComponent from '../components/ImageComponent'

// Assets
import icon from '../images/icon.png'
import ButtonComponent from '../components/ButtonComponent'

export default function LessonsPage() {
    const loren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
            <div className="mod-page-container">
                <div className="mod-title"><strong>Fresh Content</strong></div>
                <div class="new-modules-container">
                    <div className="new-modules-top">
                        {renderCard()}
                        <div className="new-module-large">
                            <div className="module-label">
                                Label
                            </div>
                        </div>
                        {renderCard()}
                    </div>
                    <div className="new-modules-bottom">
                        {[...Array(4)].map((_, index) => renderCard())}
                    </div>
                </div>
                <div className="completed-title">
                        Completed
                </div>
                <div className="completed-modules-container">
                    {[...Array(3)].map((_, index) => (
                        <div className="completed-module" key={index}>
                            <div className="completed-module-img-background"></div>
                            <div className="completed-module-info">Lesson {index+1}</div>
                            <ButtonComponent 
                                style={{border: '1px solid black',background:'white',color:'black'}} 
                                label="Read More" 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
