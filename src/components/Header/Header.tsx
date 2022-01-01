import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
    isAuth: boolean
}

export const Header: React.FC<PropsType> = ({isAuth}) => {
    return (
        <header className={s.header}>
            <img src="https://com-x.life/templates/Default/dleimages/noavatar.png" alt="batman"/>
            {isAuth ? <img
                src="https://com-x.life/templates/Default/dleimages/noavatar.png"
                alt="batman"
                className={s.login}/>
                :<NavLink to='/login' className={s.login}>LOGIN</NavLink>}
        </header>

    )
}