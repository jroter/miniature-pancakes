import React from 'react'

const ImageComponent = ({image, className}) => {
    return (
        <>
            <img src={image} className={className} style={{height:'inherit',width:'inherit'}}></img>
        </>
    )
}

export default ImageComponent
