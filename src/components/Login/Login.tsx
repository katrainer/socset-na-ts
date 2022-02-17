import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {loginAPI} from "../../API";

export const Login = () => {
    const onSubmit = (formData: LoginFormData) => {
        debugger
        loginAPI.setLogin(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <ContactForm onSubmit={onSubmit}/>
    </div>
}

export type LoginFormData = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<LoginFormData>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name='email' type="text" component="input" placeholder='email'/></div>
        <div><Field name='password' type="password" component="input" placeholder='Password'/></div>
        <div><Field name='rememberMe' type="checkbox" component="input"/> remember me</div>
        <div>
            <button>Log in</button>
        </div>
    </form>
}

const ContactForm = reduxForm<LoginFormData>({form: 'login'})(LoginForm)