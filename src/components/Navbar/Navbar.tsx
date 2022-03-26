import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {Sidebar} from '../Sitebar/Sitebar';

type propsType = {
    sidebar: Array<{
        id: string
        img: string
        name: string
    }>
}

export const Navbar: React.FC<propsType> = React.memo(({sidebar}) => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <div>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                </div>
                <Sidebar sidebar={sidebar}/>
            </div>
        </nav>
    )
})