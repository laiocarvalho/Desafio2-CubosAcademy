import React from 'react'
import './Inputs.css'


export default function Inputs({
    placeholder, 
    label, 
    id, 
    type, 
    name,
    value,
    maxLength,
    onBlur
}) {
    return (
        <div>
            <label for={id}>{label}</label>
            <br></br>
            <input 
                className="inputs-input-style" 
                placeholder={placeholder} 
                id={id} 
                type={type} 
                name={name} 
                value={value}
                maxLength={maxLength}
                onBlur ={onBlur}
                >
            </input>
        </div>
    )
}
