import React from 'react'

const MyStyles = {
    color:"#424B5A"
}
const LinkComponent = ({label, href}) => {
    return (
        <a style={MyStyles} href={href} target="_blank">{label}</a> 
    )
}

export default LinkComponent