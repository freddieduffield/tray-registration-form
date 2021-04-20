import React from "react";
import {Field} from "formik";

export const FormField: React.FC<{
    name: string,
    type?: string,
    validate?: Function,
}> = ({name, type, validate}) => {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <Field type={type} id={name} name={name} validate={validate}/>
        </>
    )
}
