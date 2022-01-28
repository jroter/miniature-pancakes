import React from 'react'
import './ResourcePage.css'

// Components
import FooterComponent from '../components/FooterComponent/FooterComponent'
import ButtonComponent from '../components/ButtonComponent'
import ImageComponent from '../components/ImageComponent'

//images
import icon from '../images/icon.png'

export default function ResourcePage() {

    const loren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam."
    // const renderCard = () => {
    //     return (
    //         <div className="new-module-small">
    //             <div className="new-module-small-img-background">
    //                 <div className="module-label">
    //                     Label
    //                 </div>
    //             </div>
    //             <div className="new-module-info">
    //                 <div className="new-module-title">
    //                     Module
    //                 </div>
    //                 <p className="new-module-data">
    //                     {loren}
    //                 </p>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div>
            <div className="resource-container">
                <div className="resource-title">
                    Resources
                </div>
                <div className='resource-module-top-container'>
                    <div className="resource-module">
                            <div className="resource-module-title">
                                Video
                                <p className="resource-module-info">
                                    {loren}
                                </p>
                                <ButtonComponent label="Watch Video" />
                            </div>
                    </div>
                    <div className="resource-module">
                            <div className="resource-module-title">
                                Article
                                <p className="resource-module-info">
                                    {loren}
                                </p>
                                <ButtonComponent label="Read Article" />
                            </div>
                    </div>
                </div>
                <div className='resource-module-bottom-container'>
                    <div className='resource-bottom-title'>
                        Fresh Content
                    </div>
                    <div className="fresh-content-container">
                        <div className="fresh-content-small-card">1</div>
                        <div className="fresh-content-large-card">2</div>
                        <div className="fresh-content-small-card">3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
