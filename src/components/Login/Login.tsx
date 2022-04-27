import React from 'react';
import {logInTC} from '../../redux/reducer/authReducer';
import {connect, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from '../../redux/store';
import {useFormik} from 'formik';
import s from './Login.module.css'


type LoginType = {
    ThunkLogIn: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

type valuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const Login: React.FC<LoginType> = React.memo(({ThunkLogIn, isAuth}) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.password.length < 3) errors.password = 'The password is too short'
            return errors;
        },
        onSubmit: (values: valuesType) => {
            dispatch(ThunkLogIn(values.email, values.password, values.rememberMe))
        },
    })
    if (isAuth) return <Redirect to="/profile"/>
    return <div className={s.allContainer}>
        <span>Log In</span>
        <div>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <input id={'email'}
                   type={'email'}
                   placeholder={'email'}
                   {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email &&
                <div style={{color: 'red'}}>{formik.errors.email}</div>}<br/>
            <input id={'password'}
                   type={'password'}
                   placeholder={'password'}
                   {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}<br/>
            <input id={'check'}
                   type={'checkbox'}
                   checked={formik.values.rememberMe}
                   {...formik.getFieldProps('rememberMe')}
            /> Remember Me<br/>
            <button type={'submit'}>Log In</button>
        </form>
    </div>
})


//----------------------------------------connect
const pstp = (state: AppRootStateType) => {
    return {
        isAuth: state.login.isAuth
    }
}
export default connect(pstp, {ThunkLogIn: logInTC})(Login)

//type
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
