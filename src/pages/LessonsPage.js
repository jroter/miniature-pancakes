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
                <div className="mod-title">Fresh Content</div>
                <div className="mod-container">
                   <div className="top-mod-container">
                        <div className='module'>
                            <ImageComponent image={icon} className="module-window-default"/>
                        </div>
                        <div className='module-window-large'>

                        </div>
                        <div className='module'>
                            <ImageComponent image={icon} className="module-window-default"/>
                        </div>
                   </div>
                   <div className="bottom-mod-container">
                        <div className='module'>
                            <ImageComponent image={icon} className="module-window-default"/>
                        </div>
                        <div className='module'>
                            <ImageComponent image={icon} className="module-window-default"/>
                        </div>
                        <div className='module'>
                            <ImageComponent image={icon} className="module-window-default"/>
                        </div>
                        <div className='module'>
                            <ImageComponent image={icon} className="module-window-default"/>
                        </div>
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
