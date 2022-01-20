import React from 'react'

const MyStyles = {
    height:'40px', width:'170px', 
    borderRadius:'4px', background:"#D8D8D8",fontSize:"12px",
    textTransform:'uppercase'
}
const ButtonComponent = ({label}) => {
    return (
        <button style={MyStyles}>{label}</button> 
    )
}

export default ButtonComponent