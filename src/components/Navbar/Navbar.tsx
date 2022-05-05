import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {SiActigraph, SiMessenger} from 'react-icons/si'
import {TiBusinessCard} from 'react-icons/ti';
import {GiThreeFriends} from 'react-icons/gi';
import {logOutTC} from '../../redux/reducer/authReducer';

export const Navbar = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(logOutTC())
    }
    return (
        <nav className={s.navbar}>
            <NavLink exact to="/" activeClassName={s.active}><TiBusinessCard/>My profile</NavLink>
            <NavLink to="/dialogs" activeClassName={s.active}><SiMessenger/>Message</NavLink>
            <NavLink to="/friends" activeClassName={s.active}><GiThreeFriends/>Friends</NavLink>
            <NavLink to="/users" activeClassName={s.active}><SiActigraph/>Users</NavLink>
            {isAuth &&
                <button onClick={logOutHandler}>Log Out<Link style={{display: 'none'}} to={''}/></button>}
        </nav>
    )
}