import React, { useState } from 'react'
import './FormInput.css'

const FormInput = ({ label, errorMessage, id, handleChange, ...inputProps }) => {

    const [focused, setFocused] = useState(false)

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input 
                onChange={handleChange}
                {...inputProps}
                onBlur={handleFocus} //! On Click and Leave
                onFocus={() => (inputProps.name === 'confirmPassword') && setFocused(true)} //! On Click
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput
