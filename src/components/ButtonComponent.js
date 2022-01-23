import React from 'react'

const MyStyles = {
    height:'40px', width:'170px', border: 'none',
    borderRadius:'4px', background:"#424B5A",fontSize:"12px",
    color:"#FFFFFF", textTransform:'uppercase'
    
}
const ButtonComponent = ({label}) => {
    return (
        <button style={MyStyles}>{label}</button> 
    )
}

export default ButtonComponent