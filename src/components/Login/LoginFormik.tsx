import React from "react";
import {logInTC} from "../../redux/reducer/authReducer";
import {connect, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/store";
import {useFormik} from "formik";


type LoginType = {
    ThunkLogIn: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

type valuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const LoginFormik: React.FC<LoginType> = React.memo(({ThunkLogIn, isAuth}) => {
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
    if (isAuth) return <Redirect to='/profile'/>
    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={formik.handleSubmit}>
            <input id={'email'}
                   type={'email'}
                   placeholder={'email'}
                   {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email &&
                <div style={{color: "red"}}>{formik.errors.email}</div>}<br/>
            <input id={'password'}
                   type={'password'}
                   placeholder={'password'}
                   {...formik.getFieldProps('password')}/>
            {formik.touched.password && formik.errors.password &&
                <div style={{color: "red"}}>{formik.errors.password}</div>}<br/>
            <input id={'check'}
                   type={'checkbox'}
                   checked={formik.values.rememberMe}
                   {...formik.getFieldProps('rememberMe')}
            /> Запомнить<br/>
            <button type={"submit"}>Войти</button>
        </form>
    </div>
})


//----------------------------------------connect
const pstp = (state: AppRootStateType) => {
    return {
        isAuth: state.login.isAuth
    }
}
export default connect(pstp, {ThunkLogIn: logInTC})(LoginFormik)

//type
type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
