import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/store";

type mstpType = {
    isAuth: boolean
}
const mstp = (state: AppRootStateType): mstpType => {
    return {
        isAuth: state.login.isAuth,
    }
}

export function WithAuthRedirect<T>(Component: React.ComponentType<T>) {
    const RedirectComponent = (props: mstpType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T}/>
    }
    const connectRedirectComponent = connect(mstp)(RedirectComponent)
    return connectRedirectComponent
}