import React, {useState} from 'react'
import ImageComponent from '../components/ImageComponent'
import ButtonComponent from '../components/ButtonComponent'
import LinkComponent from '../components/LinkComponent'
import bar from '../images/test.jpeg'
import donald from '../images/Donald.jpeg'
import header from '../images/linkedin_frame.jpeg'
import startup from '../images/lame.jpeg'
import './LandingPage.css' 

export default function LandingPage() {
    const test = Math.random() * 10
    const [counter,setCounter] = useState(test)
    return (
        <div>
            
            <div className="header">
                <div className="header-flex-box">
                    <div className="header-left-content">
                        <div className="title">Welcome to the Start-Up/Entrepreneur database</div>
                        <p>Start up info and entrepreneuship </p>
                        <div className="header-button-content">
                            <ButtonComponent label = 'Start Now!' />
                            <span className='button-spacer'></span>
                            <LinkComponent label='Watch Now!' href = "https://www.youtube.com/watch?v=tB70YAoxk6A&ab_channel=LifeFunnyPets" />
                        </div>
                    </div>
                    <div className='header-right-content'>
                        <ImageComponent image = {startup} />
                    </div>
                </div>
            </div>
        </div>
    )
}
