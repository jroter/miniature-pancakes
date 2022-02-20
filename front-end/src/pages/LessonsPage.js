import React, {useState, useEffect} from 'react'
import axios from 'axios';

// CSS
import './LessonsPage.css'

// Components
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent'
import ShowLikesComponent from '../components/ShowLikesComponent/ShowLikesComponent';

// Assets
import ButtonComponent from '../components/ButtonComponent'

export default function LessonsPage() {
    const loren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    
    const [moduleData, setModuleData] = useState([])

    const apiEndPoint = process.env.NODE_ENV === 'development' 
    ? 'http:localhost:4000'
    : 'https://fbn2d2rqa8.execute-api.us-west-2.amazonaws.com/prod'

    const getAllModulesData = () => {
        axios.get(`${apiEndPoint}/module/allmodules`).then(response => {
            const compare = (a,b) => {
                if((a.module) < b.module) {
                    return -1;
                }if(a.module > b.module) {
                    return 1;
                }else {
                    return 0;
                }
            }
            const serverResponse = response.data.Items.sort(compare)
            setModuleData(serverResponse)
        })
    }

    useEffect(() => {
        getAllModulesData()
    }, [])

    const renderCard = (index) => {
        return (
            <div className="new-module-small" key={`card-${index}`}>
                <div className="new-module-small-img-background">
                    <div className="module-label">
                        Label
                    </div>
                </div>
                <div className="new-module-info">
                    <div className="new-module-title">
                        Module {moduleData[index]?.module} 
                    </div>
                    <p className="new-module-data">
                        {loren}
                    </p>
                    <ShowLikesComponent likes={moduleData[index]?.likes || 0} />
                </div>
            </div>
        )
    }

    return (
        <div>
            <HeaderComponent />
            <div className="mod-page-container">
                <div className="mod-title"><strong>Fresh Content</strong></div>
                <div className="new-modules-container">
                    <div className="new-modules-top">
                        {renderCard(0)}
                        <div className="new-module-large">
                            <div className="module-label">
                                Label
                            </div>
                        </div>
                        {renderCard(1)}
                    </div>
                    <div className="new-modules-bottom">
                        {[...Array(4)].map((_, index) => renderCard(index+2))}
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
