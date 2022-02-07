import React from 'react'
import { Link } from 'react-router-dom'

const MyStyles = {
    height:'40px', width:'170px', border: 'none',
    borderRadius:'4px', background:"#424B5A",fontSize:"12px",
    color:"#FFFFFF", textTransform:'uppercase'
}

const ButtonComponent = ({style,label,handleClick}) => {
    const test = () => {
        handleClick()
    }
    return (
        <button style={{...MyStyles,...style}} onClick={test}>{label}</button> 
    )
}

export default ButtonComponent
