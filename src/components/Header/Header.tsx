import React from "react";
import s from "./Header.module.css";

type PorpsType = {
    isAuth: boolean
}

export const Header: React.FC<PorpsType> = ({isAuth}) => {
    return (
        <header className={s.header}>
            <img src="https://com-x.life/templates/Default/dleimages/noavatar.png" alt="batman"/>
            {isAuth ? <img
                src="https://com-x.life/templates/Default/dleimages/noavatar.png"
                alt="batman"
                className={s.login}/>:<span className={s.login}>LOGIN</span>}

        </header>

    )
}