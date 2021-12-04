import React from 'react'
// import "./Style.css"

const InputField = ({value,onChange,label,type="text",error}) => {
    return (
        <div className="input-field">
            <input 
            type={type}
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            /> 
        <div className={`form-label ${value? "filled-form-label" :""}`}>
                {label}
        </div>
            {error && <div className="text-field-error-text">
                {error} 
        </div>}
        </div>
    )
}

export default InputField
