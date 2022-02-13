import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/storeRedux";

type mstpType = {
    isAuth: boolean
}
const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.authReducer.isAuth,
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