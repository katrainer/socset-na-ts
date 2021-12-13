import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import {Sitebar} from "../Sitebar/Sitebar";

type propsType={
    sitebar: Array<sitebarOb>
}
type sitebarOb={
    id: string
    img: string
    name: string
}

export const Navbar = (props: propsType) => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <div>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </div>
                <Sitebar sitebar={props.sitebar}/>
            </div>
        </nav>
    )
}