import React from 'react'

// CSS
import './LessonsPage.css'

// Components
import FooterComponent from '../components/FooterComponent/FooterComponent'
import ImageComponent from '../components/ImageComponent'

// Assets
import icon from '../images/icon.png'

export default function LessonsPage() {
    return (
        <div>
            <div className="mod-page-container">
                <div className="mod-title"><strong>Fresh Content</strong></div>
                <div class="new-modules-container">
                    <div className="new-modules-top">
                        <div className="new-module-small">
                            <div className="new-module-small-img-background"></div>
                        </div>
                        <div className="new-module-large">
                        </div>
                        <div className="new-module-small">
                            <div className="new-module-small-img-background"></div>
                        </div>
                    </div>
                    <div className="new-modules-bottom">
                        {[...Array(4)].map((_, index) => (
                            <div className="new-module-small" key={index}>
                                <div className="new-module-small-img-background"></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="completed-title">
                        Completed
                </div>
                <div className="completed-container">
                    <div className='completed-module'>
                        <ImageComponent image={icon} className="module-window-default"/>
                    </div>
                    <div className='completed-module'>
                        <ImageComponent image={icon} className="module-window-default"/>
                    </div>
                    <div className='completed-module'>
                        <ImageComponent image={icon} className="module-window-default"/>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
