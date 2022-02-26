import React from "react";
import s from "./renderField.module.css";

export const required = (value: any) =>value?undefined: 'Required'

export const renderField:React.FC<any> = ({ input, label, type, meta: { touched, error, warning } }) => {
    const touchedError = touched&&error
    return <div className={touchedError?s.renderField:'undefined'}>
    {/*return <div>*/}
        <label>{label}</label>
        <div>
            <input {...input} placeholder='write post' type={type}/>
            {touchedError&&<span>Required</span>}
        </div>
    </div>
}