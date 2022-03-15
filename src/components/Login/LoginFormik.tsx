import React from "react";
import {logInTC} from "../../redux/reducer/authReducer";
import {connect, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import {useFormik} from "formik";


type LoginType = {
    ThunkLogIn: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

type valuesType = {
    email: string,
    password: string,
    check: boolean
}
const LoginFormik: React.FC<LoginType> = ({ThunkLogIn, isAuth}) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            check: false
        },
        onSubmit: (values: valuesType) => {
            dispatch(ThunkLogIn(values.email, values.password, values.check))
        },
    })
    if (isAuth) return <Redirect to='/profile'/>
    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={formik.handleSubmit}>
            <input id={'email'}
                   name={'email'}
                   type={'email'}
                   placeholder={'email'}
                   onChange={formik.handleChange}
                   value={formik.values.email}/> <br/>
            <input id={'password'}
                   name={'password'}
                   type={'password'}
                   placeholder={'password'}
                   onChange={formik.handleChange}
                   value={formik.values.password}/><br/>
            <input id={'check'}
                   name={'check'}
                   type={'checkbox'}
                   onChange={formik.handleChange}
                   checked={formik.values.check}/> Запомнить<br/>
            <button type={"submit"}>Войти</button>
        </form>
    </div>
}


//----------------------------------------connect
const pstp = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}
export default connect(pstp, {ThunkLogIn: logInTC})(LoginFormik)
