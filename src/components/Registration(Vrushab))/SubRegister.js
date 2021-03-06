import React from 'react'
import {ErrorMessage, useField } from 'formik'


export const Registration = ({label,...props}) => {
    const[field,meta]=useField(props);
    return (
        <div className="form-group">
            <label htmlFor={field.name} >{label}</label>
            <input 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid' }`}
                {...field}{...props}
                autoComplete="off"
            />
            <ErrorMessage name={field.name} className="error" />
          </div>
    )
}