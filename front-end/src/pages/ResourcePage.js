import React from 'react'
import './ResourcePage.css'

// Components
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent'
import ButtonComponent from '../components/ButtonComponent'
import LinkComponent from '../components/LinkComponent'

export default function ResourcePage() {

    const loren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam."

    return (
        <div>
            <HeaderComponent />
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
                        <div className="fresh-content-small-card">
                            <div className='small-card-image'></div>
                            <div className='small-card-info'>
                                <div className='label'>label</div>
                                <div className='small-card-title'>
                                    Read more about the pros of being an entrepreneur
                                </div>
                                <div className='small-card-excerpt'>{loren}</div>
                                <div className='small-card-hyper-link'>
                                    <LinkComponent label='Learn More!' href="https://youtu.be/rg7Fvvl3taU" />
                                </div>
                            </div>
                        </div>
                        <div className="fresh-content-large-card">
                            <div className='large-card-image'></div>
                            <div className='large-card-info'>
                                <div className='label'>label</div>
                                <div className='large-card-title'>
                                    Read more about the pros of being an entrepreneur
                                </div>
                                <div className='large-card-excerpt'>{loren}</div>
                                <div className='large-card-hyper-link'>
                                    <LinkComponent label='Learn More!' href="https://youtu.be/rg7Fvvl3taU" />
                                </div>
                            </div>
                        </div>
                        <div className="fresh-content-small-card">
                            <div className='small-card-image'></div>
                            <div className='small-card-info'>
                                <div className='label'>label</div>
                                <div className='small-card-title'>
                                    Read more about the pros of being an entrepreneur
                                </div>
                                <div className='small-card-excerpt'>
                                    {loren}
                                </div>
                                <div className='small-card-hyper-link'>
                                    <LinkComponent label='Learn More!' href="https://youtu.be/rg7Fvvl3taU" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}
