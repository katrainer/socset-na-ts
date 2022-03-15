import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {loginAPI} from "../../API";
import {logOutTC} from "../../redux/reducer/authReducer";

type PropsType = {
    isAuth: boolean
    ThunkLogOut: ()=>void
}

export const Header: React.FC<PropsType> = ({isAuth,ThunkLogOut}) => {
    const outLogin = ()=>{
        ThunkLogOut()
    }
    return (
        <header className={s.header}>
            <img src="https://com-x.life/templates/Default/dleimages/noavatar.png" alt="batman"/>
            {isAuth ? <button className={s.login} onClick={outLogin}>Log Out</button>
                : <NavLink to='/login' className={s.login}>LOGIN</NavLink>}
        </header>

    )
}