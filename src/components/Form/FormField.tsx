import React from "react";
import {Field} from "formik";
import './Form.css';

export const FormField: React.FC<{
    name: string,
    type?: string,
    validate?: Function,
}> = ({name, type, validate}) => {
    const required = name !== 'role' ? 'required' : '';

    return (
        <>
            <label className={`text ${required}`} htmlFor={name}>{name}</label>
            <Field className="text" type={type} id={name} name={name} validate={validate}/>
        </>
    )
}
