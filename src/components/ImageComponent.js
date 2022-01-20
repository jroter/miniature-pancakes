import React from 'react'

const ImageComponent = ({image}) => {
    return (
        <>
            <img src={image} style={{height:'inherit',width:'inherit'}}></img>
        </>
    )
}

export default ImageComponent
