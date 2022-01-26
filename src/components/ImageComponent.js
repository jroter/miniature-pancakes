import React from 'react'

const ImageComponent = ({image, className}) => {
    return (
        <>
            <img src={image} className={className}></img>
        </>
    )
}

export default ImageComponent
