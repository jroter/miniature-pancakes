import React from 'react'

const linkComponentStyles = {
    color: "#424B5A",
    textDecoration: 'none' 
}

const LinkComponent = ({label, href}) => {
    return (
        <a style={linkComponentStyles} href={href} target="_blank">{label}</a> 
    )
}

export default LinkComponent
